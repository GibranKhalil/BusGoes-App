import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  cidades = [
    {
      nome: 'Campinas'
    },
    {
      nome: 'Sumaré'
    },
    {
      nome: 'Hortolândia'
    },
    {
      nome: 'São Paulo'
    },
    {
      nome: 'Piracicaba'
    },
    {
      nome: 'Guarulhos'
    },
    {
      nome: 'Osasco'
    },
    {
      nome: 'Sorocaba'
    },
    {
      nome: 'Ribeirão Preto'
    },
    {
      nome: 'Mogi das Cruzes'
    },
  ];

  bilhetes = [
    {
      nome: 'Bilhete Comum'
    },
    {
      nome: 'Bilhete Escolar'
    },
    {
      nome: 'Bilhete Universitário'
    },
    {
      nome: 'Bilhete Especial'
    },
    {
      nome: 'Bilhete Idoso'
    },
    {
      nome: 'Bilhete Mensal'
    },
    {
      nome: 'Bilhete Anual'
    },
    {
      nome: 'Bilhete Vale-Transporte'
    },
  ];

  ajuda = [
    {
      nome: 'Fale com o suporte'
    },
    {
      nome: 'Tutoriais'
    },
    {
      nome: 'Denunciar Abuso'
    }
  ];

  pays = [
    {
      img: 'assets/pix.png'
    },
    {
      img: 'assets/visa.png'
    },
    {
      img: 'assets/mastercard.png'
    },
    {
      img: 'assets/elo.png'
    },
    {
      img: 'assets/hipercard.png'
    }
  ]
}
