/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddbooksComponent } from './addbooks.component';

describe('AddbooksComponent', () => {
  let component: AddbooksComponent;
  let fixture: ComponentFixture<AddbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
