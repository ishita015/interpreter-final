import { async, TestBed } from '@angular/core/testing';
import { AdminLayoutSidebarCompactComponent } from './admin-layout-sidebar-compact.component';
describe('AdminLayoutSidebarCompactComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminLayoutSidebarCompactComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminLayoutSidebarCompactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-layout-sidebar-compact.component.spec.js.map