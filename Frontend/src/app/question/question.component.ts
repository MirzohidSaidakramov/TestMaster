import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from '../common/service/api-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  parts: any;
  tests: any
  constructor(private apiSvc: ApiServiceService) { }

  
  ngOnInit(): void {
    //partlarni olish
    this.apiSvc.getPartItem()
      .subscribe((result) => {
        this.parts = result;
        console.log(this.parts)
      });
      // testlarni olish
      this.apiSvc.getTestsByPart()
          .subscribe((result)=>{
            this.tests = result
            
          })
      
      
  }

  

}
