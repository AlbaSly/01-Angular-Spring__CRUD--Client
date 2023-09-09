import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialInfoPageComponent } from './tutorial-info-page.component';

describe('TutorialInfoPageComponent', () => {
  let component: TutorialInfoPageComponent;
  let fixture: ComponentFixture<TutorialInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialInfoPageComponent]
    });
    fixture = TestBed.createComponent(TutorialInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
