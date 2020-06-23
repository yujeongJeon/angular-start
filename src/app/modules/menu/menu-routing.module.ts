import { PwDetailComponent } from './components/pw-detail/pw-detail.component';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes = [
  {
    path: '',
    component: PwHomeComponent,
  },
  {
    path: 'detail/:productId',
    component: PwDetailComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}