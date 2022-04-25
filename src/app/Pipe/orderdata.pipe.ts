import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "orderdata",
})
export class OrderdataPipe implements PipeTransform {
  transform(order: any[], searchText: string): any {
    return order ? order.filter((item) => item.reqNo == searchText) : 0;
  }
}
