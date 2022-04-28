import { Component, OnInit } from "@angular/core";
import { CustomerserviceService } from "src/app/service/customerservice.service";

@Component({
  selector: "app-customerorderslist",
  templateUrl: "./customerorderslist.component.html",
  styleUrls: ["./customerorderslist.component.css"],
})
export class CustomerorderslistComponent implements OnInit {
  orderdetails: any;
  selectedCustomers: string;
  orderStatusvalue: any;
  orderStatus: string[] = ["Accept", "Request modification", "Not Accepted"];
  remarks: any;
  trnutrno: any;
  trndate: any;
  trnamount: any;
  trnpodet: any;
  constructor(private customerservice: CustomerserviceService) {}

  ngOnInit(): void {
    this.customerservice.getOrderdetail().subscribe((data) => {
      // console.log(data);
      this.orderdetails = data;
      console.log("Customers data", this.orderdetails);
    });
  }
  onChange(deviceValue: Event) {
    //@ts-ignore
    this.orderStatusvalue = deviceValue.target.value;
    console.log(this.orderStatusvalue);
  }
  submitOrderstatus() {
    alert(this.selectedCustomers);
    if (this.orderStatusvalue == "Accept") {
      // this.customerservice
      //   .updateStatusOfOrderdetails(
      //     this.selectedCustomers,
      //     this.orderStatusvalue,
      //     this.remarks
      //   )
      //   .subscribe((data) => alert(data));
      this.customerservice
        .updateAcceptedDetails(
          this.selectedCustomers,
          this.orderStatusvalue,
          this.remarks,
          this.trnutrno,
          this.trndate,
          this.trnamount,
          this.trnpodet
        )
        .subscribe((data) => alert(data));
      // alert("PAyment screen comes");
    }
    if (this.orderStatusvalue == "Request modification") {
      this.customerservice
        .updateStatusOfOrderdetails(
          this.selectedCustomers,
          this.orderStatusvalue,
          this.remarks
        )
        .subscribe((data) => alert(data));
      alert("request modification send to  Employee");
    }
    if (this.orderStatusvalue == "Not Accepted") {
      this.customerservice
        .updateStatusOfOrderdetails(
          this.selectedCustomers,
          this.orderStatusvalue,
          ""
        )
        .subscribe((data) => alert(data));
      alert("Order not accepted");
    }
  }
}
