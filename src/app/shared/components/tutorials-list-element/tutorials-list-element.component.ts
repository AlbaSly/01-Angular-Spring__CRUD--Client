import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Tutorial from 'src/app/core/models/Tutorial';

@Component({
  selector: 'app-tutorials-list-element',
  templateUrl: './tutorials-list-element.component.html',
  styleUrls: ['./tutorials-list-element.component.scss']
})
export class TutorialsListElementComponent {
  @Input() tutorial: Tutorial;

  constructor(
    private readonly _rotuer: Router,
  ) {}

  viewTutorialInfo(): void {
    this._rotuer.navigateByUrl(`/tutorial/${this.tutorial.id}`);
  }
}
