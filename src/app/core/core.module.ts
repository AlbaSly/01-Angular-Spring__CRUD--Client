import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewTutorialPageComponent } from './pages/new-tutorial-page/new-tutorial-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutorialInfoPageComponent } from './pages/tutorial-info-page/tutorial-info-page.component';
import { UpdateTutorialPageComponent } from './pages/update-tutorial-page/update-tutorial-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NewTutorialPageComponent,
    TutorialInfoPageComponent,
    UpdateTutorialPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
  ],
})
export class CoreModule { }
