var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CalendarEventDB } from '../../shared/inmemory-db/calendarEvents';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarEventDB } from 'src/app/shared/inmemory-db/calendar-events';
var CalendarAppService = /** @class */ (function () {
    function CalendarAppService(http) {
        this.http = http;
    }
    CalendarAppService.prototype.getEvents = function () {
        // return this.http.get('api/calendar/events')
        // .map((events: CalendarEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        var _this = this;
        var eventDB = new CalendarEventDB();
        return of(eventDB.events)
            .pipe(map(function (events) {
            _this.events = events;
            return events;
        }));
    };
    CalendarAppService.prototype.addEvent = function (event) {
        // return this.http.post('api/calendar/events', event)
        // .map((events: CalendarAppEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events.push(event);
        return of(this.events);
    };
    CalendarAppService.prototype.updateEvent = function (event) {
        // return this.http.put('api/calendar/events/'+event._id, event)
        // .map((events: CalendarAppEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events = this.events.map(function (e) {
            if (e._id === event._id) {
                return Object.assign(e, event);
            }
            return e;
        });
        return of(this.events);
    };
    CalendarAppService.prototype.deleteEvent = function (eventID) {
        // return this.http.delete('api/calendar/events/'+eventID)
        // .map((events: CalendarAppEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events = this.events.filter(function (e) { return e._id !== eventID; });
        return of(this.events);
    };
    CalendarAppService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], CalendarAppService);
    return CalendarAppService;
}());
export { CalendarAppService };
//# sourceMappingURL=calendar-app.service.js.map