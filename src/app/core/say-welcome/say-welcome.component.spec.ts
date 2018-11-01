import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayWelcomeComponent } from './say-welcome.component';

describe('SayWelcomeComponent', () => {
  let component: SayWelcomeComponent;
  let fixture: ComponentFixture<SayWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
