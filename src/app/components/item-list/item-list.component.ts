import { Component, OnInit } from '@angular/core';
import { ResourceModel } from 'src/models/resource.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: ResourceModel[] = [
    { id: '1', title: 'Changing your Oil', suggestedBy: 'Earl', author: 'Joe', format: 'Youtube', link: 'https://youtube.com/939' },
    { id: '99', title: 'Browsing the Web', author: 'Bill', format: 'Website', watchedOn: '2021-11-16T19:16:28.906Z' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
