import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pokemon } from "./pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private api_url = 'https://gist.githubusercontent.com/coderdiaz/633125b46490f2ffa3b21ebeaa0cf6e2/raw/763b3d6c856010555e92adb889b6b342dfe51063';

  public pokemons: Pokemon[];

  public displayedPokemons: BehaviorSubject<Pokemon[]>;

  public pokemonCount: number;


  constructor(private http: HttpClient) {

    this.displayedPokemons = new BehaviorSubject([]);
    
    this.pokemonCount = 12;


  }

  fetchPokemons() : Observable<Pokemon[]> {
    
    let pokemons =  this.http
    .get<Pokemon[]>(`${this.api_url}/`)

    
    pokemons.subscribe( pokemons => {

      this.pokemons = pokemons; 
   
      this.displayedPokemons.next( pokemons.slice(0, this.pokemonCount ) )
   
    });
    
    return pokemons;

  }

  fetchPokemon( id: number ) : Observable<Pokemon> {
    
    return from( this.pokemons.filter( pokemon => pokemon.id == id ));

  }


  searchPokemons( searchString: string ) {

    let filteredPokemons = this.pokemons.filter(
      pokemon => pokemon.name.toLowerCase().includes( searchString.toLowerCase() )
    );
    
    this.displayedPokemons.next( filteredPokemons.slice(0, this.pokemonCount ) )
    
  }


  showMore( ) {

    this.pokemonCount += 12;

    this.displayedPokemons.next( this.pokemons.slice(0, this.pokemonCount ) )

  }

}
