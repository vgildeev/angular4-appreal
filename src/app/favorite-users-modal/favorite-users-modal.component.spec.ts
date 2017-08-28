import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDialog, MdDialogModule } from '@angular/material';

import { FavoriteUsersModalComponent } from './favorite-users-modal.component';

@NgModule({
  declarations: [FavoriteUsersModalComponent],
  imports: [
    MdDialogModule,
    BrowserModule,
    NoopAnimationsModule,
  ],
  entryComponents: [FavoriteUsersModalComponent],
  exports: [FavoriteUsersModalComponent],
})
class TestModule {}

describe('FavoriteUsersModalComponent', () => {
  let component: FavoriteUsersModalComponent;
  let fixture: ComponentFixture<FavoriteUsersModalComponent>;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    let dialogRef = dialog.open(FavoriteUsersModalComponent);

    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
