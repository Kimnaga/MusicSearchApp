import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query : string;
  //results : any[];
  constructor(private Spotify:SpotifyService, private router:Router, private route:ActivatedRoute) {
    //this.results=[];
    this.query = "";
    this.route.queryParams.subscribe(params => {this.query = params['query']||'';});
  }

  search(){
    console.log ('this.query' + this.query);

    this.Spotify.search(this.query,'track').subscribe((res:any) =>{console.log(res)});
    //=> this.renderResult(res));
  }
/*
  renderResult(res:any) : void{
    this.results = null;
    if(res && res.tracks && res.tracks.items){
      this.results = res.tracks.items;
    }
  }
*/
  ngOnInit() {
    //this.search();
  }

  submit (q:string):void{
    //this.router.navigate(['search'], {queryParams:{query:query}}).then(_=>this.search());
    this.query = q;
    this.search();
  }

}
