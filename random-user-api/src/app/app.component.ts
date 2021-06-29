import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.userService.getUser().subscribe((user: any) => {
    this.user = user.results[0];
    console.log('Successfully loaded...');
  }, (err) => {
    console.log('Error, Please reload...');
  });
  }
}
