import { Product } from "./Product";
import { ShoppingCart } from "./ShoppingCart";

export interface ShoppingCartModel{
    
    // category_id:number;
    // color_id:number;
    // brand_id:number;
    //  description:string;
    // stock_quantity:number;
    cart_id:number
    product_name:string;
    product_price:number;
    product_id:number;
    number_of_product:number;
}