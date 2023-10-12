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
