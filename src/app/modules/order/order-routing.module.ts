import { ViewCompleteComponent } from './components/view-complete/view-complete.component';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes = [
  {
    path: '',
    component: PwHomeComponent,
  },
  {
    path: 'complete',
    component: ViewCompleteComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}