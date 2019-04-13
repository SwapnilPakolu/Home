import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from './about/about.component';
import { InterLayoutComponent } from './inter-layout/inter-layout.component';
import { SettingsComponent } from './settings/settings.component';
import {MaterialModule} from '../material/material.module'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [AboutComponent, InterLayoutComponent, SettingsComponent]
})
export class HomeModule { 

}
