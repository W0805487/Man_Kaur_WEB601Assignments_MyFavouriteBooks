 interface Content {
    id: number;
    name: string;
    description: string;
    author: string;
    imgURL?: string;
    type?: string;
    tags?:string[];
    
  }
  export { Content };