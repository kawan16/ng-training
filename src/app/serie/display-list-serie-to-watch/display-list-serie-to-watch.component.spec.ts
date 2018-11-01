import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListSerieToWatchComponent } from './display-list-serie-to-watch.component';

describe('DisplayListSerieToWatchComponent', () => {
  let component: DisplayListSerieToWatchComponent;
  let fixture: ComponentFixture<DisplayListSerieToWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListSerieToWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListSerieToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
