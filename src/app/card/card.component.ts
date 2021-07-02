import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserService } from './../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.5s 0.5s ease-in')]),
      transition('* => void', [animate('0.5s ease-in')])
    ])
  ],
})
export class CardComponent implements OnInit, PipeTransform {
  @Input() user: any;
  @Output('fetchPosts') fetchPosts: EventEmitter<any> = new EventEmitter();

  titleValue: any;
  subTitle: any;
  result: any;
  img: any;

  constructor(private userService: UserService, private datePipe: DatePipe) {
    this.userService.getUser().subscribe((user: any) => {
      this.result = user.results[0];
      this.subTitle = "Hi, My name is";
      this.titleValue = this.result.name.first + ' ' + this.result.name.last;
      this.img = this.result.picture.large;
    }, (err) => {
      console.log('Error, Please reload...');
    });
  }

  ngOnInit(): void {
  }

  transform(value: any, ...args: any[]): any {
    return this.datePipe.transform(value, 'dd/MM/yyyy');
  }

  changeTitle(title: any, val: any) {
    this.titleValue = val;
    this.subTitle = title;
  }
}
