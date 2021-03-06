import { 
  Component, 
  OnInit, 
  OnDestroy } from '@angular/core';

import { Subscription } from "rxjs/Subscription";

import { SearchTermService } from './../../shared/search-term.service';
import { GithubApiService } from './../../shared/github-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  profile: any;      // username(from search field) github profile
  repos: any;        // username(from search field) github repos
  found = false;
  previousTerm = ''; // previous searched term

  profileSubscription: Subscription;   
  searchTermSubscription: Subscription;

  constructor(
    private profileService: GithubApiService,
    private searchTermService: SearchTermService) { }

  ngOnInit() {
    this.update();
  }

  ngOnDestroy() {
    if(this.searchTermSubscription) this.searchTermSubscription.unsubscribe();
    if(this.profileSubscription) this.profileSubscription.unsubscribe();
  }

  /**
   * Listen to incoming search term and update profile
   */
  update(): void {
    this.searchTermSubscription = this.searchTermService.searchTermChanged
      .subscribe(
        (term: string) => {
          let searchTerm = term.replace(' ', '');
          if( searchTerm !== '' && this.previousTerm !== searchTerm) {
            this.previousTerm = searchTerm;
            this.updateProfile(searchTerm);
          }
        }
      )
  }

  /**
   * update profile, 
   * @param term 
   */
  updateProfile(term: string): void {
    this.profileSubscription = this.profileService.getProfile(term)
      .subscribe(
        (data: any) => {
          this.profile = false;
          this.found = true;
          // - workaround - 
          // set profile to false and delay by 10ms 
          // to trigger animation in profile.component
          setTimeout(() => {
            this.profile = data;
            setTimeout(() => {
              this.updateRepos(term);
            }, 10)  
          }, 10);
        },
        (error: Response) => {
          this.profile = false;
          this.found = false;
        }
      )
  }

  /**
   * update repos
   * @param term 
   */
  updateRepos(term: string): void {
  this.profileSubscription = this.profileService.getRepos(term)
    .subscribe(
      (data: any) => {
        this.repos = false
        this.repos = data;
      },
      (error: Response) => {
       
      }
    )
  }

}
