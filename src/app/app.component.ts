import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/autenticador.service';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private dataService: ApiService, private shared: SharedService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }

  }
  ngOnInit(): void {
    this.shared.getusuario().subscribe((retorno) => {
      if (retorno) {
        this.logado = true;
      }
      else {
        this.logado = false;
      }
    })
  }
  title = 'Bus';
  logado: boolean = false;

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
}