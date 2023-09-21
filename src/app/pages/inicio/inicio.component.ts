import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  
constructor(private render: Renderer2, private e: ElementRef){}

rolar(id: string){
  const elemento = this.e.nativeElement.querySelector(`#${id}`);
  if(elemento){
    elemento.scrollIntoView({behavior: 'smooth'});
  }
}

  slickConfig = {
    autoplay:true,
    autoplaySpeed: 1000,
    speed: 650,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable:false,
    arrows: true,

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
