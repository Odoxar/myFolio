import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedbackService } from '../shared/services/feedback.service';
import { Message } from '../shared/model/message.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public message: Message;

  constructor(
    private feedback: FeedbackService,
    private metaData: Meta,
    private title: Title,
  ) {
    title.setTitle('Denys Siumak | Frontend developer - contacts');
    metaData.addTags([
      {
        name: 'keywords', content: `
        Frontend, Front-end, Frontend developer, HTML, CSS, JS,
        Web, Web developer, Javascript, ECMAScript 6, Angular, Responsive design, 
        good website, website, Mobile Web Development, Cross-Browser
      ` },
      {
        name: 'description', content: `
        My name is Denys Siumak I'm Front-end developer.
        The site has collected most of my entire professional 
        activity over the past few years.
      ` },
      {
        property: 'og:title', content: 'Denys Siumak | Frontend developer | Kyiv, Ukraine'
      },
      {
        property: 'og:type', content: 'website'
      },
      {
        property: 'og:url', content: 'https://odoxar.github.io/contacts'
      },
      {
        property: 'og:image', content: 'https://odoxar.github.io/assets/foto/my-foto.jpg'
      },
      {
        property: 'og:description', content: `
          My name is Denys Siumak I'm Front-end developer.
          The site has collected most of my entire professional 
          activity over the past few years.
        ` },
    ])
  }

  ngOnInit() {
    this.message = new Message('danger', '');
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
        Validators.required,
        Validators.minLength(5)
      ]),
    })
  }
  onSubmit() {
    this.feedback.sendDataToEmail(this.form);
    this.showMessage({
      text: 'Your message send',
      type: 'success'
    })
    this.form.reset();
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
