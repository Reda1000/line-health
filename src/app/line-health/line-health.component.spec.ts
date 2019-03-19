import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineHealthComponent } from './line-health.component';

describe('LineHealthComponent', () => {
  let component: LineHealthComponent;
  let fixture: ComponentFixture<LineHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
