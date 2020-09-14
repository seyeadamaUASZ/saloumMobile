import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  loadData={lastName:'',firstName:'',email:'',telephone:'',codeAccess:'',adresse:''};
  constructor(public nav:NavController, 
    public loadingController:LoadingController,
    public router:Router,
    private toastController: ToastController,
    private alertCtrl: AlertController,
    private authS:AuthService) { }

  ngOnInit() {
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

  async gotoSignup(){
    const loading = await this.loadingController.create({
      message:'Please Wait....',
      duration: 3000
    });
    await loading.present();
    await this.authS.signup(this.loadData)
    .subscribe(res=>{
      console.log(res);
      localStorage.setItem('idclient',res.id);
      loading.dismiss();
      this.presentAlert("Compte créé avec succés !!!!");
      this.router.navigate(['validation']);
    },err=>{
      loading.dismiss();
      console.log(err);
      this.presentAlert("Erreur de creation Compte, Réessayer !!!!!!")
    })
  }

}
