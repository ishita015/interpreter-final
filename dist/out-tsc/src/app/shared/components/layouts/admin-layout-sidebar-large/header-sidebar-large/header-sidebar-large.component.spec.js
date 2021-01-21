import { async, TestBed } from '@angular/core/testing';
import { HeaderSidebarLargeComponent } from './header-sidebar-large.component';
describe('HeaderSidebarLargeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HeaderSidebarLargeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HeaderSidebarLargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-sidebar-large.component.spec.js.map