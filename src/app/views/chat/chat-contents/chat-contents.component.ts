import { Component, OnInit, ViewChild, ViewChildren, Input, OnDestroy } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ChatService, ChatCollection, User, Chat } from '../chat.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { HttpService } from 'src/app/shared/services/http.service';
import { VariablesService } from 'src/app/shared/services/variables.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-chat-contents',
  templateUrl: './chat-contents.component.html',
  styleUrls: ['./chat-contents.component.scss'],
  animations: [SharedAnimations]
})
export class ChatContentsComponent implements OnInit, OnDestroy {
  user: User = new User();
  activeContact: User = new User();
  public chatCollection: ChatCollection;

  userUpdateSub: Subscription;
  chatUpdateSub: Subscription;
  chatSelectSub: Subscription;

  @Input('matSidenav') matSidenav;
  @ViewChild(PerfectScrollbarDirective) psContainer: PerfectScrollbarDirective;

  @ViewChildren('msgInput') msgInput;
  @ViewChild('msgForm') msgForm: NgForm;
  incomingmsg = [];
  messageList:  string[] = [];
  msg = '';
  userId;
  reciever_id;
  sendData;
  historyData;
  textForm;
  userName;
  message;
  groupId;
  chat_Obj;
  loggeduser;
  login_data
  selectedFile:File = null;
  url:any = '';
  constructor(public chatService: ChatService, private service: HttpService,
    public variable: VariablesService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.loggeduser = JSON.parse(localStorage.getItem('loggeduser'));
    this.login_data = JSON.parse(localStorage.getItem('loginData'));

    this.service.currentMessage.subscribe(message => {
       this.message = (message) ? message : ''
       this.userChat();
    })
    
    this.service
      .getMessages()
      .subscribe((res: string) => {
        this.messageList.push(res);
        this.scrollToBottom();
      });

   }

  ngOnDestroy() {
    if (this.userUpdateSub) { this.userUpdateSub.unsubscribe(); }
    if (this.chatSelectSub) { this.chatSelectSub.unsubscribe(); }
    if (this.chatUpdateSub) { this.chatUpdateSub.unsubscribe(); }
  }

  /*==========Single Image Function Start Here========*/
  onSingleFileChange(event){ 
    this.selectedFile = <File>event.target.files[0];
    const formData: any = new FormData();
    formData.append('file', this.selectedFile);
    this.service.getSingleImage(formData).subscribe(res => {
      console.log("imagesssssssssss",res);
      if(res['status']==1){
        this.service.sendMessage(res['data'],this.userId,this.message.id,this.message.group_id,'image');  
      }

    })
  }
  /*==========Single Image Function End Here========*/


  userChat(){
    this.service.getUserChat(this.userId,this.message.group_id)  
    .subscribe(res => {
      if(res['status'] == 1){
        this.chat_Obj = res['data'];
        this.messageList=this.chat_Obj;
      } else{
         this.messageList=[];
      }
    });
  }
  
  singleImageUpload(){
    console.log("imagesss file",this.selectedFile);
    
    
  }


  message_send(e) {
    console.log(e);
    this.textForm = this.msgForm.form.value.message;
    if(this.textForm!='' && this.textForm!=undefined && this.textForm!=null){
      this.service.sendMessage(this.textForm,this.userId,this.message.id,this.message.group_id,'text');
    }
    this.msgForm.form.reset();
  }


  initMsgForm() {
    setTimeout(() => {
      this.msgForm.reset();
      this.msgInput.first.nativeElement.focus();
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      this.psContainer.update();
      this.psContainer.scrollToBottom(0, 400);
    });
  }
}
