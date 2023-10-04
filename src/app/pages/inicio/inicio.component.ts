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
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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

  avaliacoes = [
    {
      nome: 'Ana Rodrigues',
      img: 'assets/usuario-estudante.jpg',
      desc: 'Estudante do IFSP de Campinas',
      comen: 'Estou impressionada com a facilidade de uso deste aplicativo! Com apenas alguns toques, consigo comprar minhas passagens intermunicipais e recarregar meu bilhete único. A opção de armazenar meus bilhetes digitalmente é muito conveniente. Eu o recomendo a todos que precisam viajar com frequência.',
    },
    {
      nome: 'João Pereira',
      img: 'assets/aposentado.jpg',
      desc: 'Aposentado',
      comen: 'O aplicativo BusGoes tornou tudo muito mais simples! Com apenas alguns cliques, posso planejar minhas viagens de ônibus intermunicipais e até mesmo recarregar meu bilhete único para me locomover na cidade de forma conveniente. É incrível como a tecnologia facilitou a minha vida, e o aplicativo é uma parte essencial disso.',
    },
    {
      nome: 'Monica Soares',
      img: 'assets/usuario-deficiente.jpg',
      desc:'Deficiente físico',
      comen:'A BusGoes tornou minha vida muito mais fácil. Este aplicativo me permite planejar e comprar minhas passagens intermunicipais com antecedência, garantindo que as acomodações necessárias estejam disponíveis. Além disso, a opção de recarga de bilhete único é uma verdadeira bênção, pois posso usar o transporte público de forma independente e sem complicações',
    }
  ]

}
