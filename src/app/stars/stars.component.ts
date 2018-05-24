import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  // StarsComponent星级评价组件的 rating的属性应该由父组件传递给它
  @Input()
  private rating:number =0; //接受产品星级评价的值

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i=0;i<=5;i++){
      this.stars.push(i > this.rating);
    }
    console.log(this.stars);
  }

}
