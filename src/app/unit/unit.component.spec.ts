import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitComponent } from './unit.component';
import { WidgetComponent } from "../widget/widget.component";
import { AppComponent } from '../app.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { Slash2underscorePipe } from "../slash2underscore.pipe";
import { WidgetHtmlComponent } from "../widget-html/widget-html.component";
import { WidgetCodeComponent } from "../widget-code/widget-code.component";
import { CoursesService } from '../services/courses.service';

class mockCoursesService extends CoursesService {}

describe('UnitComponent', () => {
  let component: UnitComponent;
  let fixture: ComponentFixture<UnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
       // AppComponent,
        WidgetComponent,
        UnitComponent,
        DashboardComponent,
        Slash2underscorePipe,
        WidgetHtmlComponent,
        WidgetCodeComponent
       ],
      providers: [ {provide: CoursesService, useClass: mockCoursesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
