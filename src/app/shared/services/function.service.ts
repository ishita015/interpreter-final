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

// ---------------------------- US mobile formate start----------------------------//
  formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null
  }

  // ---------------------------- US mobile formate end----------------------------//
}
