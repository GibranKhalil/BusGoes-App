import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {

  pagamento: string = '1'; //padrao para pix

  valor = new FormControl('', [Validators.required]);

  erro(){
    if(this.valor.hasError('required')){
      return 'É necessário um valor!';
    }
    return this.valor.hasError('required') ? 'Há erros' : 'Não há erros'
  }

  setpagamento(pagamento:string){
    this.pagamento = pagamento;
  }

}
