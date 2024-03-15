import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(value: string) {
    // Trim the input and check if it's not an empty string
    let trimmedValue = value.trim();
    if (trimmedValue) {
      console.log(`value=${trimmedValue}`);
      this.router.navigateByUrl(`/search/${trimmedValue}`);
    }
  }
}
