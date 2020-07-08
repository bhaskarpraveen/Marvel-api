import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../marvel.service'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  test;
  error;
  data;
  image;
  extension;
  data_type;
  d_type;
  value;
  constructor(private myservice:MarvelService,private sanitizer: DomSanitizer) { 
    
  }

  getData(value){
    this.d_type=this.data_type;
    if(this.data_type=="0"){
      this.myservice.getCharacter(value).subscribe(
        data=>{
          if(data['data']['results'].length==0){
            this.error="Not Found!!"
          }else{
            this.error=''
            this.image = data['data']['results'][0]['thumbnail']['path'] + '.'+ data['data']['results'][0]['thumbnail']['extension']
            this.data_type=null
          this.data=data
          }
        },
        error=>{
          this.error = error['error']['status'];
          this.data=null;
          this.image=null
          this.ngOnInit()
        }
      )
    }
    else if(this.data_type=='1'){
      this.myservice.getComic(value).subscribe(
        data=>{
          if(data['data']['results'].length==0){
            this.error="Not Found!!"
          }else{
            this.error=''
            this.image = data['data']['results'][0]['thumbnail']['path'] + '.'+ data['data']['results'][0]['thumbnail']['extension']
            this.data_type=null
          this.data=data
          }
          
        },
        error=>{
          this.data=null;
          this.image=null;
          this.error = error['error']['status'];
          this.ngOnInit()
        }
      )
    }
   
  }
  
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
  ngOnInit() {
    this.data=null;
    this.image=null;
  }

}
