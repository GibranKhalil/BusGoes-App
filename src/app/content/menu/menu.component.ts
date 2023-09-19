import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(){
  }

  @Input() Drawer:any;

  nome:any = '';

  showmenu(){
    this.Drawer.toggle();
  }


}