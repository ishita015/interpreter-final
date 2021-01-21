import { async, TestBed } from '@angular/core/testing';
import { AdminLayoutSidebarLargeComponent } from './admin-layout-sidebar-large.component';
describe('AdminLayoutSidebarLargeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminLayoutSidebarLargeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminLayoutSidebarLargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-layout-sidebar-large.component.spec.js.map