import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'thanks', component: ThanksPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
