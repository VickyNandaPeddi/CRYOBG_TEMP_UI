import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CustomerserviceService {
  constructor(public http: HttpClient) {}

  createEmployee(customer: Object): Observable<Object> {
    return this.http.post<Response>(
      `${environment.backEndUrl}/customer/customer`,
      customer
    );
  }

  // public saveCustomer(customer: Customer): any {
  //   return this.http.post("http://localhost:2001/customer/customer", customer);
  // }

  createOrder(order: any): Observable<any> {
    return this.http.post(
      environment.backEndUrl + "/UnregCust/createOrder",
      order,
      { responseType: "json" }
    );
  }

  getOneOrderdetail(reqno: any): Observable<any> {
    return this.http.get(
      environment.backEndUrl + "/UnregCust/order-list/" + reqno,
      { responseType: "json" }
    );
  }
  getOrderdetail(): Observable<any> {
    return this.http.get(environment.backEndUrl + "/UnregCust/order-list/", {
      responseType: "json",
    });
  }
  updateOrder(reqno: any, order: any): Observable<any> {
    return this.http.put(
      environment.backEndUrl + "/UnregCust/update/" + reqno,
      order,
      { responseType: "json" }
    );
  }

  updateStatusOfOrderdetails(reqno: any, status: any, remarks: any) {
    return this.http.get(
      environment.backEndUrl +
        "/UnregCust/updatestatus/" +
        status +
        "/" +
        remarks,

      { responseType: "json" }
    );
  }
  // /updateaccept/{trnutrno}/{trndate}/{trnamount}/{trnpodet}"
  updateAcceptedDetails(
    reqno: any,
    trnutrno: any,
    trndate: any,
    trnamount: any,
    trnpodet: any,
    status: any,
    remarks: any
  ) {
    return this.http.get(
      environment.backEndUrl +
        "/UnregCust/updateaccept/" +
        reqno +
        "/" +
        status +
        "/" +
        remarks +
        "/" +
        trnutrno +
        "/" +
        trndate +
        "/" +
        trnamount +
        "/" +
        trnpodet,

      { responseType: "json" }
    );
  }
}
