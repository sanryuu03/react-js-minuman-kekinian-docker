import { ReactNode } from "react";

export interface ContentTypes {
    content: ReactNode
}

export interface MenuTypes {
    id?:string,
    uuid?:string,
    name:string,
    description:string,
    ingredients:string,
    picture_path:string,
  }

export interface SizeTypes {
    id?:string,
    uuid?:string,
    name:string,
    size:string,
  }

export interface SelectTypes {
    value?:string,
    label?:string,
  }

export interface ProductPriceTypes {
    id?:string,
    uuid?:string,
    product_id:string,
    size_id:string,
    is_promo:boolean,
    price:number,
    name: string,
    size:string
  }
