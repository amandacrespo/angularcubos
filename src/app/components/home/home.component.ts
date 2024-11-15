import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public cubos: Cubo[] = [];

  constructor(public _service: CubosService, public _router:Router){}

  ngOnInit(): void {
    this._service.getCubos()
    .then(res => {
      this.cubos = res;
    })
  }
}
