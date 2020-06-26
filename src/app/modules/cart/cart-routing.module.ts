import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes = [
  {
    path: '',
    component: PwHomeComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}