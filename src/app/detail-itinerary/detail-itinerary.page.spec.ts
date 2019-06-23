import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItineraryPage } from './detail-itinerary.page';

describe('DetailItineraryPage', () => {
  let component: DetailItineraryPage;
  let fixture: ComponentFixture<DetailItineraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailItineraryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItineraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
