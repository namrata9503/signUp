import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '@app-components/app.component';
import { PostUserService } from '@app-services/post-user.service';
import { SignUpComponent } from '@app-components/sign-up/sign-up.component';
import { ThanksPageComponent } from '@app-components/thanks-page/thanks-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, SignUpComponent, ThanksPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
  ],
  providers: [PostUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
