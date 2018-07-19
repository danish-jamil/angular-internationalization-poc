import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ToastrModule } from 'ngx-toastr';
import { TranslationService } from './translation.service';
import { TransUnitDirective } from './trans-unit.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    TransUnitDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
