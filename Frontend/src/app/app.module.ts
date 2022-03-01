import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'
import { ApiServiceService } from './common/service/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { PlayTestComponent } from './play-test/play-test.component';
import { AnswerComponent } from './answer/answer.component';
import {MatRadioModule} from '@angular/material/radio';
import { CopyrightComponent } from './copyright/copyright.component';
import { ResultsComponent } from './results/results.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
  {path:'',component:HomeComponent},
  {path:'tests',component:QuestionComponent},
 
  
  {path:'playtest/:quesID',component:PlayTestComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    NavbarComponent,
    HomeComponent,
    PlayTestComponent,
    AnswerComponent,
    CopyrightComponent,
    ResultsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
