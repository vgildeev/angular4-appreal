import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SearchUsersService } from './search-users.service';
import { User } from '../models';

const usersMock: User[] = [
  {
    avatar_url : "https://avatars0.githubusercontent.com/u/13451015?v=4",
    bio : null,
    blog : "http://bitbucket.org/akorn",
    company : null,
    created_at : "2015-07-22T11:40:02Z",
    email : null,
    events_url : "https://api.github.com/users/akornatskyy/events{/privacy}",
    followers : 9,
    followers_url : "https://api.github.com/users/akornatskyy/followers",
    following : 0,
    following_url : "https://api.github.com/users/akornatskyy/following{/other_user}",
    gists_url : "https://api.github.com/users/akornatskyy/gists{/gist_id}",
    gravatar_id : "",
    hireable : true,
    html_url : "https://github.com/akornatskyy",
    id : 13451015,
    location : "Lviv, Ukraine",
    login : "akornatskyy",
    name : "Andriy Kornatskyy",
    organizations_url : "https://api.github.com/users/akornatskyy/orgs",
    public_gists : 6,
    public_repos : 15,
    received_events_url : "https://api.github.com/users/akornatskyy/received_events",
    repos_url : "https://api.github.com/users/akornatskyy/repos",
    site_admin : false,
    starred_url : "https://api.github.com/users/akornatskyy/starred{/owner}{/repo}",
    subscriptions_url : "https://api.github.com/users/akornatskyy/subscriptions",
    type : "User",
    updated_at : "2017-08-21T13:20:56Z",
    url : "https://api.github.com/users/akornatskyy",
  }
];

describe('SearchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [SearchUsersService]
    });

    localStorage.clear();
  });

  it('should be created', inject([SearchUsersService], (service: SearchUsersService) => {
    expect(service).toBeTruthy();
  }));

  it('#getFavoriteUsers should return favorite users', inject([SearchUsersService], (service: SearchUsersService) => {
    expect(service.getFavoriteUsers()).toEqual([]);
    localStorage.setItem('favorite-users', JSON.stringify(usersMock));
    expect(service.getFavoriteUsers()).toEqual(usersMock);
  }));
});
