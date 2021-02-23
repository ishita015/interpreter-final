import { async, TestBed } from '@angular/core/testing';
import { ButtonsLoadingComponent } from './buttons-loading.component';
describe('ButtonsLoadingComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonsLoadingComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonsLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buttons-loading.component.spec.js.map