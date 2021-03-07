import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteveScrollPage } from './infiniteve-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniteveScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteveScrollPageRoutingModule {}
