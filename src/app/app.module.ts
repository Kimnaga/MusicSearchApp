import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { SearchComponent } from './search/search.component';
import {Routes,RouterModule} from '@angular/router';
import {LocationStrategy,HashLocationStrategy,APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: SearchComponent}
    ])
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
