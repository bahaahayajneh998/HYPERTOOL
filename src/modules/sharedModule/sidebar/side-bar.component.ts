import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  routingList :any = []
  constructor() { }

  ngOnInit(): void {
    this.loadRouting();
  }

  renderIocn(iconName:string) {
    return '../../../assets/icons/' + iconName + '.svg';
  }

  loadRouting() {
    this.routingList = []
    this.routingList = [ {
      title:'Home',
      icon:'home-sidebar',
      routing:'/'
    },
    {
      title:'Text Statistics',
      icon:'text',
      routing:'text-statistics'
    },
    {
      title:'Currency Convertor',
      icon:'convert',
      routing:'currency-convertor'
    }]
  }

}
