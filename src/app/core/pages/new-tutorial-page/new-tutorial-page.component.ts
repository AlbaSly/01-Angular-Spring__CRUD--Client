import { Component } from '@angular/core';
import { TutorialsService } from '../../services/tutorials.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Tutorial from '../../models/Tutorial';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-new-tutorial-page',
  templateUrl: './new-tutorial-page.component.html',
  styleUrls: ['./new-tutorial-page.component.scss']
})
export class NewTutorialPageComponent {

  /**Reactive Form Group for Create a new Tutorial */
  public createTutorialForm: FormGroup = this._fb.group({
    title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.minLength(1)]],
  });

  /**
   * Class constructor
   * @param _fb Dependency Injection (Angular Form Builder)
   * @param _router Dependency Injection (Angular Router)
   * @param _swalSwervice Dependency Injection (Sweet Alert Service (SwalService))
   * @param _tutorialsService Dependency Injection (Tutorials Service)
   */
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _swalSwervice: SwalService,
    private readonly _tutorialsService: TutorialsService,
  ) {}

  /**Handle form submit event */
  onSubmit($event: Event): void {
    $event.preventDefault();

    /**Create a new Tutorial object with the data*/
    const tutorial = new Tutorial();
    tutorial.title = this.createTutorialForm.controls["title"].value;
    tutorial.description = this.createTutorialForm.controls["description"].value;

    /**Make a service call to Tutorials Service */
    this._tutorialsService.createTutorial(tutorial).subscribe(
      (data )=> {
        this.createTutorialForm.reset();
        this._router.navigateByUrl("/");
        this._swalSwervice.showSuccessAlert("Created", "Tutorial was created successfully.");
      },
      error => {},
      () => {},
    );
  }
}