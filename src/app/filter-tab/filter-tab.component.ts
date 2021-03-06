import { Component, Input, OnInit } from '@angular/core';
import { OrderDataService } from 'src/services/order-data.service';


@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css']
})
export class FilterTabComponent implements OnInit {

  //material field
  panelOpenState = false;

  //array recived from dashboard
  @Input() orderedArray: any[] = []

  // service that order the receivede array
  constructor(private orderData: OrderDataService) { }

  ngOnInit(): void {
  }

  // order from A-Z
  ascending(){
    console.log(this.orderedArray)
    this.orderData.orderAZ(this.orderedArray)
  }

  //order from Z-A
  descending(){
    this.orderData.orderZA(this.orderedArray)
  }

  // order from temp max to temp min
  maxTemp(){
    this.orderData.orderHottest(this.orderedArray)
  }

  // order from temp min to temp max
  minTemp(){
    this.orderData.orderColdest(this.orderedArray)
  }




}
