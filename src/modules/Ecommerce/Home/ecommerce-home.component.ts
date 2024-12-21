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
  bestFurnitureSellersItems: any[] = [];
  constructor(private ecommerceItemService: EcommerceItemService) {}

  ngOnInit(): void {
    this.getCheckItems();
  }

  // for (const [id, name] of Object.entries(CategoryTypeMap)) {
  //   console.log(`ID: ${id}, Name: ${name}`);
  // }

//   categories = Object.entries(CategoryTypeMap); // Key-value pairs

// <select>
//   <option *ngFor="let [id, name] of categories" [value]="id">{{ name }}</option>
// </select>


getCheckItems() {
  if(this.ecommerceItemService.checkIfItemExistsInLocalStorage()) {
    this.items =JSON.parse(sessionStorage.getItem('ecommerceItems') as string);
    this.items.map(item=>{
      if(item.itemsBought >= 100) {
        this.bestSellersItems.push(item);
      }
  
      if(item.itemsBought >= 250) {
        this.bestFurnitureSellersItems.push(item);
      }
    })
  }
  else {
this.getItems();
  }

}
  getItems() {
    this.ecommerceItemService.getItems().subscribe((data) => {
      this.bestSellersItems = []
      this.items = data;


      this.items.map(item=>{
        if(item.itemsBought >= 100) {
          this.bestSellersItems.push(item);
        }
    
        if(item.itemsBought >= 250) {
          this.bestFurnitureSellersItems.push(item);
        }
      })
      sessionStorage.setItem('ecommerceItems',JSON.stringify(this.items))
    })

  }

}
