import { ViewWrapperComponent } from './components/view-wrapper/view-wrapper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu'
  },
  {
    path: 'mycoffee',
    pathMatch: 'full',
    redirectTo: 'mycoffee/order'
  },
  {
    path: '',
    component: ViewWrapperComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./modules/menu/menu.module').then(mod => mod.MenuModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(mod => mod.CartModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./modules/order/order.module').then(mod => mod.OrderModule)
      },
      {
        path: 'mycoffee/:tabId',
        loadChildren: () => import('./modules/mycoffee/mycoffee.module').then(mod => mod.MycoffeeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
