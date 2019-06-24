import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatistiquesPage } from './add-statistiques.page';

describe('AddStatistiquesPage', () => {
  let component: AddStatistiquesPage;
  let fixture: ComponentFixture<AddStatistiquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatistiquesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatistiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
