3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
import { MovieService, SearchType } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"]
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = "";
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
}
