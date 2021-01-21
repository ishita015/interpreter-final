import { async, TestBed } from '@angular/core/testing';
import { ChatLeftSidebarComponent } from './chat-left-sidebar.component';
describe('ChatLeftSidebarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChatLeftSidebarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChatLeftSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-left-sidebar.component.spec.js.map