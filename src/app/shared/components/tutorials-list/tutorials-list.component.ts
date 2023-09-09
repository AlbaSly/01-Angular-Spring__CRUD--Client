import { Component, Input } from '@angular/core';
import Tutorial from 'src/app/core/models/Tutorial';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss']
})
/**
 * Tutorials List Component
 */
export class TutorialsListComponent {
  /**Require a tutorials list to display it.*/
  @Input() tutorials: Array<Tutorial> = [];
}
