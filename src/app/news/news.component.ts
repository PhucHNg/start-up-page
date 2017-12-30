import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  
  publishers: string[] = ["BBC News", "Buzzfeed", "ESPN", "Hacker News","National Geographic", "New Scientist", "Next Big Future", "New York Magazine", "TechCrunch", "The New York Times", "The Verge" ,"The Wall Street Journal", "The Washington Post", "Vice", "Wired"];

  publisher_ids: {string:string} = {
  "BBC News" : "bbc-news", 
  "Buzzfeed" : "buzzfeed",
  "Entertainment Weekly" : "entertainment-weekly",
  "ESPN" : "espn", 
  "Fortune" : "fortune", 
  "Hacker News" : "hacker-news",
  "National Geographic" : "national-geographic", 
  "New Scientist" : "new-scientist", 
  "Next Big Future" : "next-big-future", 
  "New York Magazine" : "new-york-magazine", 
  "TechCrunch" : "techcrunch", 
  "The New York Times" : "the-new-york-times", 
  "The Verge" : "the-verge",
  "The Wall Street Journal" : "the-wall-street-journal", 
  "The Washington Post" : "the-washington-post", 
  "Vice" : "vice-news", 
  "Wired" : "wired"
  };

  selected_publisher: string = "";
  headlines: any;
  id_keyword: string = "";

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callHeadlinesService(publisher) {
  	this.selected_publisher = publisher;
  	this._sharedService.getTopHeadlines(this.publisher_ids[this.selected_publisher])
  	.subscribe(
      lstresult => { 
        this.headlines = lstresult['articles'];
      },
      error => {
        console.log("Error. The callHeadlinesService result JSON value is as follows:");
        console.log(error);
      }
    ); 
  }

  callNewsSrchService() {
	this._sharedService.searchNewsByKeyword(this.id_keyword)
	  	.subscribe(
	      lstresult => { 
	        this.headlines = lstresult['articles'];
	      },
	      error => {
	        console.log("Error. The callNewsSrchService result JSON value is as follows:");
	        console.log(error);
	      }
	); 
  }
 
}
