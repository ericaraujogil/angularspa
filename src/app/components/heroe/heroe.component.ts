import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private _route:ActivatedRoute, private _heroService: HeroesService, private _router: Router) {
      this._route.params.subscribe( params => {
        this.heroe=this._heroService.getHeroe(params['id'])
      })
   }

  ngOnInit() {
  }

  volverHeroes(){
      this._router.navigate(['heroes'])
  }

}
