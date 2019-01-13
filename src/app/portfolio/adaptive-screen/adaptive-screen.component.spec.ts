import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveScreenComponent } from './adaptive-screen.component';

describe('AdaptiveScreenComponent', () => {
  let component: AdaptiveScreenComponent;
  let fixture: ComponentFixture<AdaptiveScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
