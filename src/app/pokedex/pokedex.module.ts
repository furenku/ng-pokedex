import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';


import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';
import { PokedexTagComponent } from './pokedex-tag/pokedex-tag.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexService } from './pokedex.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokedexRoutingModule
  ],
  providers: [
    PokedexService
  ],
  declarations: [PokedexCardComponent, PokedexTagComponent, PokedexDetailComponent, PokedexListComponent]
})
export class PokedexModule { }
