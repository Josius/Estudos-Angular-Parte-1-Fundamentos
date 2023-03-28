import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {

    this.show = !this.show; // toggle
    // (this.show == false) ? this.show = true : this.show = false;
  }
}
