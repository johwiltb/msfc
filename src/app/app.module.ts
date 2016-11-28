import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YouthComponent } from './youth/youth.component';
import { HomeComponent } from './home/home.component';
import { SundayComponent } from './sunday/sunday.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { GiveComponent } from './give/give.component';

import { MsfcRoutingModule } from './msfc-routing/msfc-routing.module';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    YouthComponent,
    HomeComponent,
    SundayComponent,
    ConnectComponent,
    AboutComponent,
    ResourcesComponent,
    GiveComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MsfcRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
