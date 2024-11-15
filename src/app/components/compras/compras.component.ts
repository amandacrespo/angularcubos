import { Component, OnInit } from '@angular/core';
import { Compra } from '../../models/Compra';
import { environment } from '../../../environments/environment.development';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit{
  
  public compras!: Compra[];

  constructor(public _service: CubosService, public _router:Router){}

  ngOnInit(): void {
    if(environment.token == ''){
      this._router.navigate(['/login']);
  } else {
      this._service.getCompras(environment.token)
      .then(res => {
          this.compras = res;
      })
  }
  }
}
