import { async, TestBed } from '@angular/core/testing';
import { CardsEcommerceComponent } from './cards-ecommerce.component';
describe('CardsEcommerceComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardsEcommerceComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CardsEcommerceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cards-ecommerce.component.spec.js.map