import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {

  date:string = '00/0000';
  pagamento: string = '1'; //padrao para pix
  recargaform: FormGroup;
  modalpix:boolean = false;
  modalcartao:boolean = false;
  mostrarModal:boolean = false;


  constructor(private fb: FormBuilder) {
    this.recargaform= this.fb.group({
      valor: ['', [Validators.required,]],
      quantidade: ['', [Validators.required]],
      nomecred: ['', [Validators.required, Validators.minLength(3)]],
      numerocred: ['', [Validators.required, Validators.minLength(16)]],
      data: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      nomedeb: ['', [Validators.required, Validators.minLength(3)]],
      numerodeb: ['', [Validators.required, Validators.minLength(16)]],
    });

  }

  mostrarModalPix(){
    const valor = this.recargaform.get('valor');
    if(valor?.value <= 600 && valor?.value > 0){
      this.modalpix = true;
      this.mostrarModal = true;
    }
    else{
      this.mostrarModal = false;
      this.modalpix = false;
      alert("O valor precisa ser menor ou igual que R$600");
    }
  }

  mostrarModalCartao(){
    const valor = this.recargaform.get('valor');
    if(valor?.value <= 600 && valor?.value > 0){
      this.modalcartao = true;
      this.mostrarModal = true;
    }
    else{
      this.mostrarModal = false;
      this.modalcartao = false;
      alert("O valor precisa ser menor ou igual que R$600");
    }
  }

  fecharmodais(){
    this.modalcartao = false;
    this.modalpix = false;
    this.mostrarModal = false;
  }


  erro() {
    const valorControl = this.recargaform.get('valor');
    if (valorControl) {
      if (valorControl.hasError('required')) {
        return 'É necessário um valor!';
      }
    }
    return 'Não há erros';
  }
  
  setpagamento(pagamento:string){
    this.pagamento = pagamento;
    if(pagamento == '2' || pagamento == '3'){
      this.modalpix = false;
    }
    else{
      this.modalcartao = false;
    }
  }

  

  parcelas = [
    {
      value: 'op1',
      num: '1x'
    },
    {
      value: 'op2',
      num: '2x'
    },
    {
      value: 'op3',
      num: '3x'
    },
    {
      value: 'op4',
      num: '4x'
    },
    {
      value: 'op5',
      num: '5x'
    },
    {
      value: 'op6',      
      num: '6x'
    },
    {
      value: 'op7',
      num: '7x'
    },
    {
      value: 'op8',
      num: '8x'
    },
    {
      value: 'op9',
      num: '9x'
    },
    {
      value: 'op10',
      num: '10x'
    },
    {
      value: 'op11',
      num: '11x'
    },
    {
      value: 'op12',
      num: '12x'
    },

  ]

}
