import { Component, OnInit } from '@angular/core';
import { TrnOrderDetails } from 'src/app/Model/TrnOrderDetails';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  trnOrderDet: TrnOrderDetails[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get<TrnOrderDetails[]>(`${environment.backEndUrl}/UnregCust/order-list`)
    .subscribe(
      (data) => {
        this.trnOrderDet = data;
        // alert(this.trnOrderDet.length);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // this.isLoading = false;
      }
    );
  }

}
