import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { Machine, ColorTable } from './model/machine';
import { D3, D3Service } from 'd3-ng2-service';

@Component({
  selector: 'lib-ng-factory-health',
  templateUrl: './ng-factory-health.component.html',
  styleUrls: ['./ng-factory-health.component.scss']
})
export class NgFactoryHealthComponent implements OnInit {
  private static widthHeight = 150;
  private static radius = NgFactoryHealthComponent.widthHeight / 2;
  private static donutWidth = 20;

  private d3: D3 = this.d3Service.getD3();
  public machines: Machine[];
  public machine: Machine;

  @ViewChild('donut') donut;

  @Input('machines')
  set setMachines(machines: Machine[]) {
    this.machines = machines;
    if (this.machine) {
      this.machine = machines.find(_ => _.id === this.machine.id);
      this.updateAvailability(this.machine.state.summary || []);
    }
  }

  @Input()
  public labelMap: { [key: string]: string } = {};

  @Input()
  set selectMachine(sel: string) {
    const machine = this.machines.find(_ => _.id === sel);
    if (machine) {
      this.machine = machine;
      this.updateAvailability(machine.state.summary);
    }
  }

  @Output() selectedMachine: EventEmitter<Machine> = new EventEmitter();

  constructor(private d3Service: D3Service) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
  }

  ngOnInit() {}

  clickedMachine(machine: Machine) {
    this.machine = machine;
    this.selectedMachine.next(machine);
    this.updateAvailability(machine.state.summary);
  }

  updateAvailability(
    data: { code: 'ready' | 'run' | 'stop' | 'unavailable'; value: number }[]
  ) {
    this.d3
    .select('#donut')
    .selectAll("*").remove();
    // create SVG inside #donut element
    const svgChart = this.d3
      .select('#donut')
      .append('svg')
      .attr('width', NgFactoryHealthComponent.widthHeight)
      .attr('height', NgFactoryHealthComponent.widthHeight)
      .append('g')
      .attr(
        'transform',
        'translate(' +
          NgFactoryHealthComponent.widthHeight / 2 +
          ',' +
          NgFactoryHealthComponent.widthHeight / 2 +
          ')'
      );

    // define width of circle
    const arc = this.d3
      .arc()
      .innerRadius(
        NgFactoryHealthComponent.radius - NgFactoryHealthComponent.donutWidth
      )
      .outerRadius(NgFactoryHealthComponent.radius);

    // define data values and order
    const pie = this.d3
      .pie()
      .value((d: any) => {
        return d;
      })
      .sort(null);

    // define colors
    const path = svgChart
      .selectAll('path')
      .data(pie(data.map(i => i.value)))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr(
        'fill',
        d => ColorTable.machineCodes[data[d.index].code]
      );

    const percentage =
      (data.find(_ => _.code === 'run') || { value: 0 }).value /
      data.reduce((a, b) => a + (b.value || 0), 0);
    // add % figure in the middle of the gauge
    svgChart
      .append('text')
      .style('font-size', '34px')
      .attr('y', -5)
      .attr('x', 0)
      .attr('dy', '.47em')
      .style('text-anchor', 'middle')
      .style('fill', '#004669')
      .style('font-weight', 'regular')
      .text(percentage * 100 + '%');
  }
}
