import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',redirectTo:"/home",pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'consumer', loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule) }, 
 { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
 { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
