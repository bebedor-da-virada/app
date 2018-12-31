import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../pages/info/info.component';
import { RankingComponent } from '../pages/ranking/ranking.component';


const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'ranking', component: RankingComponent },
  // { path: '', component: HomeComponent }
];

@NgModule({
  exports: [RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
