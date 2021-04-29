import { Icategory } from './../../interfaces/icategory';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: Icategory[]
  selCatId: number

  constructor() { 
    this.categoryList = [
      {catID:6, catName: "All"},
      {catID:1, catName: "Clothes"},
      {catID:2, catName: "Toys"},
      {catID:3, catName: "Home"},
      {catID:4, catName: "Electronice"},
      {catID:5, catName: "Appliances"},
    ]
  }

  ngOnInit(): void {
    
  }

}
