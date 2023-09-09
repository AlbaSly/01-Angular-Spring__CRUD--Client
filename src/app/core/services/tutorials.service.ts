import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Tutorial from '../models/Tutorial';

@Injectable({
  providedIn: 'root'
})
/**
 * Tutorials Service Class from HTTP requests in REST API
 */
export class TutorialsService {
  /**Endpoint path */
  private path: string = "/tutorials";

  /**
   * Service class constructor
   * @param http Dependency Injection (Angular HttpClient)
   */
  constructor(
    private readonly http: HttpClient,
  ) { }

  /**Get all tutorials from database */
  getAllTutorials() {
    const url: string = `${this.path}/all`;
    return this.http.get<Array<Tutorial>>(url);
  }

  /**
   * Get a tutorial according its id
   * @param id tutorial id
   * @returns Rxjs Observable response with the obtained tutorial
   */
  getTutorialById(id: number) {
    const url: string = `${this.path}/${id}`;

    return this.http.get<Tutorial>(url);
  }

  /**
   * Get all published tutorials
   * @returns Rxjs Observable response with an array of tutorials
   */
  getPublishedTutorials() {
    const url: string = `${this.path}/published`;

    return this.http.get<Array<Tutorial>>(url);
  }

  /**
   * Creates a new tutorial
   * @param tutorial Tutorial object
   * @returns Rxjs Observable response with the created tutorial.
   */
  createTutorial(tutorial: Tutorial) {
    const url: string = `${this.path}/create`;

    return this.http.post<Tutorial>(url, tutorial);
  }

  /**
   * Updates existing tutorial according its id
   * @param id tutorial id
   * @param tutorial Tutorial object
   * @returns Rxjs Observable response with the updated tutorial
   */
  updateTutorial(id: number, tutorial: Tutorial) {
    const url: string = `${this.path}/update/${id}`;

    return this.http.put<Tutorial>(url, tutorial);
  }

  /**
   * Deletes existing tutorial according its id
   * @param id tutorial id
   * @returns Rxjs Observable response without any data (empty content)
   */
  deleteTutorial(id: number) {
    const url: string = `${this.path}/delete/${id}`;

    return this.http.delete<void>(url);
  }

  /**
   * Delete all tutorials from the database
   * @returns Rjxs Observable response without anyh data (empty content)
   */
  deleteAllTutorials() {
    const url: string = `${this.path}/delete/all`;

    return this.http.delete<void>(url);
  }
}
