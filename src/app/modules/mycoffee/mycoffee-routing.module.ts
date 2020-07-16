import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PwDetailComponent } from './components/pw-detail/pw-detail.component';

const routes:Routes = [
  {
    path: '',
    component: PwHomeComponent,
  },
  {
    path: 'detail/:orderId',
    component: PwDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycoffeeRoutingModule {}