import { async, TestBed } from '@angular/core/testing';
import { HeaderSidebarCompactComponent } from './header-sidebar-compact.component';
describe('HeaderSidebarCompactComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HeaderSidebarCompactComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HeaderSidebarCompactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-sidebar-compact.component.spec.js.map