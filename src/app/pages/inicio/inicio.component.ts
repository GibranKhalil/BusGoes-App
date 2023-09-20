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

  devs = [
    {
      img: '',
      nome:'Gibran Khalil',
      funcao: '-----',
      tarefas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, diam ut condimentum euismod, nulla urna vulputate ipsum, non malesuada sem neque ac neque. Sed ut congue turpis. Aenean posuere congue metus eu iaculis. Curabitur posuere consectetur lectus ac dapibus. Nulla eget ante augue. Aenean egestas tristique lacinia. Duis dictum sed mi vitae accumsan.'
    },
    {
      img: '',
      nome:'Sabrina Araújo',
      funcao: '-----',
      tarefas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, diam ut condimentum euismod, nulla urna vulputate ipsum, non malesuada sem neque ac neque. Sed ut congue turpis. Aenean posuere congue metus eu iaculis. Curabitur posuere consectetur lectus ac dapibus. Nulla eget ante augue. Aenean egestas tristique lacinia. Duis dictum sed mi vitae accumsan.'
    },
    {
      img: '',
      nome:'Júlia Cardoso',
      funcao: '-----',
      tarefas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, diam ut condimentum euismod, nulla urna vulputate ipsum, non malesuada sem neque ac neque. Sed ut congue turpis. Aenean posuere congue metus eu iaculis. Curabitur posuere consectetur lectus ac dapibus. Nulla eget ante augue. Aenean egestas tristique lacinia. Duis dictum sed mi vitae accumsan.'
    }
  ]
}
