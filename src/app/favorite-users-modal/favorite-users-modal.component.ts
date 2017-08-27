import { Component, Inject, OnInit } from '@angular/core';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-favorite-users-modal',
  templateUrl: './favorite-users-modal.component.html',
  styleUrls: ['./favorite-users-modal.component.scss']
})
export class FavoriteUsersModalComponent implements OnInit {

  constructor(
    public modalRef: MdDialogRef<FavoriteUsersModalComponent>,
    @Inject(MD_DIALOG_DATA) public favoriteUsers: any,
  ) {}

  ngOnInit() {}
}
