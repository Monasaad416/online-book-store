
export type TCartItems = {
    _id:string;
    customer:string;
    items:{book:string;quantity:number;_id:string}[];
    total:number;
}