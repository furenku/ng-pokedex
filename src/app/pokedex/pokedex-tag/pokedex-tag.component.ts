import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokedex-tag',
  templateUrl: './pokedex-tag.component.html',
  styleUrls: ['./pokedex-tag.component.scss']
})
export class PokedexTagComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
