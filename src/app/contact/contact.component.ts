import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // textimonyForm: FormGroup

  // constructor(private fb: FormBuilder) {
  //   this.textimonyForm = this.fb.group({
  //     name: ['', Validators.required, Validators.pattern('[a-zA-Z]')],
  //     email: ['', [Validators.required, Validators.email]],
  //   })
  // }
}
