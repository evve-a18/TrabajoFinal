import { Component } from '@angular/core';
import { RickandMortyApiService } from '../../services/rickand-morty-api.service';
import { take } from 'rxjs';
import { NgFor } from '@angular/common';
import { EpisodesComponent } from '../../component/episodes/episodes.component';

@Component({
  selector: 'app-rick-morty-episodes',
  standalone: true,
  imports: [NgFor,EpisodesComponent],
  templateUrl: './rick-morty-episodes.component.html',
  styleUrl: './rick-morty-episodes.component.css'
})
export class RickMortyEpisodesComponent {
  constructor (private apiRickMorty:RickandMortyApiService) {}
  info:any=""
  capitulos!:any[]

  ngOnInit(): void {
    this.apiRickMorty.getCapitulos().pipe(
      take(1)
    ).subscribe((res:any)=>{
      this.capitulos=res.results
      this.info= res.info
      console.log(res.results);
    });
  }

}
