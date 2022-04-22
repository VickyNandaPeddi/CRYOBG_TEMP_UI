import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';

import { CustomerserviceService } from './../../../service/customerservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MstModel } from 'src/app/Model/MstModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orderdata',
  templateUrl: './orderdata.component.html',
  styleUrls: ['./orderdata.component.css'],
})
export class OrderdataComponent implements OnInit {
  formdata: FormGroup;
  reqno: any;
  orderdetails: any;
  response: any;
  mstModel: MstModel[];
  isLoading: boolean = true;
  //@ts-ignore
  formdata: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private customerservice: CustomerserviceService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('reqnbr');
      this.reqno = id;
      // alert(this.reqno)

      this.getOrderedDetails(this.reqno);
    });

    this.formdata = this.fb.group({
      baseprice: ['', Validators.required],
      expectedeliverydate: ['', Validators.required],
      calldate: ['', Validators.required],
      confmodel: ['', Validators.required],
      confquantity: ['', Validators.required],
    });
    this.http
      .get<MstModel[]>(`${environment.backEndUrl}/generic/model-list`)
      .subscribe(
        (data) => {
          this.mstModel = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  getOrderedDetails(orderno: any) {
    this.customerservice.getOneOrderdetail(orderno).subscribe((data) => {
      this.orderdetails = data;

      console.log(data);
    });
  }

  UpdateOrder() {
    alert('Update order');
    console.log(this.formdata.value);
    this.customerservice
      .updateOrder(this.reqno, this.formdata.value)
      .subscribe((data) => {
        this.response = data.message;

        alert(this.response);
        // this.router.navigate(["/update/", { reqnbr: this.reqno }]);
      });
  }
}
