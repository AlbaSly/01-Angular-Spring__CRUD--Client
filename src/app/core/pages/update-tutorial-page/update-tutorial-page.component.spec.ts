import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTutorialPageComponent } from './update-tutorial-page.component';

describe('UpdateTutorialPageComponent', () => {
  let component: UpdateTutorialPageComponent;
  let fixture: ComponentFixture<UpdateTutorialPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTutorialPageComponent]
    });
    fixture = TestBed.createComponent(UpdateTutorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
