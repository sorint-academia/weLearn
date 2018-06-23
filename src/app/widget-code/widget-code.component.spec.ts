import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCodeComponent } from './widget-code.component';

describe('WidgetCodeComponent', () => {
  let component: WidgetCodeComponent;
  let fixture: ComponentFixture<WidgetCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
