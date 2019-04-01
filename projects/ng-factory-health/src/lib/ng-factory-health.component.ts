import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Machine } from './model/machine';
import { D3, D3Service } from 'd3-ng2-service';

@Component({
  selector: 'lib-ng-factory-health',
  templateUrl: './ng-factory-health.component.html',
  styleUrls: ['./ng-factory-health.component.scss']
})
export class NgFactoryHealthComponent implements OnInit {
  @Input()
  public allMachines = new Array<Machine>();

  private d3: D3; // <-- Define the private member which will hold the d3 reference

  @ViewChild('donut') donut;

  @Input()
  public labelMap = new Map<string, string>();

  private widthHeight = 150;
  private radius = this.widthHeight / 2;
  private donutWidth = 20;

  @Input()
  donutPercentValue = 30;

  @Input()
  public todaysMachineAvailability: Array<any>;

  constructor(d3Service: D3Service) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
  }

  ngOnInit() {
    // test responsiveness
    // console.log(this.donut.nativeElement.offsetWidth);

    // create SVG inside #donut element
    const svgChart = this.d3
      .select('#donut')
      .append('svg')
      .attr('width', this.widthHeight)
      .attr('height', this.widthHeight)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.widthHeight / 2 + ',' + this.widthHeight / 2 + ')'
      );

    // define width of circle
    const arc = this.d3
      .arc()
      .innerRadius(this.radius - this.donutWidth)
      .outerRadius(this.radius);

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
      .data(pie(this.todaysMachineAvailability.map(i => i.count)))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', d => this.todaysMachineAvailability[d.index].label);

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
      .text(this.donutPercentValue + '%');
  }
}
