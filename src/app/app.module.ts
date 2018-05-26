import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importo modulo npm bootstrap
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UnitComponent } from './unit/unit.component';
import { WidgetComponent } from './widget/widget.component';
import { CoursesService } from './services/courses.service';
import { Slash2underscorePipe } from './slash2underscore.pipe';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';
import { WidgetHtmlComponent } from './widget-html/widget-html.component';
import { WidgetCodeComponent } from './widget-code/widget-code.component';
import { LoggerService } from './services/logger.service';
import { SessionsService } from './services/sessions.service';
import { HttpClientModule } from '@angular/common/http';
import { RemoveApiPipe } from './remove-api.pipe';
import { UserButtonsComponent } from './user-buttons/user-buttons.component';
import { CodemirrorModule } from 'ng2-codemirror';
import { ProgressesService } from './services/progresses.service';
import { ProjectsService } from './services/projects.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UnitComponent,
    WidgetComponent,
    Slash2underscorePipe,
    WidgetHtmlComponent,
    WidgetCodeComponent,
    RemoveApiPipe,
    UserButtonsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    CodemirrorModule
  ],
  providers: [
    CoursesService,
    LoggerService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    SessionsService,
    ProgressesService,
    ProjectsService
  ],
  bootstrap: [AppComponent],
  exports:[
    WidgetCodeComponent
  ]
})
export class AppModule { }
