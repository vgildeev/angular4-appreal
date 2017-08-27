// Native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// 3rd party modules
import { MdDialogModule } from '@angular/material';

// App components
import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { FavoriteUsersModalComponent } from './favorite-users-modal/favorite-users-modal.component';

// App services
import { SearchUsersService } from 'shared/services';


@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    FavoriteUsersModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    NoopAnimationsModule,
  ],
  entryComponents: [ FavoriteUsersModalComponent ],
  providers: [ SearchUsersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
