import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';
import { Perfil } from '../../models/Perfil';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{

  public perfil!: Perfil;

  constructor(public _service: CubosService, public _router:Router){}

  ngOnInit(): void {
    if(environment.token === ''){
      this._router.navigate(['/login']);
    } else {
      this._service.getPerfil(environment.token)
      .then(res => {
        this.perfil = res;
      })
    }

  }

}
