import { TestBed, inject } from '@angular/core/testing';
import { CoursesService } from './courses.service';


describe('coursesService', () => {
  let service: CoursesService;
  
  beforeEach(() => {
    service = new CoursesService();
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('getCourses should return correct values', inject([CoursesService], (service: CoursesService) => {
    service.getCourses().subscribe(x => expect(x[0].courseID).toBe('/api/courses/b8cf2a9f-a469-4810-8bd6-0e5c78672f36'));
    service.getCourses().subscribe(x => expect(x[0].author).toBe('mbolis'));
    service.getCourses().subscribe(x => expect(x[0].title).toBe('Javascript step by step'));
    service.getCourses().subscribe(x => expect(x[0].description).toBe('Learn javascript in only two day'));
    service.getCourses().subscribe(x => expect(x[1].courseID).toBe('/api/courses/514e272a-1b35-4c28-aa29-5941d9c436d8'));
    service.getCourses().subscribe(x => expect(x[1].author).toBe('amreo'));
    service.getCourses().subscribe(x => expect(x[1].title).toBe('Java step by step'));
    service.getCourses().subscribe(x => expect(x[1].description).toBe('Learn java in only two day'));
  }));
});
