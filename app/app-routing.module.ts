import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareListComponent } from './software-list/software-list.component';
import { CreateSoftwareComponent } from './create-software/create-software.component';
import { UpdateSoftwareComponent } from './update-software/update-software.component';
import { SoftwareDetailsComponent } from './software-details/software-details.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdServiceService } from './auth-guard-service.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { CreateDeveloperComponent } from './create-developer/create-developer.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { GetSoftwareComponent } from './get-software/get-software.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateDeveloperComponent } from './update-developer/update-developer.component';



const routes: Routes = [
  {path: 'softwares', component: SoftwareListComponent},
  {path: 'create-software', component: CreateSoftwareComponent , canActivate:[AuthGaurdServiceService] },
  // {path: '', redirectTo: 'Software', pathMatch: 'full', canActivate:[AuthGaurdServiceService]},
  {path: 'update-software/:softwareId', component: UpdateSoftwareComponent},
  {path: 'software-details/:softwareId', component: SoftwareDetailsComponent},
  {path: 'software-list', component: SoftwareListComponent, canActivate:[AuthGaurdServiceService]},
  {path :'home',component:HomeComponent},
 {path:'aboutus',component:AboutusComponent},
  {path :'contact',component:ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent },
  {path: 'feedback', component:FeedbackComponent},
  {path: 'view-user/:softwareId',component:ViewCustomerComponent},
  {path: 'buy-now/:softwareId',component:BuyNowComponent},
  {path: 'developer-details/:developerId',component:DeveloperDetailsComponent},
  {path: 'developer-list',component:DeveloperListComponent, canActivate:[AuthGaurdServiceService]},
  {path: 'create-developer',component:CreateDeveloperComponent, canActivate:[AuthGaurdServiceService]},
 
  {path:'getSoftware/:developerId',component:GetSoftwareComponent},
 {path:'signup',component:SignupComponent},
 {path:'update-developer/:developerId',component:UpdateDeveloperComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }