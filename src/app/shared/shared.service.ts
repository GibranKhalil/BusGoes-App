import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private usuario: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) { }

  login(email:string, senha:string){
    const userdata = new FormData();
    userdata.append('email', email);
    userdata.append('senha', senha);
  
    return this.http.post('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=conecta&table=usuarios', userdata, { responseType: 'text' });
  }

  usuariologado():boolean{
    let user = this.usuario.getValue();
    if(user){
      return true;
    }
    else{
      return false;
    }
  }



  setusuario(usuario:string){
    this.usuario.next(usuario);
  }

  getusuario(){
    return this.usuario.asObservable();
  }
}