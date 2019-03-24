import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Machine } from '../model/machine';
import { D3Service, D3, Selection, PieArcDatum } from 'd3-ng2-service';
import { color, RGBColor } from 'd3-color';

@Component({
  selector: 'line-health',
  templateUrl: './line-health.component.html',
  styleUrls: ['./line-health.component.css']
})
export class LineHealthComponent implements OnInit {

  @Input()
  public allMachines = new Array<Machine>();

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  @ViewChild('donut') donut;

  private widthHeight=150;
  private radius = this.widthHeight / 2;
  private donutWidth= 20;

  @Input()
  public todaysMachineAvailability: Array<any>;

  constructor(element: ElementRef, d3Service: D3Service) { 

    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;

  }

  ngOnInit() {

    console.log(this.donut.nativeElement.offsetWidth);

    // create SVG inside #donut element 
    let svgChart = this.d3.select('#donut').append('svg').attr('width', this.widthHeight).attr('height', this.widthHeight)
                    .append('g').attr('transform', 'translate(' + (this.widthHeight / 2) + ',' + (this.widthHeight / 2) + ")");

    // define width of circle
    let arc = this.d3.arc().innerRadius(this.radius - this.donutWidth).outerRadius(this.radius);

    // define data values and order
    let pie = this.d3.pie().value((d:any) => { return d; }).sort(null);

    // define colors
    let path = svgChart.selectAll('path').data(pie(this.todaysMachineAvailability.map(i => i.count)))
                  .enter().append('path').attr('d', <any>arc)
                  .attr('fill', (d) => this.todaysMachineAvailability[d.index].label );
  
    

    // add % figure in the middle of the gauge
    svgChart.append("text")
                  .style("font-size","34px")
                  .attr("y", -5)
                  .attr("x", 0)
                  .attr("dy", ".47em")                        
                  .style("text-anchor", "middle")
                  .style("fill", "#004669")
                  .style("font-weight", "regular")
                  .text("50%");               
  }

}
