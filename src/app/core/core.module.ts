import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { ProfileComponent } from './container/profile/profile.component';

import { SearchTermService } from './../shared/search-term.service';
import { GithubApiService } from './../shared/github-api.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    ProfileComponent
  ],
  declarations: [
    HeaderComponent,
    ContainerComponent,
    ProfileComponent
  ],
  providers: [
    GithubApiService,
    SearchTermService
  ],
})
export class CoreModule { }
