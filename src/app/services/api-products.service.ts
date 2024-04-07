import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from './../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpClient:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{
  return  this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`)
  }
  getProductById(id:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }
  getProductsByCatId(catId:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?categoryID=${catId}`)
  }
  deleteProduct(id:number):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/products/${id}`);
  }
  updateProduct(id:number,product:Iproduct):Observable<Iproduct>{
    return this.httpClient.put<Iproduct>(`${environment.baseUrl}/products/${id}`,product)
  }
  addProduct(product:Iproduct):Observable<Iproduct>{
    return  this.httpClient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(product))
  }
}
