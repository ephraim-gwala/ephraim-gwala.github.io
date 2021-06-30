import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
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
