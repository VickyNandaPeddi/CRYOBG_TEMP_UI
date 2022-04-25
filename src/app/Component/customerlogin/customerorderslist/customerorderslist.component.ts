import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from 'src/app/service/customerservice.service';

@Component({
  selector: "app-customerorderslist",
  templateUrl: "./customerorderslist.component.html",
  styleUrls: ["./customerorderslist.component.css"],
})
export class CustomerorderslistComponent implements OnInit {
  orderdetails: any;
  selectedCustomers: string;
  constructor(private customerservice: CustomerserviceService) {}

  ngOnInit(): void {
    this.customerservice.getOrderdetail().subscribe((data) => {
      // console.log(data);
      this.orderdetails = data;
      console.log("Customers data", this.orderdetails);
    });
  }
}
