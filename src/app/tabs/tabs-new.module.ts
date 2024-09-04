import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsNewRoutingModule } from './tabs-new-routing.module';
import { TabsPage } from './tabs.page';


@NgModule({
  declarations: [TabsPage],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    TabsNewRoutingModule
  ]
})
export class TabsNewModule { }
