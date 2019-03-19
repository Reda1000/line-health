import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Machine } from '../model/machine';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { color, RGBColor } from 'd3-color';

@Component({
  selector: 'line-health',
  templateUrl: './line-health.component.html',
  styleUrls: ['./line-health.component.css']
})
export class LineHealthComponent implements OnInit {

  public allMachines = new Array<Machine>();

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  @ViewChild('donut') donut;

  private widthHeight=150;
  private radius = this.widthHeight / 2;
  private donutWidth= 20;

  private dataset = [
    { label: "red", count: 10 }, 
    { label: "green", count: 20 },
    { label: "yellow", count: 30 },
    { label: "#ccc", count: 40 }
  ];

  constructor(element: ElementRef, d3Service: D3Service) { 

    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;

    // some test data
    let m1 = new Machine();
    m1.name = "DMG Mori A200";
    m1.status = "red";
    m1.imageUrl = "m1.PNG";
    this.allMachines.push(m1);

    let m2 = new Machine();
    m2.name = "Anschütz DX1000";
    m2.status = "green";
    m2.imageUrl = "m2.PNG";
    this.allMachines.push(m2);

  }

  ngOnInit() {

    console.log(this.donut.nativeElement.offsetWidth);

    let svgChart = this.d3.select('#donut').append('svg').attr('width', this.widthHeight).attr('height', this.widthHeight)
                    .append('g').attr('transform', 'translate(' + (this.widthHeight / 2) + ',' + (this.widthHeight / 2) + ")");

    let arc = this.d3.arc().innerRadius(this.radius - this.donutWidth).outerRadius(this.radius);

    let pie = this.d3.pie().value((d) => { return d["count"]; }).sort(null);

    svgChart.append("text")
    .style("font-size","34px")
    .attr("y", -5)
    .attr("x", 0)
    .attr("dy", ".47em")                        
    .style("text-anchor", "middle")
    .style("fill", "#004669")
    .style("font-weight", "regular")
    .text("50%");

    let path = svgChart.selectAll('path').data(pie(this.dataset))
                  .enter().append('path').attr('d', <any>arc)
                  .attr('fill', (d,i) => { return d.data.label});
  
                  
  }

}
