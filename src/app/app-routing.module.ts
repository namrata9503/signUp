import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '@app-components/sign-up/sign-up.component';
import { ThanksPageComponent } from '@app-components/thanks-page/thanks-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'thanks', component: ThanksPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
