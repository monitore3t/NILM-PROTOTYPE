import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Elemento } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http: HttpClient) { }

  getElementos(){

    return this.http.get<Elemento[]>(`${ environment.url }/api/nilm-prototype`)
  }
}