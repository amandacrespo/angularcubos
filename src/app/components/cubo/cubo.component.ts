import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cubo } from '../../models/Cubo';
import { Comentario } from '../../models/Comentario';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrl: './cubo.component.css'
})
export class CuboComponent implements OnInit {

  public cubo!: Cubo;
  public comentarios!: Comentario[];

  constructor(public _service: CubosService, public _router:Router, public _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.loadData();
    this.loadComentarios();
  }

  loadData():void {
    this._activeRoute.params.subscribe((params:Params)=>{
      this._service.getCuboId(params['id'])
      .then(res=>{
        this.cubo = res;
      })
    })
  }

  loadComentarios(){
    this._activeRoute.params.subscribe((params:Params)=>{
      this._service.getComentariosId(params['id'])
      .then(res=>{
        this.comentarios = res;
      })
    })
  }
}
