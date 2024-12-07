import { Component, Input } from '@angular/core';
import { Character } from '../../models/RickAndMorty';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() data!: Character;

}
