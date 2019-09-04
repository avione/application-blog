import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  LOCALE_ID} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PostListComponent } from 'src/app/post-list/post-list.component';
import { PostListItemComponent } from 'src/app/post-list-item/post-list-item.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  	MDBBootstrapModule.forRoot(),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
