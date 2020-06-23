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
    path: '',
    component: ViewWrapperComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./modules/menu/menu.module').then(mod => mod.MenuModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
