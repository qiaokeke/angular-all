import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const router:Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
