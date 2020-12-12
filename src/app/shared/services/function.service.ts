import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  // ---------------------------- US date formate start----------------------------//
  
  dateFormate(){
    let today = new Date('dd/MM/yyyy');
    console.log(today);
    
    today.toLocaleDateString("en-US")
  }

  // ---------------------------- US date formate end----------------------------//

}
