import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormControl } from '@angular/forms';

import { PokedexService } from '../pokedex.service';



import { Pokemon } from "../pokemon.model";

@Component({
  selector: 'pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  public pokemons: Pokemon[];
  private searchInput = new FormControl('');

  constructor(private route: ActivatedRoute, private pokedexService: PokedexService ) { }

  ngOnInit() {
    
    this.pokemons = this.route.snapshot.data['pokemons'] || {};
    
    this.pokedexService.displayedPokemons.subscribe( pokemons => this.pokemons = pokemons ); 

    this.searchInput.valueChanges.subscribe( value => this.pokedexService.searchPokemons( value ) );  

    
  }


  showMore() {

    this.pokedexService.showMore();
  
  }


}
