import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "../app-routing.module";
import { AppComponent } from '../app.component';
import { WidgetComponent } from "../widget/widget.component";
import { UnitComponent } from "../unit/unit.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { Slash2underscorePipe } from "../slash2underscore.pipe";

import { CoursesService } from '../services/courses.service';


class mockCoursesService extends CoursesService {
 // getCourses() : Observable<Course[]> {
   // return of(COURSES);
 // }
}


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
    //  imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ 
        //AppComponent,
        WidgetComponent,
        UnitComponent,
        DashboardComponent,
        Slash2underscorePipe
       ],
       providers: [ {provide: CoursesService, useClass: mockCoursesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
