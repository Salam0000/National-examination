import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegister!: FormGroup;
  constructor(private formBulider: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBulider.group({
      username: ["", Validators.required],
      phonenumber: ["", [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
      specialization: ["", Validators.required]
    })
  }
  onSubmit() {
    console.log(this.formRegister.value)

    if (this.formRegister.valid) {
      this.router.navigate(['/login'])
    }
  }
}
