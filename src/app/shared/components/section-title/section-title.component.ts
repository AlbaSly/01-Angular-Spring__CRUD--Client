import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
/**
 * HTML h2 tag Component
 */
export class SectionTitleComponent {
  /**h2 title */
  @Input() title: string = "Hello, World!";
}
