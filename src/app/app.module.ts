import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NavComponent } from './components/nav/nav.component';
import { ItemEntryComponent } from './components/item-entry/item-entry.component';
import { ItemListComponent } from './components/item-list/item-list.component'
@NgModule({
  declarations: [
    AppComponent,
    ServerStatusComponent,
    DashboardComponent,
    ResourcesComponent,
    NavComponent,
    ItemEntryComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
