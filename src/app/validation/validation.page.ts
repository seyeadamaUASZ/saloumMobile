import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {
  loadData = {codeOtp:'',idclient:''};
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



  async gotoValidate(){
    const loading = await this.loadingController.create({
      message:'Please Wait....',
      duration: 3000
    });
    await loading.present(); 
    this.loadData.idclient = localStorage.getItem('idclient');
    this.authS.validation(this.loadData)
     .subscribe(res=>{
      if(res.status=='OK'){
        loading.dismiss();
        this.presentAlert(res['message']);
        this.router.navigate(['login']);

      }else{
        loading.dismiss();
        this.presentToast("Validation invalide !!!!");
      }
    },err=>{
      console.log(err);
    })
  }

}
