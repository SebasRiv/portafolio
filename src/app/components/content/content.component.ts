import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  element: any = null;
  states: boolean[] = [true, false, false, false, false];

  active(e: any) {
    e.preventDefault();

    if (this.element != e.target) {
      switch (e.target.innerText) {
        case "Item 1":
          for (const index in this.states) {
            parseInt(index) != 0 ? this.states[index] = false : this.states[index] = true;
          }
          break;
        case "Item 2":
          for (const index in this.states) {
            parseInt(index) != 1 ? this.states[index] = false : this.states[index] = true;
          }
          break;
        case "Item 3":
          for (const index in this.states) {
            parseInt(index) != 2 ? this.states[index] = false : this.states[index] = true;
          }
          break;
        case "Item 4":
          for (const index in this.states) {
            parseInt(index) != 3 ? this.states[index] = false : this.states[index] = true;
          }
          break;
        case "Item 5":
          for (const index in this.states) {
            parseInt(index) != 4 ? this.states[index] = false : this.states[index] = true;
          }
          break;

        default:
          break;
      }
      this.element = e.target;
    }
  }

  classes(state: boolean) {
    return {
      'content__item': true,
      'active': state
    }
  }

  ngOnInit(): void {
  }

}
