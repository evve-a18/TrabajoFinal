import { Component, Input } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  verPersonajes(){
    window.location.href= '/characters'
  }
  verCaps(){
    window.location.href= '/episodes'
  }
}
