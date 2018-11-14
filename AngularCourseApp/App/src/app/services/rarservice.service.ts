import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RarserviceService {
  constructor() {
    
  }

  getLicense(): number {
    return Math.floor(Math.random() * 100);
  }

}
