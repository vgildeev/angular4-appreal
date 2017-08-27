import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteUsersModalComponent } from './favorite-users-modal.component';

describe('FavoriteUsersModalComponent', () => {
  let component: FavoriteUsersModalComponent;
  let fixture: ComponentFixture<FavoriteUsersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteUsersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
