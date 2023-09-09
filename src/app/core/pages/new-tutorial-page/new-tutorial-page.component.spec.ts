import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTutorialPageComponent } from './new-tutorial-page.component';

describe('NewTutorialPageComponent', () => {
  let component: NewTutorialPageComponent;
  let fixture: ComponentFixture<NewTutorialPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTutorialPageComponent]
    });
    fixture = TestBed.createComponent(NewTutorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
