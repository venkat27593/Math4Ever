import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGeometryComponent } from './basic-geometry.component';

describe('BasicGeometryComponent', () => {
  let component: BasicGeometryComponent;
  let fixture: ComponentFixture<BasicGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
