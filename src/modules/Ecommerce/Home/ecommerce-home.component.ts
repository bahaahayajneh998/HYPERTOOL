import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/ecommerceItem';
import { EcommerceItemService } from 'src/services/ecommerceData.service';

@Component({
  selector: 'app-ecommerce-home',
  templateUrl: './ecommerce-home.component.html',
  styleUrls: ['./ecommerce-home.component.scss']
})
export class EcommerceHomeComponent implements OnInit {

  items: any[] = [];
  bestSellersItems: any[] = [];
  constructor(private ecommerceItemService: EcommerceItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  // for (const [id, name] of Object.entries(CategoryTypeMap)) {
  //   console.log(`ID: ${id}, Name: ${name}`);
  // }

//   categories = Object.entries(CategoryTypeMap); // Key-value pairs

// <select>
//   <option *ngFor="let [id, name] of categories" [value]="id">{{ name }}</option>
// </select>

  getItems() {
    this.ecommerceItemService.getItems().subscribe((data) => {
      this.bestSellersItems = []
      this.items = data;
      this.items.map(item=>{
        if(item.itemsBought >= 100) {
          this.bestSellersItems.push(item);
        }
      })
    })

  }

}
