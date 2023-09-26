import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService} from 'src/app/shared/autenticador.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  senha:string ='';
  user:string = '';

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router, private shared:SharedService) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  postdata(angForm1:FormGroup) {
    this.dataService.userlogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if(data.length > 0){
          const nome = data[0].name;
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/inicio';
          this.shared.setusuario(nome);
          this.router.navigate([redirect]);
          }
        },
        error => {
          alert("A senha ou o Email está errado");
        });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
}