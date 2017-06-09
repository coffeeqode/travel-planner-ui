import { Component, OnInit } from '@angular/core';
import {RssFeedService} from './rss-feed.service';
import {RssFeed} from './rss-feed';

@Component({
  selector: 'app-search-itinerary',
  templateUrl: './search-itinerary.component.html',
  styleUrls: ['./search-itinerary.component.css']
})
export class SearchItineraryComponent implements OnInit {

  private rssFeeds : RssFeed[];

  constructor(private rssFeedService: RssFeedService) { }

  ngOnInit() {
    this.rssFeedService.getRssFeeds().subscribe(rssFeeds => this.rssFeeds=rssFeeds);

  }

}
