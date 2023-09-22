import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private usuario: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) { }

   //vericar se o usuario esta logado, será usado depois que o php for implementado

login(email:string, senha:string){
  const userdata = new FormData();
  userdata.append('email', email);
  userdata.append('senha', senha);

  return this.http.post('https://jsonplaceholder.typicode.com/users', userdata);
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