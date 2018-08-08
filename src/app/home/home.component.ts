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
  isShowAll = false;
  // isLoading = true;
  constructor(
    private router: Router,
    private apiService:ApiService
  ) {}

  ngOnInit() {
    this.getBlogList();
  }
  reloadPage() {
    window.location.reload();
  }
  getBlogList() {
    // this.isLoading = true;
    this.apiService.getBlogList(this.blogSearchModel).subscribe(
      data => {
        this.isShowAll = data.length < 10;
        data.forEach((item) => {
          item.Tags = item.Tags.split(',');
          this.articles.push(item);
        });
        // this.isLoading = false;
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
    this.getBlogContentByTag(tag);
  }
  getBlogContentByTag(tag) {
    const searchModel = {
      Tag:tag
    };
    this.apiService.getBlogListByTag(searchModel).subscribe(
      data => {
        this.articles = [];
        data.forEach((item) => {
          item.Tags = item.Tags.split(',');
          this.articles.push(item);
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  closeTag() {
    this.selectedTag = undefined;
    this.blogSearchModel.CurrentPage = 0;
    this.currentPageIndex = 0;
    this.blogSearchModel.Title = '';
    this.getBlogList();
  }
}
