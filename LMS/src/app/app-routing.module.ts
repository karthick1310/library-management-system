import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmembersComponent } from './addmembers/addmembers.component';
import { DefaulthomeComponent } from './defaulthome/defaulthome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ManagemembersComponent } from './managemembers/managemembers.component';
import { AuthGuard } from './auth.guard';
import { IssueReturnComponent } from './issue-return/issue-return.component';
import { RequestComponent } from './request/request.component';
import { IssuedbooksComponent } from './issuedbooks/issuedbooks.component';
import { PersonComponent } from './person/person.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    component: HomepageComponent,canActivate:[AuthGuard],
    children: [
      { path: '', component: DefaulthomeComponent },
      {
        path: 'addmembers',
        component: AddmembersComponent,
      },
      {
        path: 'addbooks',
        component: AddbooksComponent,
      },
      {
        path: 'managebooks',
        component: ManageBooksComponent,
      },
      {
        path: 'managemembers',
        component: ManagemembersComponent,
      },
      {
        path: 'issue-return',
        component: IssueReturnComponent,
      },
      {
        path:'requests',
        component:RequestComponent,
      },
      {
        path:'issued',
        component:IssuedbooksComponent,
      },
    ],
  },
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
