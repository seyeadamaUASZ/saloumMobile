import { Component, OnInit } from '@angular/core';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  operations:any;
  constructor(private manage:ManageService) { }

  ngOnInit() {
    this.allOperations();
  }

  allOperations(){
    let id = localStorage.getItem('idcompte');
    this.manage.listOperations(id).subscribe
    (res=>{
      this.operations=res;
    },err=>{
      console.log(err);
    })
  }

}
