// Native
import { Component, OnInit, Input } from '@angular/core';

// 3rd party
import { MdDialog } from '@angular/material';

// App
import { SearchUsersService } from 'shared/services';
import { FavoriteUsersModalComponent } from 'app/favorite-users-modal/favorite-users-modal.component';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
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
      userDatils => {
        this.selectedUser = userDatils;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }

  openFavoriteUsersModal() {
    let modalRef = this.modal.open(FavoriteUsersModalComponent);
    modalRef.afterClosed().subscribe(result => {
      console.log('1111');
    });
  }
}
