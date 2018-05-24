import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgSrc = "http://placehold.it/320x150";
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "商品1", 1.99, 3.5, "描述1", ["图书","电子"]),
      new Product(2, "商品2", 2.99, 2.5, "描述2", ["课程","文教"]),
      new Product(3, "商品3", 3.99, 4.5, "描述3", ["文具","电子"]),
      new Product(4, "商品4", 4.99, 1.5, "描述4", ["生活用品"]),
      new Product(5, "商品5", 5.99, 3.5, "描述5", ["容器","电子"]),
      new Product(6, "商品6", 6.99, 2.5, "描述6", ["饮品"])
    ]
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}
