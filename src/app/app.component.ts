import { Component } from '@angular/core';
import { Machine } from 'projects/ng-factory-health/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'line-health';

  public allMachines: Machine[] = [];
  public todaysMachineAvailability: any[] = [];
  public labelMap: { [key: string]: string } = {};

  constructor() {
    // translations
    this.labelMap['lbl.availToday'] = "Today's availability";
    this.labelMap['lbl.24hours'] = '24 hour avaiablility';
    this.labelMap['lbl.producing'] = 'Producing';
    this.labelMap['lbl.idle'] = 'Idle';
    this.labelMap['lbl.unavailable'] = 'Unavailable';
    this.labelMap['lbl.noData'] = 'No data';
    this.labelMap['lbl.status'] = 'Status';

    // some test data
    this.allMachines.push({
      id: 'U7010',
      name: 'DMX Gorki A200',
      imageUrl: 'assets/m1.PNG',
      largeImageUrl: 'assets/machine-image.png',
      state: {
        live: 'stop',
        history: [
          'stop',
          'run',
          'run',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'stop',
          'run',
          'run',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'run',
          'run'
        ],
        summary: [
          { code: 'unavailable', value: 100 }
        ]
      }
    });

    this.allMachines.push({
      id: 'U7011',
      name: 'Gigglmeier DX1000',
      imageUrl: 'assets/m2.PNG',
      largeImageUrl: 'assets/m2.PNG',
      state: {
        live: 'run',
        history: [
          'stop',
          'stop',
          'stop',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'stop',
          'run',
          'run',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'run',
          'stop'
        ],
        summary: [
          { code: 'stop', value: 10 },
          { code: 'run', value: 20 },
          { code: 'ready', value: 30 },
          { code: 'unavailable', value: 40 }
        ]
      }
    });

    this.allMachines.push({
      id: 'U7012',
      name: 'Mitsibushi GMX',
      imageUrl: 'assets/m3.PNG',
      largeImageUrl: 'assets/m3.PNG',
      state: {
        live: 'ready',
        history: [
          'stop',
          'stop',
          'stop',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'stop',
          'run',
          'run',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'run',
          'run'
        ],
        summary: [
          { code: 'stop', value: 20 },
          { code: 'run', value: 10 },
          { code: 'ready', value: 30 },
          { code: 'unavailable', value: 40 }
        ]
      }
    });

    this.allMachines.push({
      id: 'U7013',
      name: 'Casparex M4i',
      imageUrl: 'assets/m4.PNG',
      largeImageUrl: 'assets/m4.PNG',
      state: {
        live: 'run',
        history: [
          'stop',
          'stop',
          'stop',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'ready',
          'stop',
          'run',
          'run',
          'ready',
          'ready',
          'run',
          'run',
          'run',
          'unavailable',
          'unavailable',
          'run',
          'unavailable',
          'unavailable'
        ],
        summary: [
          { code: 'stop', value: 10 },
          { code: 'run', value: 20 },
          { code: 'ready', value: 30 },
          { code: 'unavailable', value: 40 }
        ]
      }
    });
  }

  info(machine: Machine) {
    console.log(machine);
  }
}
