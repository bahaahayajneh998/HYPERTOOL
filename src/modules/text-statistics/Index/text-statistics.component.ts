import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-statistics',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.scss']
})
export class TextStatisticsComponent implements OnInit {
  textInput:string = '';
  isCopied: boolean = false;
  wordCount:number = 0;
  spaceCount:number = 0;
  sentenceCount:number = 0;
  hashtagCount:number = 0;
  questionMarkCount:number = 0;
  exclamationMarkCount:number = 0;
  commaCount:number = 0;
  colonCount:number = 0;
  semiColonCount:number = 0;
  apostropheCount:number = 0;
  dashCount:number = 0;
  backetRoundCount:number = 0;
  lessThanCount:number = 0;
  greaterThanCount:number = 0;
  numberCount:number = 0;
  plusCount:number = 0;
  equalCount:number = 0;
  ampersandCount:number = 0;
  durationTime:any;
  characterInfo:any = [{
    char:null,
    count:null,
    perc:null
  }]

testimonials = [{
  id:12,
name:'John Williams',
date:'30 November 2021',
rating:5,
testimonialText:'The text statistics tool has transformed the way I write! The keyword density check helped me optimize my content for SEO, and the readability analysis ensured my articles are accessible to a wider audience. A must-have for writers and marketers!',
expert:'Content Strategist',
imageName:'john-williams.jpg'
},
{
  id:155,
  name:'Jonathan Walters',
  date:'30 April 2024',
  rating:5,
  testimonialText:'As a blogger, clarity is everything. The readability analysis feature gave me actionable insights to improve my posts. Now, my readers spend more time on my page, and engagement has skyrocketed!',
  expert:'Blogger',
  imageName:'jonathan.jpg'
  },

  {
    id:87,
    name:'Daniel Clifford',
    date:'12 January 2024',
    rating:4,
    testimonialText:'I never realized how repetitive my writing was until I used the word frequency analysis tool. It helped me diversify my vocabulary and enhance the quality of my content. Highly recommend!',
    expert:'Freelance Writer',
    imageName:'image-daniel.jpg'
    },

    {
      id:90,
      name:'Kira Whittle',
      date:'12 April 2022',
      rating:4,
      testimonialText:'This tool has been a game-changer for my academic writing. It ensures my papers are concise and well-structured. I’m submitting work with confidence now!',
      expert:'University Student',
      imageName:'image-kira.jpg'
      }

      ,{
        id:78,
        name:'Patrick Abrams',
        date:'3 March 2023',
        rating:4,
        testimonialText:'This platform is a hidden gem for SEO optimization! The keyword density analysis and plagiarism detection helped me rank my website higher on Google. It is a lifesaver!',
        expert:'Digital Marketer',
        imageName:'image-patrick.jpg'
        }

]

selectedTestimonial:any;

  constructor() { }

  ngOnInit(): void {
    this.selectedTestimonial = this.testimonials[0];
  }

  clearText() {
    this.textInput = '';
    this.textChanges();
  }
  
  downloadText() {

  }

  onCopySuccess() {
  }

  onCopyFailure() {
  }

  textChanges() {
    const startTime = performance.now();
    if(this.textInput.length > 0) {
      let wordWithoutMultipleSpace = this.textInput.replace(/\s+/g, ' ');
      this.wordCount = wordWithoutMultipleSpace.trim().split(' ').length;
      this.spaceCount = (this.textInput.match(/ /g) || []).length;
      this.numberCount = (this.textInput.match(/\d/g) || []).length;
      this.sentenceCount = this.textInput.split(/(?<=[.!?])\s+/).filter(sen=>sen.trim().length > 0).length;
      this.textCharInfo(); 
    }

    else {
      this.wordCount = 0;
      this.spaceCount = 0;
      this.sentenceCount = 0;
      this.questionMarkCount = 0;
      this.exclamationMarkCount = 0;
      this.commaCount = 0;
      this.colonCount = 0;
      this.semiColonCount = 0;
      this.dashCount = 0;
      this.hashtagCount = 0;
      this.backetRoundCount = 0;
      this.lessThanCount = 0;
      this.greaterThanCount = 0;
      this.numberCount = 0;
      this.plusCount = 0;
      this.equalCount = 0;
      this.ampersandCount = 0;
      this.characterInfo = []
    }
    const endTime = performance.now();
    this.durationTime = (endTime - startTime).toPrecision(4); // Execution time in milliseconds


  }

  textCharInfo() {
    this.characterInfo =[]
for (let str of this.textInput.toLowerCase()) {
  
  if(this.characterInfo.some(item=>(item.char) === str)){
   let charExistIndex= this.characterInfo.findIndex(x=>x.char === str)
    this.characterInfo[charExistIndex].count++;
  }
  else {
    this.characterInfo.push({
      char:str,
      count:1
    })
  }
  let charExistIndex= this.characterInfo.findIndex(x=>x.char === str)
  this.characterInfo[charExistIndex].perc = ((this.characterInfo[charExistIndex].count / this.textInput.length)*100).toPrecision(4);
  this.characterInfo = this.characterInfo.sort((a,b)=>b.count - a.count);

  this.hashtagCount =this.characterInfo?.find(x=>x.char === '#')?.count;
  this.questionMarkCount =this.characterInfo?.find(x=>x.char === '?')?.count;
  this.exclamationMarkCount =this.characterInfo?.find(x=>x.char === '!')?.count;
  this.commaCount =this.characterInfo?.find(x=>x.char === ',')?.count;
  this.colonCount =this.characterInfo?.find(x=>x.char === ':')?.count;
  this.semiColonCount =this.characterInfo?.find(x=>x.char === ';')?.count;
  this.dashCount =this.characterInfo?.find(x=>x.char === '-')?.count;
  this.backetRoundCount =this.characterInfo?.find(x=>x.char === '()')?.count;
  this.lessThanCount =this.characterInfo?.find(x=>x.char === '<')?.count;
  this.greaterThanCount =this.characterInfo?.find(x=>x.char === '>')?.count;
  this.plusCount =this.characterInfo?.find(x=>x.char === '+')?.count;
  this.equalCount =this.characterInfo?.find(x=>x.char === '=')?.count;
  this.ampersandCount =this.characterInfo?.find(x=>x.char === '&')?.count;

}
console.log("this.characterInfo",this.characterInfo);
  }
  
  selectTestimonialItem(testimonialId:number) {
    this.selectedTestimonial = this.testimonials.find(x=>x.id === testimonialId);
  }

}
