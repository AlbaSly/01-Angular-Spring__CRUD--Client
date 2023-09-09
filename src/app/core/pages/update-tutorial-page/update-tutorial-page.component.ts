import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from '../../services/swal.service';
import { TutorialsService } from '../../services/tutorials.service';
import Tutorial from '../../models/Tutorial';

@Component({
  selector: 'app-update-tutorial-page',
  templateUrl: './update-tutorial-page.component.html',
  styleUrls: ['./update-tutorial-page.component.scss']
})
export class UpdateTutorialPageComponent {

  /**Dependency Injection (Angular Router ActivatedRoute) */
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  /**Flag to determine start and end of an service request */
  loading: boolean = true;
  /**Current Tutorial object */
  tutorial: Tutorial;

  /**Reactive Form Group for Update Tutorial */
  public updateTutorialForm: FormGroup;

  /**
   * Class constructor
   * @param _fb Dependency Injection (Angular FormBuilder)
   * @param _router Dependency Injection (Angular Router)
   * @param _swalService Dependency Injection (Sweet Alert Service (SwalService))
   * @param _tutorialsService Dependency Injection (Tutorials Service)
   */
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _swalService: SwalService,
    private readonly _tutorialsService: TutorialsService,
  ) {
    /**Get ID -> route param value */
    const id = Number(this._activatedRoute.snapshot.params['id']);

    this._tutorialsService.getTutorialById(id).subscribe(
      tutorial => {
        this.tutorial = tutorial;

        /**Create Form Builder and setting values */
        this.updateTutorialForm = this._fb.group({
          title: [this.tutorial.title, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
          description: [this.tutorial.description, [Validators.required, Validators.minLength(1)]],
        });
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

  /**Handle form submit event */
  onSubmit($event: Event): void {
    $event.preventDefault();

    /**Create a new Tutorial object with the updated data */
    const tutorial: Tutorial = {
      ...this.tutorial,
      title: this.updateTutorialForm.controls['title'].value,
      description: this.updateTutorialForm.controls['description'].value,
    }

    /**Make a service call to Tutorials Service */
    this._tutorialsService.updateTutorial(this.tutorial.id, tutorial).subscribe(
      (data) => {
        this._router.navigateByUrl(`/tutorial/${this.tutorial.id}`);
        this._swalService.showSuccessAlert("Updated", "Tutorial data changed!");
      },
      (error) => {},
      () => {},
    );
  }
}
