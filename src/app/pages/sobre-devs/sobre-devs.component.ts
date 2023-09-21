import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-devs',
  templateUrl: './sobre-devs.component.html',
  styleUrls: ['./sobre-devs.component.css']
})
export class SobreDevsComponent {
  devs = [
    {
      img: 'assets/gibran.jpg',
      nome: 'Gibran Khalil',
      funcao: '-----',
      tarefas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, diam ut condimentum euismod, nulla urna vulputate ipsum, non malesuada sem neque ac neque. Sed ut congue turpis. Aenean posuere congue metus eu iaculis. Curabitur posuere consectetur lectus ac dapibus. Nulla eget ante augue. Aenean egestas tristique lacinia. Duis dictum sed mi vitae accumsan.',
      icons: [
        {
          nome: 'Angular',
          img: 'assets/icons8-angular-48.png'
        },
        {
          nome: 'TypeScript',
          img: 'assets/icons8-typescript-48.png'
        },
        {
          nome: 'JavaScript',
          img: 'assets/icons8-js-48.png'
        },
        {
          nome: 'HTML',
          img: 'assets/icons8-html-48.png'
        },
        {
          nome: 'CSS',
          img: 'assets/icons8-css-48.png'
        }
      ]
    },
    {
      img: 'assets/sabrina.jpeg',
      nome: 'Sabrina Araujo',
      funcao: '-----',
      tarefas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, diam ut condimentum euismod, nulla urna vulputate ipsum, non malesuada sem neque ac neque. Sed ut congue turpis. Aenean posuere congue metus eu iaculis. Curabitur posuere consectetur lectus ac dapibus. Nulla eget ante augue. Aenean egestas tristique lacinia. Duis dictum sed mi vitae accumsan.',
      icons: [
        {
          nome: 'php',
          img: 'assets/icons8-php-48.png'
        },
        {
          nome: 'TypeScript',
          img: 'assets/icons8-mysql-48.png'
        },
        {
          nome: 'HTML',
          img: 'assets/icons8-html-48.png'
        },
      ]
    },
    {
      img: 'assets/julia.jpeg',
      nome: 'Júlia Cardoso',
      funcao: '-----',
      tarefas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, diam ut condimentum euismod, nulla urna vulputate ipsum, non malesuada sem neque ac neque. Sed ut congue turpis. Aenean posuere congue metus eu iaculis. Curabitur posuere consectetur lectus ac dapibus. Nulla eget ante augue. Aenean egestas tristique lacinia. Duis dictum sed mi vitae accumsan.',
      icons: [
        {
          nome: 'php',
          img: 'assets/icons8-php-48.png'
        },
        {
          nome: 'TypeScript',
          img: 'assets/icons8-mysql-48.png'
        },
        {
          nome: 'HTML',
          img: 'assets/icons8-html-48.png'
        },
      ]
    }
  ]


}
