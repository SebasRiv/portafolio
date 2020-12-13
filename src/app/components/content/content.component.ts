import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  selected: boolean = false;
  element: any = null;

  active(e: any) {
    console.log(this.element);

    if (this.element == e.target) {
      console.log(true);
    } else {
      console.log(false);
    }
    this.element = e.target;
    this.selected = !this.selected;
  }

  classes() {
    return {
      'content__item': true,
      'active': this.selected
    }
  }

  ngOnInit(): void {
  }

}
