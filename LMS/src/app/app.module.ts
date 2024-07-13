import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { DefaulthomeComponent } from './defaulthome/defaulthome.component';
import { AddmembersComponent } from './addmembers/addmembers.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ManagemembersComponent } from './managemembers/managemembers.component';
import { IssueReturnComponent } from './issue-return/issue-return.component';
import { RequestComponent } from './request/request.component';
import { IssuedbooksComponent } from './issuedbooks/issuedbooks.component';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [	
    AppComponent,
      HomepageComponent,
      LandingpageComponent,
      LoginComponent,
      DefaulthomeComponent,
      AddmembersComponent,
      AddbooksComponent,
      ManageBooksComponent,
      ManagemembersComponent,
      IssueReturnComponent,
      RequestComponent,
      IssuedbooksComponent,
      PersonComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
