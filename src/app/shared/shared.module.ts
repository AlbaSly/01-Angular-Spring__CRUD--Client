import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavlinkComponent } from './components/navlink/navlink.component';
import { RouterModule } from '@angular/router';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsListElementComponent } from './components/tutorials-list-element/tutorials-list-element.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavlinkComponent,
    SectionTitleComponent,
    TutorialsListComponent,
    TutorialsListElementComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SectionTitleComponent,
    TutorialsListComponent,
    SpinnerComponent,
  ]
})
export class SharedModule { }
