import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnUnknownPageComponent } from './warn-unknown-page.component';

describe('WarnUnknownPageComponent', () => {
  let component: WarnUnknownPageComponent;
  let fixture: ComponentFixture<WarnUnknownPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnUnknownPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnUnknownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
