import { NgModule } from '@angular/core';
import { NavigationEnd, NavigationSkipped, NavigationStart, Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NewTutorialPageComponent } from './core/pages/new-tutorial-page/new-tutorial-page.component';
import { Title } from '@angular/platform-browser';
import { AppRoutes } from './core/data';
import { TutorialInfoPageComponent } from './core/pages/tutorial-info-page/tutorial-info-page.component';
import { UpdateTutorialPageComponent } from './core/pages/update-tutorial-page/update-tutorial-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "create-tutorial",
    component: NewTutorialPageComponent,
  },
  {
    path: "tutorial/:id",
    component: TutorialInfoPageComponent,
  },
  {
    path: "tutorial/update/:id",
    component: UpdateTutorialPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private readonly _titleService: Title,
    private readonly _router: Router
  ) {
    this._router.events.subscribe((value) => {      
      if (value instanceof NavigationStart) this._titleService.setTitle(AppRoutes[value.url]);
    });
  }
}
