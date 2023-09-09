import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.scss']
})
/**
 * Navigation Bar Link Component
 */
export class NavlinkComponent {
  /**Link title */
  @Input() title: string = "Hello World";
  /**Route */
  @Input() path: string = "";

  /**
   * Class Constructor
   * @param _router Dependency Injection (Angular Router)
   */
  constructor(
    private readonly _router: Router,
  ) {}

  /**
   * Navigate to the route (path)
   */
  goTo(): void {
    this._router.navigateByUrl(this.path);
  }
}
