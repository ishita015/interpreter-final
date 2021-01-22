import { startOfDay } from 'date-fns';
var CalendarAppEvent = /** @class */ (function () {
    function CalendarAppEvent(data) {
        data = data || {};
        this.start = new Date(data.start) || startOfDay(new Date());
        this.end = data.end ? new Date(data.end) : null;
        this._id = data._id || '';
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#247ba0',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.draggable = data.draggable || true;
        this.resizable = {
            beforeStart: data.resizable && data.resizable.beforeStart || true,
            afterEnd: data.resizable && data.resizable.afterEnd || true
        };
        this.actions = data.actions || [];
        this.allDay = data.allDay || false;
        this.cssClass = data.cssClass || '';
        this.meta = {
            location: data.meta && data.meta.location || '',
            notes: data.meta && data.meta.notes || ''
        };
    }
    return CalendarAppEvent;
}());
export { CalendarAppEvent };
//# sourceMappingURL=calendar-event.model.js.map