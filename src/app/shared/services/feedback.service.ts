import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { FormGroup } from '@angular/forms';


@Injectable()
export class FeedbackService {

  private key: string = 'AKfycbyvjoKyE9xboDlMEeTMomTWlONqupasBsjD4LdJ3EqQuzAmZQ';
  url = `https://script.google.com/macros/s/${this.key}/exec`;
  
  constructor(
      public http: HttpClient) { }

  sendDataToEmail(data, url = this.url) {
    let formData = JSON.stringify(data.value);

    return this.http.post(url, formData)
      .subscribe(response => {
        console.log('email sent', response);
      })
  }
}
