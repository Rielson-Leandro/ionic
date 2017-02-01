import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Carona } from "../../models/carona";
import { CaronaProvider } from "../../providers/carona-provider";
import {CaronasAddPage} from "../caronas-add/caronas-add";


@Component({
  selector: 'page-caronas-list',
  templateUrl: 'caronas-list.html'
})
export class CaronasListPage {

  caronas:Array<Carona>;

  constructor(public navCtrl: NavController,
              public caronaProvider: CaronaProvider,
              public toastCtrl: ToastController,
              public ngZone: NgZone) {}

  ionViewDidLoad() {
    this.caronaProvider.reference.on('child_removed', (snapshot) => {
      let caronaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'carona '+caronaRemovida.titulo+' removida!',
        duration: 3000
      }).present();
    })

    this.caronaProvider.reference.on('value', (snapshot)=> {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.caronas = innerArray;
      })
    })
  }

  atualizarCarona(carona:Carona){
    this.navCtrl.push(CaronasAddPage, {'carona': carona});
  }

  adicionarCarona(){
    this.navCtrl.push(CaronasAddPage, {'carona' : new Carona()});
  }

  deletarCarona(carona:Carona){
    this.caronaProvider.deletar(carona).then(
      sucesso => console.log('carona deletada')
    )
    .catch(error => console.log('não foi deletada'));
  }
}
