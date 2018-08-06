import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSearching = false;
  selectedTag: string;
  articles: any = [
    {
      title: '配置中心 Apollo 源码解析 —— 客户端配置 Spring 集成（三）之外部化配置',
      date: '2018-07-25',
      tags: ['前端开发', 'Javascript', 'ES6']
    },
    {
      title: '初学者应该了解的数据结构： Graph',
      date: '2018-07-21',
      tags: ['Node.js', 'CSS']
    },
    {
      title: '手把手教你用原生JavaScript造轮子（1）——分页器',
      date: '2018-07-18',
      tags: ['C#', 'Javascript', 'ES6']
    },
    {
      title: '初学者应该了解的数据结构： Graph',
      date: '2018-07-18',
      tags: ['IOT', 'Javascript', 'ES6']
    },
    {
      title: '简易商城小程序全栈开发(mpvue+koa+mongodb)',
      date: '2018-07-16',
      tags: ['MySql', 'Linux', 'Windows OS']
    },
    {
      title: '这样你都不懂Promise,算我输！',
      date: '2018-07-12',
      tags: ['XX', 'Javascript', 'ES6']
    },
    {
      title: '美团针对Redis Rehash机制的探索和实践',
      date: '2018-07-12',
      tags: ['ABC', 'ES6']
    },
    {
      title: '从 0 到 1 实现 React 系列 —— 生命周期和 diff 算法',
      date: '2018-07-10',
      tags: ['前端开发', 'Javascript', 'ES6']
    }
  ];
  constructor() {}

  openSearchInput() {
    this.isSearching = !this.isSearching;
  }
  search(value) {
    this.selectedTag = undefined;
    console.log(value);
  }
  searchByTag(tag) {
    this.isSearching = false;
    this.selectedTag = tag;
  }
}
