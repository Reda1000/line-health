import { Component, OnInit, Input, ElementRef, ViewChild, HostListener, AfterViewInit, HostBinding } from '@angular/core';
import { Machine } from '../model/machine';
import { D3Service, D3 } from 'd3-ng2-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'machine-history',
  templateUrl: './machine-history.component.html',
  styleUrls: ['./machine-history.component.css']
})
export class MachineHistoryComponent implements OnInit, AfterViewInit {

  @ViewChild('barchart') barchart;
  
  @Input() isFirst: boolean;
  @Input() machine: Machine;

  @Input() highlightColor: string = "gold";

  @Input()
  public labelMap = new Map<string,string>();
  
  @HostBinding("attr.style")
  public get valueAsStyle():any {
    return this.sanitizer.bypassSecurityTrustStyle(`--highlight-color: ${this.highlightColor}`)
  } 

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  
  constructor(element: ElementRef, d3Service: D3Service, private sanitizer:DomSanitizer) { 

    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }

  ngAfterViewInit() {

    this.drawChart();
  }

  ngOnInit() {

  }

  drawChart() {

    // FLEX elements --> scrollWidth(!)
    let width = this.barchart.nativeElement.scrollWidth;
    let height = this.barchart.nativeElement.scrollHeight;
    console.log(width + "," + height);

    this.d3.select(this.barchart.nativeElement).select('svg').remove();

    // create SVG inside #donut element 
    let svgChart = this.d3.select(this.barchart.nativeElement).append('svg').attr('width', "100%")
                    .append('g');

    let percWidth = width / 24;
    
    if (this.machine) {
      // draw 1hour sections
      for (var i=0;i<24;i++) {
        let sectionColor = this.machine.availabilityArr[i];
        if (sectionColor == '') {
          // no computed value
          sectionColor = "#ccc";
        }
        svgChart.append('rect').attrs({ x:i * percWidth, y:0, width: percWidth, height: 21, stroke:'white', fill: sectionColor});
      }
    } else {
      // first row: draw scale
      for (var i=0;i<25;i++) {
         svgChart.append('line').attrs({ x1:i * percWidth, y1:5, x2: i * percWidth, y2: 14, stroke:'#ccc' });
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
     this.drawChart();
  }
  
  getStatusClass(machine: Machine) {
    if (!machine) {
      return "status-white";
    }
    return "status-" + machine.status;
    
  }

}
