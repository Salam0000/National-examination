import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // appearance: MatFormFieldAppearance = 'fill';
  formLogin!: FormGroup;
  constructor(private formBulider: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBulider.group({
      username: ["", Validators.required],
      password: ["", Validators.required],

    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value)
      this.router.navigate(['/home']);

    }
  }

}
