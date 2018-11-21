import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.scss']
})
export class PokedexDetailComponent implements OnInit {

  public pokemon: any;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    
    this.pokemon = this.route.snapshot.data['pokemon'] || {};
    
  }

}
