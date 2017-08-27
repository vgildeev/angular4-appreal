// Native
import { Component, OnInit, Input } from '@angular/core';

// 3rd party
import { MdDialog } from '@angular/material';

// App
import { SearchUsersService } from 'shared/services';
import { FavoriteUsersModalComponent } from 'app/favorite-users-modal/favorite-users-modal.component';
import { User } from 'shared/models';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {
  place: string;
  language: string;
  results: any[] = [];
  selected: boolean = false;
  selectedUser: any;
  error_text: string = "";

  constructor(
    private searchService: SearchUsersService,
    public modal: MdDialog,
  ) {}

  ngOnInit() {}

  search(place: string, language: string) {
    this.selected = false;
    this.error_text = "";
    if (place || language) {
      this.place = place;
      this.language = language;
      this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Sorry! No Users found. Try again";
          console.error(error);
        }
      )
    }
  }

  getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      (userDatils: User) => {
        this.selectedUser = userDatils;
        this.selected = true;
        this.searchService.saveFavoriteUser(userDatils);
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }

  openFavoriteUsersModal() {
    let favoriteUsers = this.searchService.getFavoriteUsers();
    let modalRef = this.modal.open(FavoriteUsersModalComponent, {
      panelClass: 'modal-lg',
      data: favoriteUsers,
    });
  }
}
