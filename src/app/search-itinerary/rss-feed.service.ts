import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RssFeed } from './rss-feed';
import {Parser} from  'xml2js';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class RssFeedService {
    private rssURL = 'assets/World.xml';

    constructor(private http: Http) {
    }

    getRssFeeds(): Observable<RssFeed[]> {

        var parser = new Parser();
        var xml = "<root>Hello xml2js!</root>"
        parser.parseString(xml, function (err, result) {
            console.dir(result);
        });

        return this.http.get(this.rssURL)
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))

    }

}


