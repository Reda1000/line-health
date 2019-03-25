import { Component } from '@angular/core';
import { Machine } from './model/machine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'line-health';

  public allMachines: Array<Machine> = new Array<Machine>();
  public todaysMachineAvailability: Array<any>;
  public labelMap : Map<string,string> = new Map<string,string>();

  constructor () {

    // translations
    this.labelMap.set("lbl.availToday",   "Today's availability");
    this.labelMap.set("lbl.24hours",      "24 hour avaiablility");
    this.labelMap.set("lbl.producing",    "Producing");
    this.labelMap.set("lbl.idle",         "Idle");
    this.labelMap.set("lbl.unavailable",  "Unavailable");
    this.labelMap.set("lbl.noData",       "No data");
    this.labelMap.set("lbl.status",       "Status");


    // some test data
    let m1 = new Machine();
    m1.name = "DMX Gorki A200";
    m1.status = "red";
    m1.imageUrl = "m1.PNG";
    m1.largeImageUrl = "machine-image.png";
    m1.availabilityArr = [
      'red', 'green', 'green', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'red', 'green', 'green', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'green', 'green'
    ];
    this.allMachines.push(m1);

    let m2 = new Machine();
    m2.name = "Gigglmeier DX1000";
    m2.status = "green";
    m2.imageUrl = "m2.PNG";
    m2.availabilityArr = [
      'red', 'red', 'red', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'red', 'green', 'green', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'green', 'red'
    ]
    this.allMachines.push(m2);

    let m3 = new Machine();
    m3.name = "Mitsibushi GMX";
    m3.status = "yellow";
    m3.imageUrl = "m3.PNG";
    m3.availabilityArr = [
      'red', 'red', 'red', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'red', 'green', 'green', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'green', 'green'
    ]
    this.allMachines.push(m3);

    let m4 = new Machine();
    m4.name = "Casparex M4i";
    m4.status = "green";
    m4.imageUrl = "m4.PNG";
    m4.availabilityArr = [
      'red', 'red', 'red', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'yellow',
      'red', 'green', 'green', 'yellow', 'yellow', 'green', 'green', 'green', '', '', 'green',
      '', ''
    ]
    this.allMachines.push(m4);

    this.todaysMachineAvailability = [
      { label: "red", count: 10 }, 
      { label: "green", count: 20 },
      { label: "yellow", count: 30 },
      { label: "#ccc", count: 40 }
    ];
  }

  
}
