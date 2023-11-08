import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public src: string = "https://source.unsplash.com/random";
  public url: string = "https://api.kanye.rest"
  public mensaje!: string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    /*fetch(this.url)
      .then(response => response.json())
      .then(data => this.mensaje = data.quote)*/

    this.http.get(this.url).subscribe((data) => {
      let event = data as any;
      if((event.type as any)==HttpEventType.DownloadProgress){
        console.log(event.loaded);
        console.log(event.total);
      }
      if(event.type == HttpEventType.Response){
        console.log(event.body);
      }
    });
  }

}
