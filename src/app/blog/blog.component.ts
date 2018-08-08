import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogTitle: string;
  blogHtml: any;
  constructor(
    private apiService:ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.getBlogContent(data['Id']);
      }
    );
  }

  getBlogContent(blogId) {
    const searchModel = {
      Id: blogId
    };
    this.apiService.getBlogContent(searchModel).subscribe(
      data => {
        this.blogTitle = data['Title'];
        this.blogHtml = data['Content'];
      },
      error => {
        console.log(error);
      }
    );
  }

}
