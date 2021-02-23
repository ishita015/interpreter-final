import { async, TestBed } from '@angular/core/testing';
import { HeaderSidebarCompactComponent } from './header-sidebar-compact.component';
describe('HeaderSidebarCompactComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderSidebarCompactComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderSidebarCompactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-sidebar-compact.component.spec.js.map