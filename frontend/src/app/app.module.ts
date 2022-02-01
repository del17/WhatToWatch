import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list'; 
import{MatCardModule}from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatDialogModule } from '@angular/material/dialog';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatListModule,
    FormsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  LoginComponent]
                 
})
export class AppModule { }
