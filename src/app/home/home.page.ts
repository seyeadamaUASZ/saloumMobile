import { Component, OnInit} from '@angular/core';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  compte:any;
  numeroCompte:any;
  solde:any;
  dateOuv:any;
  constructor(private manageS:ManageService) {}

  ngOnInit() {
    this.compteClient();
  }

  compteClient(){
    this.manageS.compteClient(localStorage.getItem("iduser"))
    .subscribe(res=>{
      console.log(res);
      this.compte=res;
      this.numeroCompte = res['numeroCompte'];
      this.solde = res['solde'];
      this.dateOuv = res['dateOuverture']
      localStorage.setItem('idcompte',res['id']);
    },err=>{
      console.log(err);
    });
  }

}
