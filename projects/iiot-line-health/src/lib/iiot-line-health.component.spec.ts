import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IiotLineHealthComponent } from './iiot-line-health.component';

describe('IiotLineHealthComponent', () => {
  let component: IiotLineHealthComponent;
  let fixture: ComponentFixture<IiotLineHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IiotLineHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IiotLineHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
