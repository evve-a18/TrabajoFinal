import { Component, OnInit } from '@angular/core';
import { RickandMortyApiService } from '../../services/rickand-morty-api.service';
import { InfoComponent } from '../../component/info/info.component';
import { Character } from '../../models/RickAndMorty';
import { NgFor } from '@angular/common';
import { take } from 'rxjs';


@Component({
  selector: 'app-rickandmorty-page',
  standalone: true,
  imports: [InfoComponent, NgFor],
  templateUrl: './rickandmorty-page.component.html',
  styleUrl: './rickandmorty-page.component.css'
})
export class RickandmortyPageComponent implements OnInit{
  constructor (private apiRickMorty:RickandMortyApiService) {}
  info:any=""
  personajes!:any[]

  ngOnInit(): void {
    this.apiRickMorty.getCharacters().pipe(
      take(1)
    ).subscribe((res:any)=>{
      this.personajes=res.results
      this.info= res.info
      console.log(res.results);
    });
  }
}
