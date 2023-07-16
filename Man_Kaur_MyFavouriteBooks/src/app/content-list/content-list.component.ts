import { Component, Input, OnInit} from '@angular/core';
import { Content} from '../helper-files/content-interface';
import { BookServiceService} from '../book-service.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: any[];
  item:any;
  constructor(private bookService: BookServiceService , 
   public messageService : MessageService){
 
  }
  
  

  name : string='';
  searchResult : boolean = false;
  message : string = '';

  findName(){
    this.searchResult = this.contentList.some(content => content.name.toLowerCase() === this.name.toLowerCase())

    if (this.searchResult){
      this.message= "name Exist";
    }
    else{
      this.message =" name does not exist";
    }
}
receiveNewContent(newContent: any): void {
  // Add the new content item to the content list
  console.log("newContent",newContent);
  this.contentList.push(newContent);
  console.log('contentListArray',this.contentList);
}

ngOnInit(){
  this.bookService.getContent().subscribe((contentList: any[])=>
  {
    this.contentList = contentList;
  })
  
  const id = 4;
this.bookService.getContentById(id).subscribe((singleContent: any)=>
{
  this.item = singleContent;
})
}

}