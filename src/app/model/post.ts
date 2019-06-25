import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
export class Post {
	title: string;
	content: string;
	loveIts: number;
	create_at: string;

	constructor(title: string, content: string, loveIts: number) {
		this.title=title;
		this.content=content;
		this.loveIts=loveIts;
		this.create_at=moment().format('DD/MM/YYYY, HH:mm:ss');
	}
}
