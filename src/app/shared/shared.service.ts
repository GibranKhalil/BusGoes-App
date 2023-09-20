import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private usuario: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

   //vericar se o usuario esta logado, será usado depois que o php for implementado

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
