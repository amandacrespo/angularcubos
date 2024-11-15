import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CubosService {

  constructor() { }

  getMarcas(): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/Cubos/Marcas';
          let url = environment.urlCubos + endpoint;
          axios.get(url)
          .then(response => {
            resolve(response.data)
          })
      })
  }

  getCubos(): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/Cubos';
          let url = environment.urlCubos + endpoint;
          axios.get(url)
          .then(response => {
              resolve(response.data)
          })
      })
  }

  getCubosMarca(marca:string): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/Cubos/CubosMarca/'+marca;
          let url = environment.urlCubos + endpoint;
          axios.get(url)
          .then(response => {
              resolve(response.data)
          })
      })
  }

  getCuboId(id:number): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/Cubos/'+id;
          let url = environment.urlCubos + endpoint;
          axios.get(url)
          .then(response => {
              resolve(response.data)
          })
      })
  }

  getComentariosId(id:number): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/ComentariosCubo/GetComentariosCubo/'+id;
          let url = environment.urlCubos + endpoint;
          axios.get(url)
          .then(response => {
              resolve(response.data)
          })
      })
  }

  setLogin(email:string, password:string): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/manage/login';
          let url = environment.urlCubos + endpoint;
          let headers = {
              'Content-type': 'application/json'
          }
          axios.post(url, {email: email, password: password}, {headers: headers})
          .then(response => {
              resolve(response.data.response)
          })
      })
  }

  getPerfil(token:string): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/Manage/PerfilUsuario';
          let url = environment.urlCubos + endpoint;
          let header = {
              'Authorization': token,
              'Content-type': 'application/json'
          }
          
          axios.get(url, {headers: header})
          .then(response => {
              resolve(response.data)
          })
      })
  }

  getCompras(token:string): Promise<any>{
      return new Promise((resolve)=>{
          const endpoint = 'api/Compra/ComprasUsuario';
          let url = environment.urlCubos + endpoint;
          let header = {
              'Authorization': token,
              'Content-type': 'application/json'
          }
          
          axios.get(url, {headers: header})
          .then(response => {
              resolve(response.data)
          })
      })
  }
}
