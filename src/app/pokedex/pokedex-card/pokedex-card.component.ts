import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input() pokemon;

  constructor() { }

  ngOnInit() {
  }

}
