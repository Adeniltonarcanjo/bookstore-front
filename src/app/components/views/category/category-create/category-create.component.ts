import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-creat',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreatComponent implements OnInit {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.category).subscribe((reponse) => {
      this.service.menssage('Category Ceated');
      this.router.navigate(['categories'])
    }, err => {
      for (let i = 0; i < err.error.erros.length; i++) {
        this.service.menssage(err.error.erros[i].message)
      }
    })

  }

}
