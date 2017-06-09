import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SearchTermService {

  searchTermChanged = new Subject<string>();

}