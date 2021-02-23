import { async, TestBed } from '@angular/core/testing';
import { HeaderSidebarLargeComponent } from './header-sidebar-large.component';
describe('HeaderSidebarLargeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderSidebarLargeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderSidebarLargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-sidebar-large.component.spec.js.map