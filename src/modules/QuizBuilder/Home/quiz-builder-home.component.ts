import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-quiz-builder-home',
  templateUrl: './quiz-builder-home.component.html',
  styleUrls: ['./quiz-builder-home.component.scss']
})
export class QuizBuilderHomeComponent implements OnInit {

  templateList:any [] = [];
  newTemplateName: string = ''; // Variable to hold the new template name
  newTemplateDescription: string = ''; // Variable to hold the desc template name
  modalRef: NgbModalRef;
  currentPage:number=1;
  questionsTemplateTemp =[{
    id:1,
    type:'text',
    question:'What is your name?',
    correctAnswer:'Bahaa'
  },
  {
    id:23,
    type:'radio',
    question:'What is the best player in the history?',
    options:[{
      id:13,
      optionText:'Messi',
      isCorrectAnswer:true,
    },
    {
      id:16,
      optionText:'C.Ronaldo',
      isCorrectAnswer:false,
    },
    {
      id:19,
      optionText:'Maradona',
      isCorrectAnswer:false,
    },
  ]
  },
  {
    id:21,
    type:'checkbox',
    question:'Which is the city for jordan country ?',
    options:[{
      id:13,
      optionText:'Irbid',
      isCorrectAnswer:true,
    },
    {
      id:16,
      optionText:'Amman',
      isCorrectAnswer:true,
    },
    {
      id:156,
      optionText:'Salt',
      isCorrectAnswer:true,
    },
    {
      id:123,
      optionText:'Riyadh',
      isCorrectAnswer:false,
    },
  ]
  },

]
  constructor(private modalService: NgbModal,
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
this.loadTemplates();
  }

  // Questions array to hold all created questions
  questions: any[] = [];

  // New question model
  newQuestion: any = {
    text: '',
    type: 'radio',
    options: [''],
    templateId:0
  };
  questionsTemplate:any [] = []
  selectedTemplate:any;
  // Add a new question to the questions array
  addQuestion(): void {
    if (this.newQuestion.type === 'text') {
      this.newQuestion.options = []; // Clear options for text type
    }
    this.newQuestion.templateId = this.selectedTemplate.templateId;
    this.questions.push({ ...this.newQuestion });
    this.resetForm();
  }

  // Add an option to the new question
  addOption(): void {
    this.newQuestion.options.push('');
  }

  // Remove an option by index
  removeOption(index: number): void {
    this.newQuestion.options.splice(index, 1);
  }

  // Reset the form to initial state
  resetForm(): void {
    this.newQuestion = {
      text: '',
      type: 'radio',
      options: [''],
    };
  }

  createTemplate() {
    sessionStorage.setItem('templateList',JSON.stringify(this.templateList));

  }


  loadTemplates() {
    this.templateList = sessionStorage.getItem('templateList')? JSON.parse(sessionStorage.getItem('templateList') as string) : [];
    this.templateList.map(item=>{
      item.status = this.getStatusText(item.templateId);
    })
  }
  

  createNewTemplate() {
    if (this.newTemplateName.trim()) {
      let maxId:number = 0;
      if(this.templateList.length === 0) {
        maxId = 0;
      }
      else {
        this.templateList.map(item=>{
          if(item.id > maxId) {
            maxId = item.id;
          }
        })
      }
      let tempTemplate={
        id:maxId+1,
        description:this.newTemplateDescription,
        name:this.newTemplateName,
        createdDate:new Date(),
      }

      this.templateList.push(tempTemplate);
      // Save the updated list to sessionStorage
      sessionStorage.setItem('templateList', JSON.stringify(this.templateList));
      this.newTemplateName = ''; // Clear the input field after adding the template
      this.newTemplateDescription = ''; // Clear the input field after adding the template
    }
  }

  getStatusText(templateId:number) {
    this.questionsTemplate = sessionStorage.getItem('questionsTemplate')? JSON.parse(sessionStorage.getItem('questionsTemplate') as string) : [];
   let questionFilter = this.questionsTemplate.find(item => item.templateId === templateId);
   return questionFilter? 'Completed' : 'In Progress';
  }


  openModalTemplate(template: TemplateRef<any>,selectedTemplate:any) {
    this.selectedTemplate = selectedTemplate;
    this.modalRef = this.modalService.open(template, {
      animation: true,
      backdrop: 'static',
      scrollable: true,
    });
  }

  closeModal() {
    this.modalRef.close();
  }

  submitQuestion() {

  }

  selectCorrectAnser(event) {

  }
}
