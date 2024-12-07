import { Component, Input } from '@angular/core';
import { Capitulos } from '../../models/RickAndMorty';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {
  @Input() data!: Capitulos;
}
