import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    {
      title: 'Compte',
      url: '/menu/home',
      icon: 'wallet-outline'
    },
    {
      title: 'Retrait',
      url: '/menu/retrait',
      icon: 'cash-outline'
    },
    {
      title: 'Depot',
      url: '/menu/depot',
      icon: 'wallet-outline'
    },
    {
      title: 'Virement',
      url: '/menu/virement',
      icon: 'trail-sign-outline'
    }
  ]; 

  nom:any= localStorage.getItem('nom');
  prenom:any=localStorage.getItem('prenom');
  constructor() { }

  ngOnInit() {
  }

}
