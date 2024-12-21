import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-ecommerce-card',
  templateUrl: './ecommerce-card.component.html',
  styleUrls: ['./ecommerce-card.component.scss']
})
export class EcommerceCardComponent implements OnInit {
  @Input() item:any;
  danger  = this.commonService.commonColors.danger;
  white  = this.commonService.commonColors.white;
  favourites: any[] = [];
  modalRef:NgbModalRef;
  selectedItem:any;
  constructor(private commonService:CommonService,
    private modalService:NgbModal,private router:Router
  ) { }

  ngOnInit(): void {
  }

  setItemAsFavourite(item) {
    let favouriteItems =JSON.parse(sessionStorage.getItem('favouriteItems') as string)? JSON.parse(sessionStorage.getItem('favouriteItems') as string) : [];
    let itemIndex = favouriteItems.findIndex(filterItem => filterItem.id === item.id);
    if(itemIndex  > -1) {
       favouriteItems.splice(itemIndex, 1);
    }
    else {
      item.isFavourite = true;
      favouriteItems.push(item);
    }
    sessionStorage.setItem('favouriteItems',JSON.stringify(favouriteItems));
    const event = new Event('itemOperation');
    window.dispatchEvent(event);
  }

  setItemToCart(item) {
    let addItemToCart =JSON.parse(sessionStorage.getItem('cartItems') as string)? JSON.parse(sessionStorage.getItem('cartItems') as string) : [];
    item.cartItems+=1;
    addItemToCart.push(item);
    sessionStorage.setItem('cartItems',JSON.stringify(addItemToCart));
    const event = new Event('itemOperation');
    window.dispatchEvent(event);
  }

  openItemDetails(template:TemplateRef<any>,item) {
    this.selectedItem=item;
    this.modalRef =  this.modalService.open(template,{
      animation: true,
      scrollable:true,
      backdrop: 'static',
      size:'xl'
    })
  }

  closeModal() {
    this.modalRef.close();
  }


  decrementItem(item) {
    item.cartItems-=1;
  //   this.totalPrice = 0;
  //   let findCartItemIndex = cartItems?.findIndex(cartItem=>cartItem.id === item.id);;
  //   let cartItem = cartItems?.find(cartItem=>cartItem.id === item.id);
  //   cartItem.cartItems = item.cartItems;
  //   cartItems[findCartItemIndex] = cartItem;
  //   sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  //  // cartItems = JSON.parse(sessionStorage.getItem('cartItems') as string);
  //   cartItems.map(cartItem=>{
  //       this.totalPrice = this.totalPrice + cartItem.cartItems*cartItem.price;
  //   })
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

  incrementItem(item) {
    item.cartItems+=1;
  //  // this.totalPrice = 0;
  //  let cartItems = JSON.parse(sessionStorage.getItem('cartItems') as string)? JSON.parse(sessionStorage.getItem('cartItems') as string) : [];
  //   let findCartItemIndex = cartItems?.findIndex(cartItem=>cartItem.id === item.id);;
  //   let cartItem = cartItems?.find(cartItem=>cartItem.id === item.id);
  //   cartItem.cartItems = item.cartItems;
  //   cartItems[findCartItemIndex] = cartItem;
  //   sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  goToProductDetails(item) {
    this.router.navigate(['/ecommerce/details/' + item.id]);
    this.closeModal();
  }

}
