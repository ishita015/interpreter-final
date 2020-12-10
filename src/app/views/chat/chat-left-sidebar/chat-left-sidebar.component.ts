import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, ChatService } from '../chat.service';
import { HttpService } from "../../../shared/services/http.service";
import { Router } from '@angular/router';
import { VariablesService } from 'src/app/shared/services/variables.service';

@Component({
  selector: 'app-chat-left-sidebar',
  templateUrl: './chat-left-sidebar.component.html',
  styleUrls: ['./chat-left-sidebar.component.scss']
})
export class ChatLeftSidebarComponent implements OnInit {

  userUpdateSub: Subscription;
  loadDataSub: Subscription;

  isSidenavOpen = true;
  userId;
  contact_Obj;
  group_id;
  currentUser: User = new User();
  contacts: any[];
  login_data;
  constructor(private chatService: ChatService,public service: HttpService,private router: Router,public variable:VariablesService
    ) {}

  ngOnInit() {
    this.login_data = JSON.parse(localStorage.getItem('loginData'));
    // this.login_data.profile_img

    // console.log("profile_img",this.login_data.profile_img)

    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.getContactList();
  }


  getContactList(){
    this.service.getContactData(this.userId)  
    .subscribe(res => {
      if(res['status'] == 1){
        // this.contact_Obj = res['data'];

        this.contacts= res['data'];
        console.log("yes",this.contacts);
        

        // this.messageList=this.chat_Obj;
        // localStorage.setItem('messageList', JSON.stringify(this.chat_Obj));
      }
        
        
    });
  }


  getChatByContact(contact) {
    this.variable.user_chat_img=true;
    console.log("select contact",contact);

    this.variable.loadingCollection = true;
    this.service.changeMessage(contact);
    
    if(contact.group_id =='0'){
      console.log("group_id",contact.group_id)  
      // send request
        this.service.requestSend(this.userId,contact.id).subscribe(res => {
         if(res['status'] == 1){
          this.getContactList();  
         }
      })
    }

   
  }



  // getChatByContact(contactId) {
  //   this.chatService.getChatByContact(contactId)
  //     .subscribe(res => {
  //       console.log('from sub', res);
  //     }, err => {
  //       console.log(err);
  //     });
  // }
}
