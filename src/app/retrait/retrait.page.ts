import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  loadData = {codeRetrait:'',codeAccess:'',identifiant:''};
  
  constructor(public nav:NavController, 
    public loadingController:LoadingController,
    public router:Router,
    private toastController: ToastController,
    private alertCtrl: AlertController,
    private manageS:ManageService) { }

  ngOnInit() {
  }

  //docusearch

  async validate(){
    const loading = await this.loadingController.create({
      message:'Please Wait....',
      duration: 3000
    });
    await loading.present();
    this.loadData.identifiant=localStorage.getItem('identifiant')
    await this.manageS.validate(this.loadData)
    .subscribe(res=>{
      console.log(res);
      loading.dismiss();
      this.presentAlert("Operation de retrait effectuée avec succés !!!!");
    },err=>{
      console.log(err);
      this.presentToast("Erreur sur les saisies.....");
    })
  }

  async presentAlert(mgs) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: mgs,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
