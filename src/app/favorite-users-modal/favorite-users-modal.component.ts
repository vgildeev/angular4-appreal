import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-favorite-users-modal',
  templateUrl: './favorite-users-modal.component.html',
  styleUrls: ['./favorite-users-modal.component.css']
})
export class FavoriteUsersModalComponent implements OnInit {

  constructor(public modalRef: MdDialogRef<FavoriteUsersModalComponent>) {}

  ngOnInit() {}
}
