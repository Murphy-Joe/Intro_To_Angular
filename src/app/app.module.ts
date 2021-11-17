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
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterComponent } from './components/counter/counter.component';
import { CounterCountByComponent } from './components/counter-count-by/counter-count-by.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerStatusComponent,
    DashboardComponent,
    ResourcesComponent,
    NavComponent,
    ItemEntryComponent,
    ItemListComponent,
    CounterComponent,
    CounterCountByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
