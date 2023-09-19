import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  slickConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  slides = [
    { 
      imageUrl: 'assets/hortolandia.jpg',
      saida: 'Hortolândia', 
      destino: 'Campinas',
      preco: '5',
      cents: ',60'
    },
    { 
      imageUrl: 'assets/masp-sp.jpg',
      saida: 'São Paulo',
      destino: 'Sumaré',
      preco: '44',
      cents: ',15'
    },
    {
       imageUrl: 'assets/torre-campinas.jpg',
       saida: 'Campinas',
       destino: 'São Paulo',
       preco: '27',
       cents: ',99'
      },
    {
      imageUrl: 'assets/sumaré.jpeg',
      saida: 'Sumaré',
      destino: 'Hortolândia',
      preco: '5',
      cents: ',60'
    }
  ];
}
