import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login-provider";
import {Credencial} from "../../models/credencial";
import {CaronasListPage} from "../caronas-list/caronas-list";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credencial:Credencial;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {}

  ionViewDidLoad() {
    this.credencial = new Credencial();
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => this.navCtrl.setRoot(CaronasListPage),
    )
    this.loginProvider.loginFalhaEventEmitty.subscribe(
      error => console.log(error)
    )
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  sair(){
    this.loginProvider.sair();
  }

  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }

}
