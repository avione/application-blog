import { Component, Input, OnInit, Inject } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

// databinding: Récéption du model post
 @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  // Pour directive [ngStyle]
  getColor() {
    if(this.post.loveIts > 0) {
      return 'green';
    } else if(this.post.loveIts < 0 ) {
      return 'red';
    }
  }

  // Love Methode évenement Click
  onLoveIts() {
    this.post.loveIts= (this.post.loveIts == -1 ? 0 : 1);
  }

  // Don't Love Methode évenement Click
  onDontLoveIts() {
    this.post.loveIts= (this.post.loveIts == 1 ? 0 : -1);
  }
}
