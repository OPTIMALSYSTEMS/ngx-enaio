import { ParentsComponent } from './osrest/document/parents/parents.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OsrestComponent } from './osrest/osrest.component';
import { SessionComponent } from './osrest/session/session.component';
import { NgxEnaioModule } from 'ngx-enaio';
import { GetSessionComponent } from './osrest/session/get-session/get-session.component';
import { GetSystemrolesComponent } from './osrest/session/get-systemroles/get-systemroles.component';
import { LoadSettingsComponent } from './osrest/session/load-settings/load-settings.component';
import { DocumentComponent } from './osrest/document/document.component';
import { SearchByIdComponent } from './osrest/document/search-by-id/search-by-id.component';
import { DocumentObjectComponent } from './osrest/document/document-object/document-object.component';
import { StoredQueriesListComponent } from './osrest/document/stored-queries-list/stored-queries-list.component';
import { StoredQueryComponent } from './osrest/document/stored-query/stored-query.component';
import { InsertComponent } from './osrest/document/insert/insert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OsrestComponent,
    SessionComponent,
    GetSessionComponent,
    GetSystemrolesComponent,
    LoadSettingsComponent,
    DocumentComponent,
    SearchByIdComponent,
    DocumentObjectComponent,
    StoredQueriesListComponent,
    StoredQueryComponent,
    ParentsComponent,
    InsertComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule, NgxEnaioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
