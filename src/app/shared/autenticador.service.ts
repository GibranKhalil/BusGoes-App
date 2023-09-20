import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Autenticador{

  constructor( private shared:SharedService) { }

  canActivate():Observable<boolean> | boolean{
    let logado:boolean = this.shared.usuariologado();

    return logado;
  }
}
