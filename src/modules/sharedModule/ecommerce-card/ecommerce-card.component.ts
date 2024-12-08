import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-ecommerce-card',
  templateUrl: './ecommerce-card.component.html',
  styleUrls: ['./ecommerce-card.component.scss']
})
export class EcommerceCardComponent implements OnInit {
  @Input() item:any;
  danger  = this.commonService.commonColors.danger;
  white  = this.commonService.commonColors.white;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

}
