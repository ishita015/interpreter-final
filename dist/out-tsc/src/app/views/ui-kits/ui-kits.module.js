var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiKitsRoutingModule } from './ui-kits-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CardsEcommerceComponent } from './cards-ecommerce/cards-ecommerce.component';
import { FormsModule } from '@angular/forms';
import { AccordionsComponent } from './accordions/accordions.component';
import { ModalsComponent } from './modals/modals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ToastrModule } from 'ngx-toastr';
import { CardMetricsComponent } from './card-metrics/card-metrics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BadgesComponent } from './badges/badges.component';
import { CardWidgetsComponent } from './card-widgets/card-widgets.component';
import { LoadersComponent } from './loaders/loaders.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { ButtonsLoadingComponent } from './buttons-loading/buttons-loading.component';
import { LaddaModule } from 'angular2-ladda';
import { PopoverComponent } from './popover/popover.component';
import { RatingComponent } from './rating/rating.component';
var UiKitsModule = /** @class */ (function () {
    function UiKitsModule() {
    }
    UiKitsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ToastrModule,
                NgbModule,
                NgxEchartsModule,
                SharedComponentsModule,
                SharedDirectivesModule,
                LaddaModule.forRoot({ style: 'expand-left' }),
                UiKitsRoutingModule
            ],
            declarations: [
                ButtonsComponent,
                CardsComponent,
                CardsEcommerceComponent,
                AccordionsComponent,
                ModalsComponent,
                AlertsComponent,
                CardMetricsComponent,
                BadgesComponent,
                CardWidgetsComponent,
                LoadersComponent,
                ButtonsLoadingComponent,
                PopoverComponent,
                RatingComponent
            ]
        })
    ], UiKitsModule);
    return UiKitsModule;
}());
export { UiKitsModule };
//# sourceMappingURL=ui-kits.module.js.map