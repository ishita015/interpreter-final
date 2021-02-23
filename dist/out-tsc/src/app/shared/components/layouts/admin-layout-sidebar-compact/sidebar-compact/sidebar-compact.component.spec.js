import { async, TestBed } from '@angular/core/testing';
import { SidebarCompactComponent } from './sidebar-compact.component';
describe('SidebarCompactComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarCompactComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarCompactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-compact.component.spec.js.map