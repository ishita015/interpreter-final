import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-interpreter-tracking',
  templateUrl: './interpreter-tracking.component.html',
  styleUrls: ['./interpreter-tracking.component.css']
})
export class InterpreterTrackingComponent implements OnInit {

  ngOnInit(){

  }
   // google maps zoom level
   zoom: number = 8;
  
   // initial center position for the map
   lat: number = 51.673858;
   lng: number = 7.815982;
 
   clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
   }
   
   mapClicked($event: MouseEvent) {
     this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       draggable: true
     });
   }
   
   markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
   }
   
   markers: marker[] = [
     {
       lat: 51.673858,
       lng: 7.815982,
       label: 'A',
       draggable: true
     },
   ]
 }
 
 // just an interface for type safety.
 interface marker {
   lat: number;
   lng: number;
   label?: string;
   draggable: boolean;
 }
 
