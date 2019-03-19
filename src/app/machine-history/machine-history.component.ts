import { Component, OnInit, Input } from '@angular/core';
import { Machine } from '../model/machine';

@Component({
  selector: 'machine-history',
  templateUrl: './machine-history.component.html',
  styleUrls: ['./machine-history.component.css']
})
export class MachineHistoryComponent implements OnInit {

  @Input() machine: Machine;

  constructor() { }

  ngOnInit() {
  }

  getStatusClass(color) {
    return "status-" + color;
    
  }

}
