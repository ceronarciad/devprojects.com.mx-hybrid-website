import { Component, OnInit } from '@angular/core';
import { ReturnStateList } from 'src/app/utilities/functions/return-state-list';
import { NgForm } from '@angular/forms';
import { ContactForm } from 'src/app/utilities/models/contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myform: NgForm;
  stateList = ReturnStateList;
  public form: ContactForm = new ContactForm();

  constructor() { }

  ngOnInit() {
  }

  register(form: NgForm) {
    if(form.form.status != 'VALID')
      console.log("error al validar formulario");
  }

}
