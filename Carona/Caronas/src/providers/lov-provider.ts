import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {EstadoCarona} from "../models/estado-carona";

@Injectable()
export class LovProvider {

getCaronaStates():Array<EstadoCarona>{
  return [EstadoCarona.NOVA, EstadoCarona.AVAGA, EstadoCarona.CHEIO, EstadoCarona.FINALIZADA]
  }
}
