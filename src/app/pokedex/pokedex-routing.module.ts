import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsResolver } from './resolvers/pokemons-resolver';
import { PokemonResolver } from './resolvers/pokemon-resolver';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';

const routes: Routes = [
  {
    path: "",
    resolve: {
      pokemons: PokemonsResolver
    },
    component: PokedexListComponent
  },
  {
    path: "pokemon/:pokemon_id",
    resolve: {
      pokemon: PokemonResolver
    },
    component: PokedexDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [PokemonsResolver, PokemonResolver],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
