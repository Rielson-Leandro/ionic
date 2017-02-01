import { Component, Input } from '@angular/core';
import { Carona } from "../../models/carona";

@Component({
  selector: 'caronas-list-item',
  templateUrl: 'caronas-list-item.html'
})
export class CaronasListItem {

  @Input()
  carona:Carona;

}
