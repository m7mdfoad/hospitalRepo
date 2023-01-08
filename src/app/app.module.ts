import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNurseComponent } from './pages/register-nurse/register-nurse.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    HomeComponent,
    RegisterNurseComponent,
    RegisterPatientComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
  
     
  ],
  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
