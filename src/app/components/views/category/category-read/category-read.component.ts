import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model'; 

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[]=[]

  displayedColumns: string[] = ['id', 'name', 'description', 'books','actions'];
  constructor(private service:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(response=>{
      console.log(response);
      this.categories=response;
    })
  }

  navToCategoryCreate(){
    this.router.navigate(["category/create"])
  }
 

}
