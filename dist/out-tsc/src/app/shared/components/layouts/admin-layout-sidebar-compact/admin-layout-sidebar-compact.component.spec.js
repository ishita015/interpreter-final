import { async, TestBed } from '@angular/core/testing';
import { AdminLayoutSidebarCompactComponent } from './admin-layout-sidebar-compact.component';
describe('AdminLayoutSidebarCompactComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminLayoutSidebarCompactComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminLayoutSidebarCompactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-layout-sidebar-compact.component.spec.js.map