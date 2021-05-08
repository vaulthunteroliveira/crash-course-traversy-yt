import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor() {}

  saveAnyString(str: string): void {
    localStorage.setItem('giropops', str);
  }

  getStringFromLocalStorage(): string {
    return localStorage.getItem('giropops');
  } 


}
