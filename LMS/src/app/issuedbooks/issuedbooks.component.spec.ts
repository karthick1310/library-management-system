/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssuedbooksComponent } from './issuedbooks.component';

describe('IssuedbooksComponent', () => {
  let component: IssuedbooksComponent;
  let fixture: ComponentFixture<IssuedbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
