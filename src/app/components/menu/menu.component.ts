import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public marcas: string[] = [];

  constructor(public _service: CubosService, public _router:Router){}

  ngOnInit(): void {
    this._service.getMarcas()
    .then(res => {
      this.marcas = res;
    })
  }

  logout():void{
    environment.token = '';
    this._router.navigate(['/login']);
    alert('Sesión cerrada correctamente');
  }

}
