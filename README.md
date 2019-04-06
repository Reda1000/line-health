# LineHealth

Renders a machine availability comparison in a responsive way.

![Desktop](https://github.com/BulloRosso/line-health/blob/master/component-desktop.PNG?raw=true)

![Mobile](https://github.com/BulloRosso/line-health/blob/master/component-mobile.PNG?raw=true)

## Usage

Line health module serves following HTML-Element
``` <lib-ng-factory-health [machines]="allMachines" [labelMap]="labelMap" [selectMachine]="'U7010'" (selectedMachine)="info($event)"></lib-ng-factory-health>
```
machines: Holds an array of Machine-Type defined as
```
export interface Machine {
  id: string;
  name: string;
  imageUrl: string;
  largeImageUrl: string;
  state: {
    live: 'ready' | 'run' | 'stop' | 'unavailable';
    history: ('ready' | 'run' | 'stop' | 'unavailable')[];
    summary: { code: 'ready' | 'run' | 'stop' | 'unavailable'; value: number }[];
  };
}
```
Note: You can update this field structure whenever you want or for instance when 'selectedMachine' Output is fired and more specific data is required.

labelMap: Object with key-value pairs holding translations.

selectMachine: String containing a valid id of any machine in machines given. Can be changed on demand.

selectedMachine: Callback triggered if different machine was selected inside Component.

## Translations

You have to provide a string object named labelMap containing these translated UI labels:

```javascript
    // translations
    this.labelMap["lbl.availToday"] = "Today's availability";
    this.labelMap["lbl.24hours"] = "24 hour avaiablility";
    this.labelMap["lbl.producing"] = "Producing";
    this.labelMap["lbl.idle"] = "Idle";
    this.labelMap["lbl.unavailable"] = "Unavailable";
    this.labelMap["lbl.noData"] = "No data";
    this.labelMap["lbl.status"] = "Status";
```

## Dependencies
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

Angular Material, d3.v4, Angular flex-layout

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
