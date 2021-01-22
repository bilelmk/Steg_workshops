import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  constructor(private toastController : ToastController) { }

  async presentToast(message : string , style : string) {
    const toast = await this.toastController.create({
      cssClass : style ,
      message: message ,
      duration: 2000
    });
    toast.present();
  }
}
