import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Userform!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Userform = this.formBuilder.group({ 
        username: [ '', [Validators.required]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]], 
      });
  }

  get formCheck(): { [key: string]: AbstractControl } {
    return this.Userform.controls;
  }

  submitData(): void { 
    if (this.Userform.invalid) {
      this.submitted = true;
      return;
    } else {
      console.log(this.Userform.value); 
    }

     
  }

   
}
