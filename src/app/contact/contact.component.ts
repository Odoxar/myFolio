import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedbackService } from '../shared/services/feedback.service';
import { Message } from '../shared/model/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public message: Message;

  constructor(private feedback: FeedbackService) { }

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
    this.feedback.sendDataToEmail(this.form)
    this.showMessage({
      text: 'Your message send',
      type: 'success'
    })
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
