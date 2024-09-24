import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { EventEmitterService } from 'src/event-emitter.service';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { TreeOlympiadRegistrationComponent } from './pages/tree-olympiad-registration/tree-olympiad-registration.component';
import { DeyalpotrikaRegistrationComponent } from './pages/deyalpotrika-registration/deyalpotrika-registration.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AuthService } from './services/auth.service';
import { HttpInterceptorInterceptor } from './services/http-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TreeOlympiadRegistrationComponent,
    DeyalpotrikaRegistrationComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      // progressBar: true,
      // progressAnimation: 'decreasing',
      preventDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true,
    }),
      NgbModule,
  ],
  providers: [
    HttpClient,
    EventEmitterService,
   { provide: LocationStrategy, useClass: HashLocationStrategy },
   { provide: LocationStrategy, useClass: PathLocationStrategy },
    AuthService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
