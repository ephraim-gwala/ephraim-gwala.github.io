import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user: any;
  public data: Array<{name: string, dob: any, email: string, phone: string, address: string, password: string, picture: string}> = [];
  randomUser: any;

  constructor(private userService: UserService, private datePipe: DatePipe) {
    this.userService.getUser().subscribe((user: any) => {
      this.user = user.results[0];

      let name = this.user.name.first + ' ' + this.user.name.last;
      let streetName = this.user.location.street.number + ' ' + this.user.location.street.name;

      let dob = new Date(this.user.dob.date);
      let birthDay = this.datePipe.transform(dob,"dd/MM/yyyy");

      this.data.push({name: name, dob: birthDay, email: this.user.email, phone: this.user.phone, address: streetName, password: this.user.login.password, picture: this.user.picture.large});
      for(let i=0; i<this.data.length; i++){
        this.randomUser = this.data[i]; //use i instead of 0
      }
    }, (err) => {
      console.log('Error, Please reload...');
    });


  }

  ngOnInit(): void {

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
