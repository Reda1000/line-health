import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { D3Service } from 'd3-ng2-service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgFactoryHealthModule } from 'projects/ng-factory-health/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgFactoryHealthModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
