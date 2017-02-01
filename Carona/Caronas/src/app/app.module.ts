import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {LoginProvider} from '../providers/login-provider';
import {RegistrarPage} from '../pages/registrar/registrar';
import {CaronasListPage} from "../pages/caronas-list/caronas-list";
import {CaronasAddPage} from "../pages/caronas-add/caronas-add";
import {CaronasListItem} from "../components/caronas-list-item/caronas-list-item";
import {CaronaProvider} from "../providers/carona-provider";
import {LovProvider} from "../providers/lov-provider";

import firebase from 'firebase';

const firebaseconfig = {
    apiKey: "AIzaSyAL1ZLxBz4XhkwGl24gC7ty40qwzPGM0rc",
    authDomain: "caronas-a79df.firebaseapp.com",
    databaseURL: "https://caronas-a79df.firebaseio.com",
    storageBucket: "caronas-a79df.appspot.com",
    messagingSenderId: "433084740203"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrarPage,
    CaronasListPage,
    CaronasListItem,
    CaronasAddPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrarPage,
    CaronasListPage,
    CaronasListItem,
    CaronasAddPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LoginProvider, CaronaProvider,
               LovProvider]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseconfig);

  }

}
