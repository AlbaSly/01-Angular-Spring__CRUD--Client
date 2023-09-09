import { Component, OnInit, inject } from '@angular/core';
import { TutorialsService } from '../../services/tutorials.service';
import { ActivatedRoute, Router } from '@angular/router';
import Tutorial from '../../models/Tutorial';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-tutorial-info-page',
  templateUrl: './tutorial-info-page.component.html',
  styleUrls: ['./tutorial-info-page.component.scss']
})
export class TutorialInfoPageComponent implements OnInit {

  /**Dependency Injection (Angular Router ActivatedRoute) */
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  
  /**Flasg to determine start and end of an service request */
  loading: boolean = true;
  /**Current Tutorial object */
  tutorial: Tutorial;

  /**
   * Class constructor
   * @param _router Dependency Injection (Angular FormBuilder)
   * @param _swalService Dependency Injection (Sweet Alert Service (SwalService))
   * @param _tutorialsService Dependency Injection (Tutorials Service)
   */
  constructor(
    private readonly _router: Router,

    private readonly _swalService: SwalService,
    private readonly _tutorialsService: TutorialsService,
  ) {}

  /**OnInit interface signature implementation */
  ngOnInit(): void {
    /**Get ID -> route param value */
    const id = Number(this._activatedRoute.snapshot.params['id']);

    /**Make a service call to Tutorials Service */
    this._tutorialsService.getTutorialById(id).subscribe(
      tutorial => {
        this.tutorial = tutorial;
      },
      error => {
        this._router.navigateByUrl("/");
        this._swalService.showErrorAlert("Not found", "Tutorial not found");
      },
      () => {
        this.loading = false;
      }
    );
  }

  /**Update the Tutorial "published" status */
  changeTutorialStatus(): void {
    /**Create a new Tutorial object with the same values, but replacing published with another value */
    const _tutorial: Tutorial = {
      ...this.tutorial,
      published: !this.tutorial.published
    }

    /**Make a service call to Tutorials Service */
    this._tutorialsService.updateTutorial(this.tutorial.id, _tutorial).subscribe(
      (data) => {
        this._swalService.showSuccessAlert("Updated", "Tutorial status has been changed");
        this.tutorial = _tutorial;
      },
      (error) => {},
      () => {}
    );
  }

  /**Navigates to the Update Tutorial Page */
  goToUpdateTutorialPage(): void {
    this._router.navigateByUrl(`/tutorial/update/${this.tutorial.id}`);
  }

  /**Make a service call to Tutorials Service to delete the tutorial */
  deleteTutorial(): void {
    this._swalService.showConfirmationAlert("Delete Tutorial", "Are you sure?", () => {
      this._tutorialsService.deleteTutorial(this.tutorial.id).subscribe(
        (response) => {
          this._router.navigateByUrl("/");
          this._swalService.showSuccessAlert("Tutorial Deleted", "Tutorial has been deleted");
        },
        (error) => {},
        () => {},
      );
    });
  }
}
