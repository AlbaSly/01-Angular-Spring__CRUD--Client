import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to interact with Sweet Alert 2 Library
 */
export class SwalService {

  constructor() { }

  /**
   * Display a success alert
   * @param title Title of the alert
   * @param description Description of the alert
   */
  showSuccessAlert(title: string, description: string): void {
    Swal.fire(title, description, "success");
  }

  /**
   * Display an error alert
   * @param title Title of the alert
   * @param description Description of the alert
   */
  showErrorAlert(title: string, description: string): void {
    Swal.fire(title, description, "error");
  }

  /**
   * Display a warning alert
   * @param title Title of the alert
   * @param description Description of the alert
   */
  showWarningAlert(title: string, description: string): void {
    Swal.fire(title, description, "warning");
  }

  /**
   * Display a confirmation dialog
   * @param title Title of the alert
   * @param description Description of the alert
   * @param callback In case the result is confirmed, triggers a custom function after that
   */
  showConfirmationAlert(title: string, description: string, callback: Function): void {
    Swal.fire({
      title,
      text: description,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.isDenied || result.isDismissed) return;
      callback();
    });
  }
}
