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

  constructor(private router: Router, private shared:SharedService, private http: HttpClient) {}
   
  user:string = '';
  senha:string = '';

  login(){
    const userdata = {user:this.user, senha:this.senha}
    this.http.post('http://localhost/phpmyadmin/index.php?route=/database/structure&db=conecta', userdata).subscribe((response:any)=>{
    if(response.sucess){
      this.shared.setusuario(this.user);
      this.router.navigate(['inicio']);
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
