import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Carona } from "../models/carona";
import { LoginProvider } from "./login-provider";
import firebase from 'firebase';


@Injectable()
export class CaronaProvider {

  reference;

  constructor(public http: Http,
              public loginProvider: LoginProvider) {
    this.initialize();
  }
  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/caronas/');
  }

  save(carona:Carona){
    let refKey;
    //update
    if(carona.keyReference != undefined){
      refKey = carona.keyReference;
    }else{
      //insert
      refKey = this.reference.push().key;
      carona.keyReference = refKey;
    }
    this.reference.child(refKey).update(carona);
  }

  deletar(carona:Carona):any{
    return this.reference.child(carona.keyReference).remove();
  }
}
