var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/utils';
let CalendarFormDialogComponent = /** @class */ (() => {
    let CalendarFormDialogComponent = class CalendarFormDialogComponent {
        constructor(activeModal, formBuilder) {
            this.activeModal = activeModal;
            this.formBuilder = formBuilder;
        }
        ngOnInit() {
            setTimeout(() => {
                if (this.action === 'edit') {
                    this.dialogTitle = this.event.title;
                }
                else {
                    this.dialogTitle = 'Add Event';
                    this.event = new CalendarAppEvent(this.data.event);
                }
                this.eventForm = this.buildEventForm(this.event);
            }, 100);
            this.eventForm = this.buildEventForm(this.event);
        }
        buildEventForm(event = { start: null, title: null, color: { primary: '', secondary: '' }, meta: { location: '', notes: '' } }) {
            return new FormGroup({
                _id: new FormControl(event._id),
                title: new FormControl(event.title, Validators.required),
                start: new FormControl(Utils.dateToNgbDate(event.start), Validators.required),
                end: new FormControl(Utils.dateToNgbDate(event.end)),
                allDay: new FormControl(event.allDay),
                color: this.formBuilder.group({
                    primary: new FormControl(event.color.primary),
                    secondary: new FormControl(event.color.secondary)
                }),
                meta: this.formBuilder.group({
                    location: new FormControl(event.meta.location),
                    notes: new FormControl(event.meta.notes)
                })
            });
        }
    };
    CalendarFormDialogComponent = __decorate([
        Component({
            selector: 'app-calendar-form-dialog',
            templateUrl: './calendar-form-dialog.component.html',
            styleUrls: ['./calendar-form-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [NgbActiveModal,
            FormBuilder])
    ], CalendarFormDialogComponent);
    return CalendarFormDialogComponent;
})();
export { CalendarFormDialogComponent };
//# sourceMappingURL=calendar-form-dialog.component.js.map