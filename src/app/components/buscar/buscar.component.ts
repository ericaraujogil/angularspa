import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../services/heroes.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _route:ActivatedRoute, private _heroService: HeroesService, private _router: Router) {


  }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.heroes=this._heroService.buscarHeroes(params['heroesArr'])
    })
  }
  verHeroe(i:number){
    this._router.navigate(['/heroe', i]);
  }

}
