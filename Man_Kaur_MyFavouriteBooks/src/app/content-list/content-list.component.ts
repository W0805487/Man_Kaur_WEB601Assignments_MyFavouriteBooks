import { Component, Input, OnInit} from '@angular/core';
import { Content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit(){}
  contentList:Content[] = [
    {
      id: 1,
          name: 'Wings of Fire',
          description: 'This is a autobiography of Dr.A.P.J. Abdul Kalam who from very humble beginnings rose to be the president of India.The book is full of insights,personal moments and life experience of Dr.Kalam',
          author: 'Arun Tiwari',
          imgURL: '',
          tags:['motivational'],
          type: 'Religious'
          
    },


    {
      id: 2,
      name: 'The power of Positive Thinking',
      description: 'This book has helped men and women around the world to achieve fulfillment in their lives through Dr. Norman powerful message of faith and insiration.',
      author: 'Dr.Norman Vincent Peale',
      imgURL: 'assets/img/img2.jpg',
      tags:['religious','history'],
      type: 'Historical' 
    },

    {
      id: 3,
      name: 'House without Windows',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and haunting tale of friendship that illuminates the plight of women in a traditional culture..',
      author: 'Nadia Hashimi',
      imgURL: 'assets/img/img4.jpg',
      tags:['religious','motivational'],
     type: 'Religious' 
    },
  
    {
      id: 4,
      name: 'World War',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and history of world war...',
      author: 'Mr.peterson',
      imgURL: 'assets/img/baby.jpg',
      tags:['knowledgable'],
     type: 'Historical' 
    },

    {
      id: 5,
      name: 'World War 2',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and history of world war...',
      author: 'Mr.peterson',
      imgURL: 'assets/img/img11.jpg',
      tags:['knowledgable'],
     type: 'Historical' 
    },

    {
      id: 6,
      name: 'Amar Lekh',
      description: 'This is a religious book. It is related to sikh community. This book provide the history and culture of sikhism. It is very knowledgable book.',
      author: 'Bhai veer Singh',
      imgURL: 'assets/img/img7.jpg',
      tags:['knowledgable'],
     type: 'Religious'
    },

    {
      id: 7,
      name: 'Ameer',
      description: ' It is related to sikh community. This book provide the history and culture of sikhism. It is very knowledgable book.',
      author: 'Harman singh',
      imgURL: 'assets/img/img7.jpg',
      tags:['story'],
     type: ''
    },


  ]
  
  

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

}



    




   
    
