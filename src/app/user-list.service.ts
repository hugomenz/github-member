import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MemberEntityApi {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private telefono: HttpClient) {}

  getMembers(organizacion: string): Observable<MemberEntityApi[]> {
    return this.telefono.get<MemberEntityApi[]>(
      `https://api.github.com/orgs/${organizacion}/members`
    );
  }

  getMember(id: string) {
    return this.telefono.get<MemberEntityApi[]>(
      `https://api.github.com/users/${id}`
    );
  }
}

/*  getOrganizationMembers(org: string): Observable<any[]> {
    const url = ;
    return this.http.get<any[]>(url);
  } */
