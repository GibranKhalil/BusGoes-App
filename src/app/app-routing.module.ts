import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreDevsComponent } from './pages/sobre-devs/sobre-devs.component';
import { RodapeComponent } from './content/rodape/rodape.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RecargaComponent } from './pages/recarga/recarga.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'inicio', component: InicioComponent },
  {path: 'sobre', component: SobreComponent},
  {path: 'sobredev', component: SobreDevsComponent},
  {path: 'recarga', component: RecargaComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
