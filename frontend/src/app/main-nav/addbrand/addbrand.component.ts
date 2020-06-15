import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrandService } from '../../shared/brand.service';
import { Brand} from '../../shared/brand.model';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

  public selectedBrand = new Brand();
  constructor(private router: Router, private brandservice: BrandService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
     if (form.value._id === '' || form.value._id == null) {
    this.brandservice.insertBrand(this.selectedBrand).
    subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
    alert(' Data Saved Successfully ');
    this.router.navigateByUrl('main-nav/ViewBrand');
     } else {
       console.log(form.value);
     }
    }

}
