import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktium1Component } from './praktium1.component';

describe('Praktium1Component', () => {
  let component: Praktium1Component;
  let fixture: ComponentFixture<Praktium1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktium1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktium1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
