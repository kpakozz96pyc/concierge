
import {HttpClient} from "./http-client";
import {ProductFilter} from "../../../corelib/product-filter";
import {Product} from "../../../corelib/product";

export interface ICatalogApi {
    getPage(size: number, skip?: number): Promise<Product[]>
    search(filter: ProductFilter): Promise<Product[]>
}

export class CatalogApi implements  ICatalogApi{
    constructor(private readonly httpClient: HttpClient){}

    getPage(pageSize: number, pageNumber?: number): Promise<Product[]> {
        return this.httpClient.get<Product[]>('/product/GetPage', {pageNumber: pageNumber, pageSize: pageSize}).then()
    }

    search(filter: ProductFilter): Promise<Product[]> {
        return this.httpClient.post<Product[]>('/product/search', filter).then()
    }
}