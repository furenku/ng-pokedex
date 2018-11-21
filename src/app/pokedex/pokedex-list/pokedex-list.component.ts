import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  public pokemons: any[];

  constructor(private route: ActivatedRoute, private pokedexService: PokedexService ) { }

  ngOnInit() {
    
    this.pokemons = this.route.snapshot.data['pokemons'] || {};
    
    this.pokedexService.displayedPokemons.subscribe( pokemons => this.pokemons = pokemons ); 

  }

}
