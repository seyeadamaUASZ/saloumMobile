import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/menu/home',
    pathMatch:'full'
  },
  {
    path: '',
    component: MenuPage,
   children:[
   {path: 'home',
   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {path: 'depot',
  loadChildren: () => import('../depot/depot.module').then( m => m.DepotPageModule)
 },
  {path: 'retrait',
  loadChildren: () => import('../retrait/retrait.module').then( m => m.RetraitPageModule)
},
  {path: 'virement',
  loadChildren: () => import('../virement/virement.module').then( m => m.VirementPageModule)
}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
