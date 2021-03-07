import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteveScrollPageRoutingModule } from './infiniteve-scroll-routing.module';

import { InfiniteveScrollPage } from './infiniteve-scroll.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteveScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfiniteveScrollPage]
})
export class InfiniteveScrollPageModule {}
