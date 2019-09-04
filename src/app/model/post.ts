import { formatDate } from '@angular/common';

export class Post {
	title: string;
	content: string;
	loveIts: number;
	create_at: Date;

	constructor(title: string, content: string, loveIts: number) {
		this.title=title;
		this.content=content;
		this.loveIts=loveIts;
		this.create_at=new Date(); //formatDate( new Date(),'dd/MM/yyyy hh:mm:ss', 'fr-FR');
	}
}
