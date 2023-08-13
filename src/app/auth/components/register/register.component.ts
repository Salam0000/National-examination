import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  constructor(private formBulider: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.formRegister = this.formBulider.group({
      username: ["", Validators.required],
      phonenumber: ["", [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
      specialization: ["", Validators.required]
    })
  }
  onSubmit() {
    if (this.formRegister.valid) {
      console.log(this.formRegister.value)
      const data = this.formRegister.value;
      let model = new FormData();
      model.append('name', this.formRegister.value.username)
      model.append('mobile_phone', this.formRegister.value.phonenumber)
      model.append('specialization_id', this.formRegister.value.specialization)
      console.log('model' + model)
      this.authService.register(model).subscribe(
        (result) => {
          console.log(result);
          if (result.status) {
            this.router.navigate(['/login']);
          } else {
            alert(result.message);
          }
        },
        (err) => { console.log(err); }
      );
    } else {
      alert('الرجاء أدخل جميع الحقول');
    }


  }


}
