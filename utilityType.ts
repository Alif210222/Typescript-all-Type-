// utility type 

type Product = {
     id:number;
     name:string;
     price:string;
     stock:number;
     color ?:string;
}

type ProductSummary = Pick<Product,"id"|"name"|"price">

type ProductWithOutStock = Omit<Product,"stock">

type ProductRequired = Required<Product>

const Product = {
    id:435,
    name:"olive" ,
}

type OptionalProduct = Partial<Product>
type ProductReadOnly = Readonly<Product>