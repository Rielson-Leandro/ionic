import {EstadoCarona} from "./estado-carona";
export class Carona{
  keyReference:string;
  titulo:string;
  data:string;
  hora:string;
  numeroVagas:string;
  localSaida:string;
  localChegada:string;
  valor:string;
  state:EstadoCarona;

  constructor(titulo?:string, data?:string, hora?:string, numeroVagas?: string,
              localSaida?: string, localChegada?: string, valor?: string){

     this.titulo = titulo;
     this.data = data;
     this.hora = hora;
     this.numeroVagas = numeroVagas;
     this.localSaida = localSaida;
     this.localChegada = localChegada;
     this.valor = valor;
    //this.state = EstadoCarona.NOVA;
  }
}
