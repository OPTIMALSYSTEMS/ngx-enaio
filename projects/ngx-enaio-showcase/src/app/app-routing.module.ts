import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OsrestComponent } from './osrest/osrest.component';
import { SessionComponent } from './osrest/session/session.component';
import { DocumentComponent } from './osrest/document/document.component';
import { DmsComponent } from './dms/dms.component';
import { DmsSearchComponent } from './dms/dms-search/dms-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'osrest', component: OsrestComponent },
  { path: 'osrest/session', component: SessionComponent },
  { path: 'osrest/document', component: DocumentComponent },
  { path: 'dms', component: DmsComponent },
  { path: 'dms/search', component: DmsSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
