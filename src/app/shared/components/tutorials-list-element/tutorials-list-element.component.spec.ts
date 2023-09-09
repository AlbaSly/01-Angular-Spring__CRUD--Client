import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsListElementComponent } from './tutorials-list-element.component';

describe('TutorialsListElementComponent', () => {
  let component: TutorialsListElementComponent;
  let fixture: ComponentFixture<TutorialsListElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialsListElementComponent]
    });
    fixture = TestBed.createComponent(TutorialsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
