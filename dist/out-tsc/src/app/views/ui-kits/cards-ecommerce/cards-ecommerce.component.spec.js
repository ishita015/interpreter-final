import { async, TestBed } from '@angular/core/testing';
import { CardsEcommerceComponent } from './cards-ecommerce.component';
describe('CardsEcommerceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CardsEcommerceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CardsEcommerceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cards-ecommerce.component.spec.js.map