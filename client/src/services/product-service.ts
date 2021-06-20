
import {from, Observable} from "rxjs";
import {IProductApi} from "./api/product-api";
import {Product} from "../../corelib/product";

export interface IProductService {
    getProduct(id:string): Observable<Product>
    updateProduct(form: FormData): Observable<string>
}

export class ProductService implements IProductService {
    constructor(private readonly api: IProductApi) {
    }

    getProduct(id: string): Observable<Product> {
        return from(this.api.getProduct(id));
    }

    updateProduct(form: FormData): Observable<string> {
        return from(this.api.updateProduct(form));
    }
}