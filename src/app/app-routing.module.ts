import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: "", component: ProductList },
  // { path: "products/:productId", component: ProductDetail },
  // { path: 'cart', component: CartComponent },
  // { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
