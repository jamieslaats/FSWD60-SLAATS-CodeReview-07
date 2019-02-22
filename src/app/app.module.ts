import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PhonelistService } from './shared/phonelist.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ImportantNumbersComponent,
    PhonebookComponent,
    PhonebookListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// adding the connecting details to firebase. 
    AngularFireDatabaseModule, // Importing the classes here as well for the module.
    FormsModule,
    TextMaskModule,

  ],
  providers: [PhonelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
