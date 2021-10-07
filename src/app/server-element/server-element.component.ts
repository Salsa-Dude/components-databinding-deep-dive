import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // adding a decorator to allow parent component to bind to this property
  @Input() element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}
