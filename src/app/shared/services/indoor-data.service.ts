import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndoorDataService {
  private url: string = 'assets/json/border.json';

  constructor(private http: HttpClient) { }

  getGeoJson() {
    return this.http.get(this.url);
  }
}
