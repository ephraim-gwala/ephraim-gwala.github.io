import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';
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
export class CardComponent implements OnInit, OnChanges, PipeTransform {
  @Input() user: any;
  @Output('fetchPosts') fetchPosts: EventEmitter<any> = new EventEmitter();

  titleValue: any;
  subTitle: any;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.subTitle = "Hi, My name is";
    this.titleValue = this.user.name;
// console.log(this.user);
  }

  transform(value: any, ...args: any[]): any {
    return this.datePipe.transform(value, 'dd/MM/yyyy');
  }

  changeTitle(title: any, val: any) {
    this.titleValue = val;
    this.subTitle = title;
  }

}
