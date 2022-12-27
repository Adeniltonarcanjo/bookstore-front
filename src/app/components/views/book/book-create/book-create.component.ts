import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  id_cat: String = ''
  book: Book = {
    id: '',
    title: '',
    author: '',
    text: ''

  }

  title = new FormControl('', [Validators.minLength(3)])
  author = new FormControl('', [Validators.minLength(3)])
  text = new FormControl('', [Validators.minLength(10)])

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
  }

  create(): void {
    this.service.create(this.book, this.id_cat).subscribe(response => {
      this.router.navigate([`categories/${this.id_cat}/books`]);
      this.service.menssage("book created")
    }, err => {
      this.router.navigate([`categories/${this.id_cat}/books`]);
      this.service.menssage("error to create book")

    })

  }

  getMessage() {
    if (this.title.invalid) {
      return "Field Title must be between 3 and 100 characters ";
    }
    if (this.author.invalid) {
      return "Field Author must be between 3 and 100 characters ";
    }
    if (this.text.invalid) {
      return "Field Text must be between 10 and 2.000.000 characters ";
    }
    return false
  }

}
