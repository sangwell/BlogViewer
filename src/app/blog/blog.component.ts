import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogTitle = 'CSS 的空格处理';
  blogHtml: any = '<h3>一、空格规则</h3>\n' +
    '<p>HTML 代码的空格通常会被浏览器忽略。\n' +
    '<img src="https://www.wangbase.com/blogimg/asset/201807/bg2018073106.jpg" alt="white"></p>\n' +
    '<pre><code><span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>◡◡hello◡◡world◡◡<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>\n' +
    '</code></pre>\n' +
    '<p>上面是一行 HTML 代码，文字的前部、内部和后部各有两个空格。为了便于识别，这里使用半圆形符号◡表示空格。</p>\n' +
    '<p>浏览器的输出结果如下。</p>\n' +
    '<pre><code>hello world\n' +
    '</code></pre>\n' +
    '<p>可以看到，文字的前部和后部的空格都会忽略，内部的连续空格只会算作一个。这就是浏览器处理空格的基本规则。</p>\n' +
    '<p>如果希望空格原样输出，可以使用<code>&lt;pre&gt;</code>标签。</p>\n' +
    '<pre><code><span class="hljs-tag">&lt;<span class="hljs-title">pre</span>&gt;</span>◡◡hello◡◡world◡◡<span class="hljs-tag">&lt;/<span class="hljs-title">pre</span>&gt;</span>\n' +
    '</code></pre>\n' +
    '<p>另一种方法是，改用 HTML 实体<code>&amp;nbsp;</code>表示空格。</p>\n' +
    '<pre><code><span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>&amp;nbsp;&amp;nbsp;hello&amp;nbsp;&amp;nbsp;world&amp;nbsp;&amp;nbsp;<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>\n' +
    '</code></pre>\n' +
    '<h3>二、空格字符</h3>\n' +
    '<p>HTML 处理空格的规则，适用于多种字符。除了普通的空格键，还包括制表符（\\t）和换行符（\\r和\\n）。</p>\n' +
    '<p>浏览器会自动把这些符号转成普通的空格键。</p>\n' +
    '<pre><code><span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>hello\n' +
    'world<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>\n' +
    '</code></pre>\n' +
    '<p>上面代码中，文本内部包含了一个换行符，浏览器视同为空格，输出结果如下。</p>\n' +
    '<pre><code>hello world\n' +
    '</code></pre>\n' +
    '<p>所以，文本内部的换行是无效的（除非文本放在<code>&lt;pre&gt;</code>标签内）。</p>\n' +
    '<h3>三、CSS 的 white-space 属性</h3>\n' +
    '<p>HTML 语言的空格处理，基本上就是直接过滤。这样的处理过于粗糙，完全忽视了原始文本内部的空格可能是有意义的。</p>\n' +
    '<p>CSS 提供了一个<code>white-space</code>属性，可以提供更精确一点的空格处理方式。该属性共有六个值，除了一个通用的<code>inherit</code>（继承父元素），下面依次介绍剩下的五个值。</p>\n' +
    '<h3>四、参考链接</h3>\n' +
    '<p><a href="https://github.com/nodeca/pica">https://github.com/nodeca/pica</a> ，by Patrick Brosset</p>';
  constructor() {}

}
