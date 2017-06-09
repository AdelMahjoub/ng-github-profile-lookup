import { 
  Component, 
  ViewChild, 
  ElementRef} from '@angular/core';

import { SearchTermService } from './../../shared/search-term.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /**
   * Input Search field reference
   */
  @ViewChild('searchField') searchField: ElementRef;

  constructor(private searchTermService: SearchTermService) {}

  /**
   * Emit the search term
   */
  emitSearchTerm(): void {
    let searchTerm = (<HTMLInputElement>this.searchField.nativeElement).value.trim()
    this.searchTermService.searchTermChanged.next(searchTerm);
  }

}
