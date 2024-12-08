// item.model.ts
export interface Review {
    id: number;
    rating: number;
    name: string;
    email: string;
    title: string;
    review: string;
    reviewDate: string;
  }
  
  export interface Item {
    id: number;
    name: string;
    typeName: string;
    typeId: number;
    picture: string;
    createdDate: string;
    price: number;
    hasDiscount: boolean;
    discountPrice?: number;
    description: string;
    color: string;
    reviews: Review[];
  }
  