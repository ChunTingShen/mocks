import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../userModel';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  form = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', 
    [
      Validators.required,
      Validators.minLength(10)
    ])
  })

  onSubmit() {
    if (this.form.valid){
      console.log("Success!")

    }
  }
}
