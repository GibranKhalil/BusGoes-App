import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private shared:SharedService, private http: HttpClient) {}
 

  data:any
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data)=>{
      this.data = data;
      console.log(data); //chamada htpp para posteriormente ser usado o php
    })
  }
  
  user:string = '';
  senha:string = '';



  btnlogin():void{
    if(this.user == "admin" && this.senha == "admin"){
      alert("Bem-vindo");
      this.shared.setusuario(this.user);
      this.router.navigate(['inicio']);
    }
    else{
      alert("Dados Incorretos");
    }
  }

}
