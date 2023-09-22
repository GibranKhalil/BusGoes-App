import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string = '';
  senha:string = '';

  constructor(private router: Router, private shared:SharedService, private http: HttpClient) {}
   


  login(){
    this.shared.login(this.email, this.senha).subscribe((response:any)=>{
    if(response.sucess){
      this.shared.setusuario(this.email);
      this.router.navigate(['inicio']);
      alert("Entrando");
    }
    else{
      alert("Dados Incorretos");
    }
    })
  }



/* btnlogin():void{
    if(this.user == "admin" && this.senha == "admin"){
      alert("Bem-vindo");

    }
    else{
      
    }
  }
  */

}
