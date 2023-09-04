import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{ path: '', component: ProductComponent },
                         {path:'create-product',component:CreateProductComponent},
                        {path:'product-list',component:ProductListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
