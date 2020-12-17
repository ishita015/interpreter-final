import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Step1Modals } from '../modals/step1-modals';
import { Step2Modals } from '../modals/step2-modals';
import { Step3Modals } from '../modals/step3-modals';
import { Step4Modals } from '../modals/step4-modals';
import { Step5Modals } from '../modals/step5-modals';
import { Step6Modals } from '../modals/step6-modals';
import { Step7Modals } from '../modals/step7-modals';
import { Step8Modals } from '../modals/step8-modals';
import { Step10Modals } from '../modals/step10-modals';
import { Step9Modals } from '../modals/step9-modals';
import { Step11Modals } from '../modals/step11-modals';
import { Step12Modals } from '../modals/step12-modals';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url = environment.apiUrl;
  public httpOptions;
  constructor(private http: HttpClient,
    private router:Router,
    private socket: Socket) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  //--------------------------------socket start------------------------------//

  public updatelocation(unique_code) {
    this.socket.emit('updateLatLong', unique_code);
  }


  public getNewLocation = () => {
    return Observable.create((observer) => {
      this.socket.on('responce_location', (message) => {
        observer.next(message);
      });
    });
  }

  interpreterTracking(unique_code): Observable<any> {
    return this.http.post(this.url + '/cesco/interpreterCurrentLocation', { unique_code: unique_code }, this.httpOptions);
  }
  //--------------------------------socket end------------------------------//



  getLanguage(): Observable<any>{
    return this.http.get(this.url + '/cesco/getlanguages' );
  }
  getStepOneForm(step1Info: Step1Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceOne' , step1Info);
  }

  getStepTwoForm(step2Info: Step2Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceTwo' , step2Info);
  }
  
  getStepThreeForm(step3Info: Step3Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceThree' , step3Info);
  }

  getStepFourForm(step4Info: Step4Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceFour' , step4Info);
  }

  getStepFiveForm(step5Info: Step5Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceFive' , step5Info);
  }

  getStepSixForm(step6Info: Step6Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceSix' , step6Info);
  }

  getStepSevenForm(step7Info: Step7Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceSeven' , step7Info);
  }

  getStepEightForm(step8Info: Step8Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceEight' , step8Info);
  }

  getStepNineForm(step9Info: Step9Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceNine' , step9Info);
  }

  getStepTenForm(step10Info: Step10Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceTen' , step10Info);
  }

  getStepElevenForm(step11Info: Step11Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceEleven' , step11Info);
  }

  getStepTwelveForm(step12Info: Step12Modals): Observable<any> {
    return this.http.post(this.url + '/cesco/addServiceTwelve' , step12Info);
  }

}
