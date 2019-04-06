import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  HostBinding
} from '@angular/core';
import { Machine, ColorTable } from '../model/machine';
import { D3Service, D3 } from 'd3-ng2-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-machine-history',
  templateUrl: './machine-history.component.html',
  styleUrls: ['./machine-history.component.css']
})
export class MachineHistoryComponent implements OnInit, AfterViewInit {
  highlightColor = 'gold';
  selected = false;

  @ViewChild('barchart') barchart;

  @Input('selected') set select(select: boolean) {
    this.selected = select;
  }

  @Input() machine: Machine;

  @Input()
  public labelMap: { [key: string]: string } = {};

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--highlight-color: ${this.highlightColor}`
    );
  }

  private d3: D3; // <-- Define the private member which will hold the d3 reference

  constructor(
    d3Service: D3Service,
    private sanitizer: DomSanitizer
  ) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
  }

  ngAfterViewInit() {
    setTimeout(_ => this.drawChart());
  }

  ngOnInit() {}

  drawChart() {
    // FLEX elements --> scrollWidth(!)
    const width = this.barchart.nativeElement.scrollWidth;
    const height = this.barchart.nativeElement.scrollHeight;

    this.d3
      .select(this.barchart.nativeElement)
      .select('svg')
      .remove();

    // create SVG inside #donut element
    const svgChart = this.d3
      .select(this.barchart.nativeElement)
      .append('svg')
      .attr('width', '100%')
      .append('g');

    const percWidth = width / 24;

    if (this.machine) {
      // draw 1hour sections
      for (let i = 0; i < 24; i++) {
        svgChart
          .append('rect')
          .attrs({
            x: i * percWidth,
            y: 0,
            width: percWidth,
            height: 21,
            stroke: 'white',
            fill: ColorTable.machineCodes[this.machine.state.history[i]]
          });
      }
    } else {
      // first row: draw scale
      for (let i = 0; i < 25; i++) {
        svgChart
          .append('line')
          .attrs({
            x1: i * percWidth,
            y1: 5,
            x2: i * percWidth,
            y2: 14,
            stroke: '#ccc'
          });
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.drawChart();
  }

  getStatusClass(machine: Machine) {
    if (!machine) {
      return 'status-white';
    }
    return 'status-' + ColorTable.machineCodes[machine.state.live];
  }
}
