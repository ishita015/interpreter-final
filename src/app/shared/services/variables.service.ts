import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  public actionType; /*------Add Edit Type Data variable------*/
  public loadingCollection = false;
  public user_chat_img = false;
 
  constructor() { }
}
