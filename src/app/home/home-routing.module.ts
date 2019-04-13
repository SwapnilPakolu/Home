import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { SettingsComponent } from "./settings/settings.component";
import { InterLayoutComponent } from "./inter-layout/inter-layout.component";

const routes: Routes = [
  {
    path: "",
    component: InterLayoutComponent,
    children: [
      { path: "about", component: AboutComponent },
      { path: "settings", component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
