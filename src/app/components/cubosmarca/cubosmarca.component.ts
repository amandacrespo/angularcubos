import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { CubosService } from '../../services/cubos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrl: './cubosmarca.component.css'
})
export class CubosmarcaComponent implements OnInit{
  public cubos!: Cubo[];
  public marca!: string;

  constructor(public _service: CubosService, public _router:Router, public _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params)=>{
      this.loadData(params['marca']);
      this.marca = params['marca'];
    })
  }

  loadData(marca:string):void {
    this._service.getCubosMarca(marca)
    .then(res => {
        this.cubos = res;
    })
  }
}
