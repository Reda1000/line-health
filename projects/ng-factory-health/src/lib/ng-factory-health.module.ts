import { NgModule } from '@angular/core';
import { NgFactoryHealthComponent } from './ng-factory-health.component';
import { D3Service } from 'd3-ng2-service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MachineHistoryComponent } from './machine-history/machine-history.component';

@NgModule({
  declarations: [
    NgFactoryHealthComponent,
    MachineHistoryComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    NgFactoryHealthComponent
  ],
  providers: [D3Service]
})
export class NgFactoryHealthModule { }
