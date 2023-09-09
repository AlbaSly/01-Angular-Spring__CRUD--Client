import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../../services/tutorials.service';
import Tutorial from '../../models/Tutorial';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  /**Flag to determine start and end of an service request */
  loading: boolean = true; 
  /**Current array of tutorials */
  tutorialsList: Array<Tutorial> = [];

  /**Flag to determine which tutorials show */
  showPublished: boolean;

  /**
   * Class constructor
   * @param _tutorialsService Dependency Injection (Tutorials Service)
   */
  constructor(
    private readonly _tutorialsService: TutorialsService,
  ) {}

  /**OnInit interface signature implementation */
  ngOnInit(): void {
    this.fetchTutorialsList();
  }

  /**Update the tutorials list according to the filters */
  onChangePublishedList($event: Event): void {
    if (!this.showPublished) {
      return this.fetchTutorialsList();
    }

    this.loading = true;
    /**Make a service call to Tutorials Service */
    this._tutorialsService.getPublishedTutorials().subscribe(
      (data) => {
        this.tutorialsList = data;
      },
      (error) => {},
      () => {
        this.loading = false;
      }
    );
  }

  /**Make a service call to Tutorials Service to get all tutorials */
  private fetchTutorialsList(): void {
    this.loading = true;
    this._tutorialsService.getAllTutorials().subscribe(
      (data) => {
        this.tutorialsList = data;
      }, 
      (error) => {},
      () => {
        this.loading = false;
      }
    );
  }
}
