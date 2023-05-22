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
          imgURL: 'assets/img/img1.jpg',
          type: 'Autobiography',
          
    },


    {
      id: 2,
      name: 'The power of Positive Thinking',
      description: 'This book has helped men and women around the world to achieve fulfillment in their lives through Dr. Norman powerful message of faith and insiration.',
      author: 'Dr.Norman Vincent Peale',
      imgURL: 'assets/img/img2.jpg',
      type: 'Motivational', 
    },

    {
      id: 3,
      name: 'House without Windows',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and haunting tale of friendship that illuminates the plight of women in a traditional culture..',
      author: 'Nadia Hashimi',
      imgURL: 'assets/img/img4.jpg',
     type: 'Novel', 
    },
  
    {
      id: 4,
      name: 'World War',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and history of world war...',
      author: 'Mr.peterson',
      imgURL: 'assets/img/img10.jpg',
     type: 'Historical book', 
    },

    {
      id: 5,
      name: 'World War 2',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and history of world war...',
      author: 'Mr.peterson',
      imgURL: 'assets/img/img11.jpg',
     type: 'Historical book', 
    },

    {
      id: 6,
      name: 'Amar Lekh',
      description: 'This is a religious book. It is related to sikh community. This book provide the history and culture of sikhism. It is very knowledgable book.',
      author: 'Bhai veer Singh',
      imgURL: 'assets/img/img7.jpg',
     type: 'Religious book'
    },
  ]
  getContentHtml(index: number): string {
    const content = this.contentList[index];
    const imgHtml = content.imgURL ? `<img src="${content.imgURL}" alt="${content.name}" />` : '';
    return `
      <div style="border:1px;">
        <h2>${content.name}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.author}</p>
        ${imgHtml}
        <p>Type: ${content.type}</p>
      </div>
    `;
  }
}



    




   
    
