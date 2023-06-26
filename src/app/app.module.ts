import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from '../components/game/game.component';
import { GameCoverComponent } from '../components/game-cover/game-cover.component';
import { LoadingScreenComponent } from '../components/loading-screen/loading-screen.component';
import { MainGameComponent } from '../components/main-game/main-game.component';
import { GameOptionsComponent } from '../components/game-options/game-options.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameCoverComponent,
    LoadingScreenComponent,
    MainGameComponent,
    GameOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSemanticModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
