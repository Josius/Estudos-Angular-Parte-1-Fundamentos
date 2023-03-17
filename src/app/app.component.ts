import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Joloaquim';
  
  userData = {
    email: 'joloaqim@email.com',
    role: 'admin'
  };
  
  title = 'Estudos-Angular';
}
