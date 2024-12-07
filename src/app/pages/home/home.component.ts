import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email:string='';
  password:string='';

  login(user:string, password:string){
    if(user=='evelin@gmail.com' && password=='01234'){
      console.log(`User: ${user}, Password: ${password}`);
      window.location.href= '/dashboard'
    }
    else{
      alert('Credenciales incorrectas');
    }
  }
}
