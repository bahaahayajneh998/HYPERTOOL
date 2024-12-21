import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  favouriteItems: any[] = [];
  cartItems: any[] = [];
  items: any[] = [];
  isCartOpen: boolean = false;
  totalPrice: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.favouriteItems = JSON.parse(
      sessionStorage.getItem('favouriteItems') as string
    );
    this.items = JSON.parse(sessionStorage.getItem('ecommerceItems') as string);
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') as string);

    window.addEventListener('itemOperation', () => {
      this.favouriteItems = JSON.parse(
        sessionStorage.getItem('favouriteItems') as string
      );
      this.items = JSON.parse(
        sessionStorage.getItem('ecommerceItems') as string
      );
      this.cartItems = JSON.parse(
        sessionStorage.getItem('cartItems') as string
      );

      this.items.forEach((item) => {
        let findItem = this.favouriteItems?.find((f) => f.id === item.id);
        item.isFavourite = findItem ? true : false;
      });

      this.items.forEach((item) => {
        let findItem = this.cartItems?.find((f) => f.id === item.id);
        item.cartItems = findItem ? findItem?.cartItems : 0;
      });
      
      sessionStorage.setItem('ecommerceItems', JSON.stringify(this.items));
    });
  }

  openCartModal() {
    this.cartItems?.map((item) => {
      this.totalPrice += (item.cartItems*item.price);
    });
    this.isCartOpen = true;
  }

  closeCartModal() {
    this.isCartOpen = false;
  }

  chnageCountItem(event, item) {}

  decrementItem(item) {
    item.cartItems-=1;
    this.totalPrice = 0;
    let findCartItemIndex = this.cartItems?.findIndex(cartItem=>cartItem.id === item.id);;
    let cartItem = this.cartItems?.find(cartItem=>cartItem.id === item.id);
    cartItem.cartItems = item.cartItems;
    this.cartItems[findCartItemIndex] = cartItem;
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
   // this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') as string);
    this.cartItems.map(cartItem=>{
        this.totalPrice = this.totalPrice + cartItem.cartItems*cartItem.price;
    })
  }

  incrementItem(item) {
    item.cartItems+=1;
    this.totalPrice = 0;
    let findCartItemIndex = this.cartItems?.findIndex(cartItem=>cartItem.id === item.id);;
    let cartItem = this.cartItems?.find(cartItem=>cartItem.id === item.id);
    cartItem.cartItems = item.cartItems;
    this.cartItems[findCartItemIndex] = cartItem;
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
   // this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') as string);
    this.cartItems.map(cartItem=>{
        this.totalPrice = this.totalPrice + cartItem.cartItems*cartItem.price;
    })
  }


  removeItemFromCart(item) {
    this.totalPrice = 0;
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems') as string);

    cartItems = cartItems.filter(x=>x.id !==item.id);
    cartItems.map(item=>{
      this.totalPrice += item.price;
    })

    sessionStorage.setItem('cartItems',JSON.stringify(cartItems));

    const event = new Event('itemOperation');
    window.dispatchEvent(event);
  }
}
