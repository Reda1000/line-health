import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFactoryHealthComponent } from './ng-factory-health.component';

describe('NgFactoryHealthComponent', () => {
  let component: NgFactoryHealthComponent;
  let fixture: ComponentFixture<NgFactoryHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFactoryHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFactoryHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
