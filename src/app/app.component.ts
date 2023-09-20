import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private shared:SharedService){

  }

  ngOnInit(): void {
    this.shared.getusuario().subscribe((retorno)=>{
      if(retorno){
        this.logado = true;
      }
      else{
        this.logado = false;
      }
      })
  }
  title = 'Bus';
  logado:boolean = false;
}
