import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // test() {
  //   //让typescript认识jQuery的$符，还需要一个类型描述文件，
  //   //@types/jquery, bootstrap 同理，npm 安装
  //   // $("xxx").
  // }
}
