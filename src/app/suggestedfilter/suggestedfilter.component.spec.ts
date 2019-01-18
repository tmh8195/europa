import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedfilterComponent } from './suggestedfilter.component';

describe('SuggestedfilterComponent', () => {
  let component: SuggestedfilterComponent;
  let fixture: ComponentFixture<SuggestedfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
