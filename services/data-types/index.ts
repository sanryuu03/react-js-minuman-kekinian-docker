import { ReactNode } from "react";

export interface ContentTypes {
    content: ReactNode
}

export interface MenuTypes {
    id?:string,
    uuid?:string,
    name:string,
    description:string,
    ingredients:string
  }

export interface SizeTypes {
    id?:string,
    uuid?:string,
    name:string,
    size:string,
  }
