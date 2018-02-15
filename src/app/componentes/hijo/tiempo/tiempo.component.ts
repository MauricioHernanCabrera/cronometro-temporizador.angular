import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})

export class TiempoComponent {
  @Input('tiempo') tiempo:Object;
}