import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroService: HeroesService, private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

  verHeroe(i:number){
    this._router.navigate(['/heroe', i]);
  }

}
