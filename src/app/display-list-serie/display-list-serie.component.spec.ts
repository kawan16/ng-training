import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListSerieComponent } from './display-list-serie.component';

describe('DisplayListSerieComponent', () => {
  let component: DisplayListSerieComponent;
  let fixture: ComponentFixture<DisplayListSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
