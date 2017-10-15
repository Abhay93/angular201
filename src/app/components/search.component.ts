import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export class SearchComponent {
    searchForm = new FormGroup({
        searchControl : new FormControl()
      })
    
}