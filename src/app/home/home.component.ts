import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { BlogSearchModel } from './blog-search.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isSearching = false;
  selectedTag: string;
  blogSearchModel:BlogSearchModel = new BlogSearchModel();
  articles: any = [];
  currentPageIndex = 0;
  constructor(
    private router: Router,
    private apiService:ApiService
  ) {}

  ngOnInit() {
    this.getBlogList();
  }

  getBlogList() {
    this.apiService.getBlogList(this.blogSearchModel).subscribe(
      data => {
        console.log(data);
        this.articles = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  openSearchInput() {
    this.isSearching = !this.isSearching;
  }
  search(value) {
    this.selectedTag = undefined;
    this.blogSearchModel.CurrentPage = 0;
    this.articles = [];
    this.getBlogList();
  }
  getMoreBlogList() {
    this.currentPageIndex ++;
    this.blogSearchModel.CurrentPage = this.currentPageIndex * this.blogSearchModel.PageSize;
    this.getBlogList();
  }
  searchByTag(tag) {
    this.isSearching = false;
    this.selectedTag = tag;
  }
}
