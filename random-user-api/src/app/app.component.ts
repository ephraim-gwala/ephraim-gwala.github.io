import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http
      .get('https://randomuser.me/api/')
      .subscribe(posts => {
        // ...
        console.log(posts);
      });
  }
}
