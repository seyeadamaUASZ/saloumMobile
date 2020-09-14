import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.page.html',
  styleUrls: ['./virement.page.scss'],
})
export class VirementPage implements OnInit {
  loadData = {telephone:'',montantVire:'',idClient:''};

  constructor(public nav:NavController, 
    public loadingController:LoadingController,
    public router:Router,
    private toastController: ToastController,
    private alertCtrl: AlertController,
    private manageS:ManageService) { }

  ngOnInit() {
  }

  async virement(){
    const loading = await this.loadingController.create({
      message:'Please Wait....',
      duration: 3000
    });
    await loading.present();
    this.loadData.idClient= localStorage.getItem('iduser');
    this.manageS.virement(this.loadData)
    .subscribe(res=>{
       console.log(res);
       loading.dismiss();
       if(res['status']=='OK'){
         this.presentAlert(res['message']);
       }else{
          this.presentToast(res['message']);
       }
      
    },err=>{
      console.log(err);
      this.presentToast("Erreur sur l'operation virement !!!!");
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
