import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatusResponseModel } from 'src/models/statusresponse.model';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  model: StatusResponseModel = {
    message: 'Fake Server Message',
    lastChecked: '2021-11-15T20:15:41.640Z'
  }; // Comment added.


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<StatusResponseModel>(environment.apiUrl + 'status').subscribe(r => {
      this.model = r;
    });
  }

}
