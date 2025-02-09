
export type TCartItems = {
    _id:string;
    items:{book:string;quantity:number,_id?:string}[];
    total:number;
    productsInfo:{
        book: string;
        name: string;
        price: number;
        quantity?: number;
        _id: string;
    }[];
    customer:string;
}