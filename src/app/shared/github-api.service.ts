import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubApiService {
  
  /**
   * Github api entry point
   */
  baseUrl = 'https://api.github.com';

  constructor(private http: Http) { }
  
  /**
   * Get username github profile
   * @param username 
   */
  getProfile(username: string): Observable<Response> {
    return this.http.get(`${this.baseUrl}/users/${username}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  /**
   * 
   * @param username Get username github repos
   */
  getRepos(username: string): Observable<Response> {
    return this.http.get(`${this.baseUrl}/users/${username}/repos`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

}