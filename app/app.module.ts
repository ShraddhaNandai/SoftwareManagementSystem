import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSoftwareComponent } from './create-software/create-software.component';
import { SoftwareDetailsComponent } from './software-details/software-details.component';
import { SoftwareListComponent } from './software-list/software-list.component';
import { UpdateSoftwareComponent } from './update-software/update-software.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { BuyNowComponent } from './buy-now/buy-now.component';


import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { CreateDeveloperComponent } from './create-developer/create-developer.component';
import { GetSoftwareComponent } from './get-software/get-software.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateDeveloperComponent } from './update-developer/update-developer.component';






@NgModule({
  declarations: [
    AppComponent,
    CreateSoftwareComponent,
    SoftwareDetailsComponent,
    SoftwareListComponent,
    UpdateSoftwareComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    AboutusComponent,
    FeedbackComponent,
    ViewCustomerComponent,
    BuyNowComponent,
 
    DeveloperDetailsComponent,
    DeveloperListComponent,
    CreateDeveloperComponent,
    GetSoftwareComponent,
     SignupComponent,
     UpdateDeveloperComponent
  


   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }