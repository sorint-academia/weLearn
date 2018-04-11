import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importo modulo npm bootstrap

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UnitComponent } from './unit/unit.component';
import { WidgetComponent } from './widget/widget.component';
import { CoursesService } from  './services/courses.service';
import { Slash2underscorePipe } from './slash2underscore.pipe';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    UnitComponent,
    WidgetComponent,
    Slash2underscorePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    CoursesService,
    { 
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
