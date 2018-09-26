import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  url = 'http://localhost:8080/api/recipes';

  constructor(private http: HttpClient) { }

  getAllReceipes() {
    return this
            .http
            .get(`${this.url}/all`);
  }

  getReceipeDetails(couparam: any) {
    return this
            .http
            .get(`${this.url}/` + couparam);
  }
}
