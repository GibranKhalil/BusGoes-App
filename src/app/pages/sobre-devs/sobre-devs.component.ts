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
      funcao: 'Desenvolvedor Front-End',
      tarefas: 'Através da minha participação na criação dessa aplicação web, consegui solidificar meus conhecimentos em CSS e no framework Angular. Conheci o uso de bibliotecas disponíveis no Angular e como  realizar requisições HTTP para acessar elementos do banco de dados e enviar também.Meus conhecimentos foram provados durante esse desenvolvimento e me senti desafiado a cada dia para entregar tudo no prazo que o grupo estipulou. Sinto-me fortalecido para realizar coisas maiores.',
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
        },
      ]
    },
    {
      img: 'assets/sabrina.jpeg',
      nome: 'Sabrina Araujo',
      funcao: 'Desenvolvedora Back-End',
      tarefas: 'técnica em informática formada pela instituição IFSP, atualmente estudante de Análise e Desenvolvimento de Sistemas pela mesma instituição. Sua formação permitiu-lhe fazer dois anos de Iniciação Científica com bolsa fornecida pelo CNpQ e com isso, conseguiu desenvolver as suas habilidades de aprendizados pelo curso na prática, focando assim nas linguagens: PHP, MySql e JS. Tem paixão por música e fascinada em instrumentos musicais e ver seu sistema funcionando sem bug é o seu maior sonho e desejo.',
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
      funcao: 'Desenvolvedora Back-End',
      tarefas: 'Olá! Eu me chamo Júlia Cardoso. Atualmente tenho 19 anos e estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal de São Paulo - campus Hortolândia, junto com meus amigos Devs. Possuo diploma Técnico em Informática Integrado ao Ensino Médio pelo próprio Instituto, e muita vontade de me desenvolver profissionalmente e de aprender coisas novas!',
      icons: [
        {
          nome: 'php',
          img: 'assets/icons8-php-48.png'
        },
        {
          nome: 'mysql',
          img: 'assets/icons8-mysql-48.png'
        },
        {
          nome: 'JavaScript',
          img: 'assets/icons8-js-48.png'
        },
        {
          nome: 'HTML',
          img: 'assets/icons8-html-48.png'
        },
      ]
    }
  ]


}
