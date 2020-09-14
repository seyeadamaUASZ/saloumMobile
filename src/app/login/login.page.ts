import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loadData={identifiant:'',codeAccess:''}
  constructor(public nav:NavController, 
    public loadingController:LoadingController,
    public router:Router,
    private toastController: ToastController,
    private alertCtrl: AlertController,
    private authS:AuthService) { }

  ngOnInit() {
  }

  gotoSign(){
    this.nav.navigateRoot("signup");
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

  async gotoLogin(){
    const loading = await this.loadingController.create({
      message:'Please Wait....',
      duration: 3000
    });
    await loading.present();
    await this.authS.login(this.loadData)
    .subscribe(res=>{
      console.log(res);
      if(res.status=='OK'){
        localStorage.setItem('iduser',res['user'].id);
        localStorage.setItem('nom',res['user'].lastName);
        localStorage.setItem('prenom',res['user'].firstName);
        localStorage.setItem('identifiant',res['user'].identifiant);
        
        loading.dismiss();
        this.router.navigate(['menu']);
      }else{
        loading.dismiss();
        this.presentAlert("Authentification invalide !!!!");
      }
    },(err)=>{
      console.log(err);
      this.presentAlert("Erreur d'authentification !!!")
      loading.dismiss();
    })
  }
  
  

}
