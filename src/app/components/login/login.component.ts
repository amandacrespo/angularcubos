import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(public _service: CubosService, public _router:Router){}

  ngOnInit(): void {
    if(environment.token !== ''){
      this._router.navigate(['/perfil']);
      alert('Ya estás registrado!');
    }
  }

  login(){
    this._service.setLogin(this.email.nativeElement.value, this.password.nativeElement.value)
    .then(res=>{
        if(res !== undefined){
            environment.token = 'Bearer '+ res;
            this._router.navigate(['/perfil']);
        } 
    })
  }
}
