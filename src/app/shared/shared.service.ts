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

   getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?action=get`);
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
