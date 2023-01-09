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
import { AuthModule } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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

    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp({ 
      apiKey: "AIzaSyBpeWkrOaf2Pkd6m0IcK1nvgR5KKHJ5Irw",
      authDomain: "hospitalmanager-f2fcc.firebaseapp.com",
      projectId: "hospitalmanager-f2fcc",
      storageBucket: "hospitalmanager-f2fcc.appspot.com",
      messagingSenderId: "480652770985",
      appId: "1:480652770985:web:023d7493644db27ef733b8",
      measurementId: "G-S276SM1HKT"
     })),
    provideFirestore(() => getFirestore()),

    provideFirestore(() => getFirestore()),
  ],

  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
