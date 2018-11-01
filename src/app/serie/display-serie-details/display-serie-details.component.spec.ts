import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySerieDetailsComponent } from './display-serie-details.component';

describe('DisplaySerieDetailsComponent', () => {
  let component: DisplaySerieDetailsComponent;
  let fixture: ComponentFixture<DisplaySerieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySerieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySerieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
