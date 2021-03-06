import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private _router:Router) {
      this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // this._router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
