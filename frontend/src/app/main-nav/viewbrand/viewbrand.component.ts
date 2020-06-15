import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {BrandService } from '../../shared/brand.service';
import { Brand } from '../../shared/brand.model';


@Component({
  selector: 'app-viewbrand',
  templateUrl: './viewbrand.component.html',
  styleUrls: ['./viewbrand.component.css']
})
export class ViewbrandComponent implements OnInit {
  public brand = [];
  constructor(private router: Router, private brandservice: BrandService) { }

  ngOnInit() {
    this.getBrand();
    this.refresh();
  }
  getBrand() {
    this.brandservice.getBrand().subscribe((res) => {
    this.brand = res as Brand[];
    });
  }

  refresh() {
    this.brandservice.getBrand().subscribe((res) => {
      this.brand = res as Brand[] ;
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.brandservice.deleteBrand(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }

}

