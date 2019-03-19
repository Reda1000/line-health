import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineHealthComponent } from './line-health/line-health.component';
import { MachineHistoryComponent } from './machine-history/machine-history.component';

import { D3Service } from 'd3-ng2-service';

@NgModule({
  declarations: [
    AppComponent,
    LineHealthComponent,
    MachineHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
