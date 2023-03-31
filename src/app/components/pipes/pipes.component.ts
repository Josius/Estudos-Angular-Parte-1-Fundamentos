import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  someText = 'IPSUM LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. LIBERO DOLORES PLACEAT REPELLAT SOLUTA DELECTUS PERFERENDIS EST, EOS INCIDUNT QUIS FUGIAT IPSA PORRO REPELLENDUS REPREHENDERIT TEMPORA PERSPICIATIS. CULPA NIHIL VEL ERROR?';

  today = new Date();
}
