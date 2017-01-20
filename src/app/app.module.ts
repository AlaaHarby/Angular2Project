import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsService } from './shared/contacts.service';
import { DetailsComponent } from './details/details.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { SidebarModule } from 'ng-sidebar';
import { NewContactComponent } from './new-contact/new-contact.component';

const appRoutes: Routes = [
  { path: 'contacts/:id', component: DetailsComponent },
  { path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ListContactsComponent
  },
  {
    path: 'new-contact',
    component: NewContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListContactsComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
