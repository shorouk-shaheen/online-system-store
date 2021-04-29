import { EnrollmentService } from './../../services/enrollment.service';
import { Iuser } from './../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Iuser

  constructor(private _enrollmentService: EnrollmentService, private router: Router) { 
    this.user = {user_id : 1, user_name: "", user_address :"", user_type :"Normal" }

  }

  ngOnInit(): void {
    this.resetForm();
  }
  saveUser() {
    this._enrollmentService.enroll(this.user)
    .subscribe(
      data => 
      {
        this.user = data
        console.log(this.user)
        this.router.navigate(['/category'])
      },
      error => console.log("Error", error)
    )
    console.log(this.user)
 
  }

  resetForm(form?: NgForm) {
    if( form != null) {
      form.reset();
    }
  }

}
