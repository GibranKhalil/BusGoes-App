import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  nome:any = '';
  deslogado:boolean=true;

  constructor(private shared:SharedService){
    shared.getusuario().subscribe((retorno)=>{
    this.nome = retorno;
    if(this.nome == ''){
      this.deslogado = true;
    }
    else{
      this.deslogado = false;
    }
    })
  }

  @Input() Drawer:any;

  showmenu(){
    this.Drawer.toggle();
  }



}
