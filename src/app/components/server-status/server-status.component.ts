import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusResponseModel } from 'src/models/statusresponse.model';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  // Async Pipe (eg.. | async) "Subscribe to this observable and update the ui with the data over time"
  model$!: Observable<StatusResponseModel>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.model$ = this.http.get<StatusResponseModel>(environment.apiUrl + 'status');
  }

}
