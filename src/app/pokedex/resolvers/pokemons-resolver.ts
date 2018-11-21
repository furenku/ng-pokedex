import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

// import { Course } from "../../../core/models/course.model";
// import { Pokemon } from "../../../core/models/program.model";

import { PokedexService } from '../pokedex.service';

import { Observable, of } from 'rxjs';



@Injectable()
export class PokemonsResolver implements Resolve<Observable<any[]>> {
// export class PokemonsResolver implements Resolve<Observable<Pokemon[]>> {

  constructor( private pokedexService: PokedexService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {

    return this.pokedexService.fetchPokemons();
    
  }
  
}