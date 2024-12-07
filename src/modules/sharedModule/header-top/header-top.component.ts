import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  @Input() header:string;
  @Input() description:string;
  @Input() buttonText:string;
  @Input() imageName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
