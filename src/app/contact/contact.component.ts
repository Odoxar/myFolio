import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  scriptURL = 'http://formspree.io/9b627f25-ba76-4568-80b8-e856d4b6f174';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(
        null, [
          Validators.required
        ]
      ),
      email: new FormControl(
        null, [
          Validators.required,
          Validators.email
        ]
      ),
      message: new FormControl(null, [
        Validators.required
      ]),
    })
  }
  onSubmit() {

    let headers = new HttpHeaders({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Content-Type': 'application/x-www-form-urlencoded'
      })

    const requestOptions = {
       headers: headers
    };
    

    let url = "https://www.formingo.co/submit/9b627f25-ba76-4568-80b8-e856d4b6f174";


     let data = `name=${this.form.value.name}&email=${this.form.value.email}&message=${this.form.value.message}`;
    /* JSON.stringify(this.form.value); */
/* `name=${ this.form.value.name }&email=${ this.form.value.email }&message=${ this.form.value.message }`; */
    console.log(data);
    
    return this.http.post(url, JSON.stringify({
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message,
    }), requestOptions)
      .subscribe(response => {
        console.log('email sent', response);
      })
      
  }
}

