import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animais = [
    { "nome": "gato", "caracteristicas": ["peludo", "pequeno", "doméstico"] },
    { "nome": "cachorro", "caracteristicas": ["peludo", "amigável", "doméstico"] },
    { "nome": "elefante", "caracteristicas": ["grande", "tromba", "selvagem"] },
    { "nome": "girafa", "caracteristicas": ["alto", "manchas", "selvagem"] },
    { "nome": "tigre", "caracteristicas": ["listrado", "feroz", "selvagem"] },
    { "nome": "leão", "caracteristicas": ["burro", "feroz", "selvagem"] },
    { "nome": "coelho", "caracteristicas": ["orelhas longas", "peludo", "doméstico"] },
    { "nome": "cobra", "caracteristicas": ["rasteja", "pele lisa", "selvagem"] },
    { "nome": "papagaio", "caracteristicas": ["voa", "colorido", "doméstico"] },
    { "nome": "urso", "caracteristicas": ["grande", "peludo", "selvagem"] },
    { "nome": "sapo", "caracteristicas": ["pequeno", "salta", "selvagem"] },
    { "nome": "coruja", "caracteristicas": ["voa", "noturno", "selvagem"] },
    { "nome": "peixe", "caracteristicas": ["nadador", "escamas", "aquático"] },
    { "nome": "golfinho", "caracteristicas": ["inteligente", "nadador", "aquático"] },
    { "nome": "tubarão", "caracteristicas": ["feroz", "nadador", "aquático"] },
    { "nome": "cavalo", "caracteristicas": ["corre", "grande", "doméstico"] },
    { "nome": "vaca", "caracteristicas": ["produz leite", "grande", "doméstico"] },
    { "nome": "galinha", "caracteristicas": ["bica", "pequeno", "doméstico"] },
    { "nome": "camaleão", "caracteristicas": ["muda cor", "pequeno", "selvagem"] },
    { "nome": "rinoceronte", "caracteristicas": ["chifre grande", "grande", "selvagem"] },
    { "nome": "macaco", "caracteristicas": ["inteligente", "escala", "selvagem"] }
  ]

  opcaoAnimais = this.animais.map(animal => animal.nome);

  caractAleat = '';
  resposta = '';
  animalFiltrado = [...this.animais];

  constructor() { }

  getRandomAnimal() {
    if (this.animalFiltrado.length > 1) {
      const animalAleat = this.animalFiltrado[Math.floor(Math.random() * this.animalFiltrado.length)];
      this.caractAleat = animalAleat.caracteristicas[Math.floor(Math.random() * animalAleat.caracteristicas.length)];
    } else if (this.animalFiltrado.length === 1) {
      alert(`O animal é: ${this.animalFiltrado[0].nome}.`);
    }
  }

  verificarCaract() {
    this.animalFiltrado = this.animalFiltrado.filter(animal =>
      this.resposta === 'sim' ?
        animal.caracteristicas.includes(this.caractAleat) :
        !animal.caracteristicas.includes(this.caractAleat)
    );
    this.resposta = '';
    this.getRandomAnimal();
  }
}


