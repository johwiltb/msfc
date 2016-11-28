import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { YouthComponent } from '../youth/youth.component';
import { HomeComponent } from '../home/home.component';
import { SundayComponent } from '../sunday/sunday.component';
import { ConnectComponent } from '../connect/connect.component';
import { AboutComponent } from '../about/about.component';
import { ResourcesComponent } from '../resources/resources.component';
import { GiveComponent } from '../give/give.component';
import { MembersComponent } from '../members/members.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'youth',
    component: YouthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sunday',
    component: SundayComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'give',
    component: GiveComponent
  },
  {
    path: 'members',
    component: MembersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class MsfcRoutingModule { }
