import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-blog';

  post: Post;
  posts = new Array<Post>();

  constructor() { }

  ngOnInit() {
      // création du premier post
      this.post = new Post('Mon premier post',
      'Quelques astuces : Pensez aux différents types de databinding — comment passer des données d\'un component à un autre, comment afficher des données dans le template et comment réagir à un événement venant du template.',
      1);

    // création du 2e post
    this.posts.push(this.post);
    this.post = new Post('Mon deuxième post',
      'Pensez aux directives structurelles comme *ngFor, et également aux directives par attribut comme ngClass. Pensez aux Pipes pour la transformation de données, notamment pour la date',
      -1);

    // création du 3e post
    this.posts.push(this.post);
    this.post = new Post('Encore un post',
      'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !',
      0);
    this.posts.push(this.post);
  }
}
