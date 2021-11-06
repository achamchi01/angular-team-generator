import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newMemberName: string = "";
  members: string[] = [];

  numberOfTeams = 0;
  teams:string[][] = [];

  errorMsg = "";

  addNewMember(){
    if(this.newMemberName == ""){
      this.errorMsg = "Member Name Can't be Empty";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = "";
    this.errorMsg = "";
  }

  generateTeams(){

    if(!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMsg = "Invalid Number Of Teams";
      return;
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMsg = "Not Enough Members";
      return;
    }

    this.errorMsg = "";
    this.teams = [];

    while(this.members.length > 0){
      for(let i = 0; i < this.numberOfTeams; i++){
        const index = Math.floor(Math.random()*this.members.length);
        if(this.members[index]){
          if(!this.teams[i]) this.teams[i] = [];
          this.teams[i].push(this.members[index]);
          this.members.splice(index, 1);
        }else break;
      }
    }
    console.log(this.teams)
  }

}
