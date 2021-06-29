import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faEnvelope, faMapMarkedAlt, faPhone, faDatabase} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  @Output('fetchPosts') fetchPosts: EventEmitter<any> = new EventEmitter();

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  constructor() { }

  ngOnInit(): void {
  }

}
