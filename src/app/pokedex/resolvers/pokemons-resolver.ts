import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

// import { Pokemon } from "../../../core/models/program.model";

import { PokedexService } from '../pokedex.service';

import { Observable } from 'rxjs';

import { Pokemon } from "../pokemon.model";



@Injectable()
export class PokemonsResolver implements Resolve<Observable<Pokemon[]>> {
// export class PokemonsResolver implements Resolve<Observable<Pokemon[]>> {

  constructor( private pokedexService: PokedexService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon[]> {

    return this.pokedexService.fetchPokemons();
    
  }
  
}