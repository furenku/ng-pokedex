import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokedexService } from '../../pokedex/pokedex.service';

@Component({
  selector: 'pokedex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private searchInput = new FormControl('');

  constructor( private pokedexService: PokedexService ) { }

  ngOnInit() {

    this.searchInput.valueChanges.subscribe( value => this.pokedexService.searchPokemons( value ) );  

  }

}
