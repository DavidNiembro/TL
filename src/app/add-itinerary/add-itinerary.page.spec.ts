import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItineraryPage } from './add-itinerary.page';

describe('AddItineraryPage', () => {
  let component: AddItineraryPage;
  let fixture: ComponentFixture<AddItineraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItineraryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItineraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
