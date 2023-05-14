import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    this.contentList.addContent({
          id: 1,
          name: 'Wings of Fire',
          description: 'This is a autobiography of Dr.A.P.J. Abdul Kalam who from very humble beginnings rose to be the president of India.The book is full of insights,personal moments and life experience of Dr.Kalam',
          author: 'Arun Tiwari',
          imgURL: 'assets/img/img1.jpg',
          type: 'Autobiography'
          
    });


    this.contentList.addContent({
      id: 2,
      name: 'The power of Positive Thinking',
      description: 'This book has helped men and women around the world to achieve fulfillment in their lives through Dr. Norman powerful message of faith and insiration.',
      author: 'Dr.Norman Vincent Peale',
      imgURL: 'assets/img/img2.jpg',
      type: 'Motivational', 
    });

    this.contentList.addContent({
      id: 3,
      name: 'House without Windows',
      description: 'A vivid,unforgettable story of an unlikely sisterhood-an emotionally powerful and haunting tale of friendship that illuminates the plight of women in a traditional culture..',
      author: 'Nadia Hashimi',
      imgURL: 'assets/img/img4.jpg',
     type: 'Novel', 
    });
  }
}