import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Carona } from "../../models/carona";
import {LovProvider} from "../../providers/lov-provider";
import {CaronaProvider} from "../../providers/carona-provider";

//aula 7

@Component({
  selector: 'page-caronas-add',
  templateUrl: 'caronas-add.html'
})
export class CaronasAddPage {

  carona:Carona;
  //caronaForm;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public caronasProvider: CaronaProvider,
              public ViewCtrl : ViewController,
              //public fb: FormBuilder,
              public lovProvider:LovProvider) {
                this.carona = new Carona();
                this.initialize();
              }

  private initialize(){
    // this.caronaForm = this.fb.group({
    //   'titulo' :['',Validators.required]
    // })
  }

  ionViewDidLoad() {
    this.carona = this.navParams.get('carona');
    if(!this.carona){
      this.carona = new Carona();
    }
  }

  salvarCarona(){
    this.caronasProvider.save(this.carona);
    this.ViewCtrl.dismiss();
  }

}
