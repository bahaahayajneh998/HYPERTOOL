import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { json } from 'body-parser';

@Component({
  selector: 'app-ecommerce-details',
  templateUrl: './ecommerce-details.component.html',
  styleUrls: ['./ecommerce-details.component.scss']
})
export class EcommerceDetailsComponent implements OnInit {
  productId:number;
  selectedProductDetails:any;
  currentTab = 'descriptions';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId =parseInt(params['id']);
      let ecommerceItem =JSON.parse(sessionStorage.getItem('ecommerceItems') as string);
      this.selectedProductDetails = ecommerceItem.find(item=>item.id === this.productId);
      console.log(typeof(this.productId),'productId');
    })
  }

  changeTab(tab) {
    this.currentTab = tab;
  }

  addItemToCart(item) {
    debugger;
    let addItemToCart =JSON.parse(sessionStorage.getItem('cartItems') as string)? JSON.parse(sessionStorage.getItem('cartItems') as string) : [];
    let findIndex = addItemToCart.findIndex(z=>z.id === item.id);
    if(findIndex > -1) {
     addItemToCart.splice(findIndex,1);
    }
  //  item.cartItems+=1;
    addItemToCart.push(item);
    sessionStorage.setItem('cartItems',JSON.stringify(addItemToCart));
    const event = new Event('itemOperation');
    window.dispatchEvent(event);
  }

  decrementItem(item) {
    item.cartItems-=1;
  }

  
  incrementItem(item) {
    item.cartItems+=1;
  }

}
