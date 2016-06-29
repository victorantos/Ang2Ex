import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exercise1-app',
  templateUrl: 'exercise1.component.html',
  styleUrls: ['exercise1.component.css']
})
export class Exercise1AppComponent implements OnInit {
  title = 'Exercise 1';
  items: Array<string> = ['item1', 'item2', 'item3'];
  activeItem: number = 0;

  ngOnInit():  any {
   let self = this; 
    
    setInterval(function () {

      self.activeItem++;
      if (self.activeItem == self.items.length)
        self.activeItem = 0;
    }, 1000 * 4);
  }
}
