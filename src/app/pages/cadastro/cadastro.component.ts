import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/autenticador.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {
  angForm: FormGroup;
  buttonStyle:any = {};
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  

  ngOnInit() {

  }

  postdata(angForm1: FormGroup) {
    this.dataService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if(this.angForm.valid){
            this.router.navigate(['login']);
          }
          
        },

        error => {
          alert('Verifique os dados')
        });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
}