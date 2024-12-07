import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capitulos, Character } from '../models/RickAndMorty';

@Injectable({
  providedIn: 'root'
})
export class RickandMortyApiService {
  private body(data:any){
    return JSON.stringify(data);
  }

  private header(){
    return {
      headers:{
        'Content-Type':'application/json'
      }
    }
  }
  private url(endpoint:string){
    return `https://rickandmortyapi.com/api/${endpoint}`
  }
  constructor(private http:HttpClient) { }
  getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(
      this.url('character'),
      this.header())
  }
  getCapitulos():Observable<Capitulos[]>{
    return this.http.get<Capitulos[]>(
      this.url('episode'),
      this.header())
  }
}
