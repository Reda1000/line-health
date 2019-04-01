import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { D3Service } from 'd3-ng2-service';

import { IiotLineHealthComponent } from './iiot-line-health.component';
import { MachineHistoryComponent } from './machine-history/machine-history.component';

@NgModule({
  declarations: [
    IiotLineHealthComponent,
    MachineHistoryComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    IiotLineHealthComponent
  ],
  providers: [D3Service]
})
export class IiotLineHealthModule { }
