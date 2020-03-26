import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {StaticMessages} from '../../shared/services/static-messages';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  staticmsgs = StaticMessages;
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.email],
      password: [null, Validators.required],
      name: [null, Validators.required]
    });
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) {

  }

 async registerAccount() {
    debugger
    if (this.loginForm.valid) {
      try{
        const res = await this.authService.register(this.loginForm.value);
        console.log(res);
        console.log(`Register account`);
      }catch (e) {
       console.log(e) ;
      }

    }
  }
}
