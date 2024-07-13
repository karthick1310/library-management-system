/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaulthomeComponent } from './defaulthome.component';

describe('DefaulthomeComponent', () => {
  let component: DefaulthomeComponent;
  let fixture: ComponentFixture<DefaulthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaulthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
