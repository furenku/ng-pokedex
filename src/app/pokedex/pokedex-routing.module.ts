import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsResolver } from './resolvers/pokemons-resolver';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

const routes: Routes = [
  {
    path: "",
    resolve: {
      pokemons: PokemonsResolver
    },
    component: PokedexListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [PokemonsResolver],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
