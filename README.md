# LineHealth

Renders a machine availability comparison in a responsive way.

![Desktop](https://github.com/BulloRosso/line-health/blob/master/component-desktop.PNG?raw=true)

![Mobile](https://github.com/BulloRosso/line-health/blob/master/component-mobile.PNG?raw=true)

## Parameters

| Parameter Name    | Type     | Comment          |
|-------------------|----------|------------------|
 allMachines | Array<Machine>  | See type machine 
 donutPercentValue | number | Percent value in donut
 labelMap | Map<string,string> | Translations
 todaysMachineAvailablity | Array | { label: 'green', count: 13 }

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
