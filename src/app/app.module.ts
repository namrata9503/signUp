import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostUserService } from './services/post-user.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, ThanksPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule
  ],
  providers: [PostUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
