var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CardsEcommerceComponent } from './cards-ecommerce/cards-ecommerce.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { ModalsComponent } from './modals/modals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CardMetricsComponent } from './card-metrics/card-metrics.component';
import { BadgesComponent } from './badges/badges.component';
import { CardWidgetsComponent } from './card-widgets/card-widgets.component';
import { LoadersComponent } from './loaders/loaders.component';
import { ButtonsLoadingComponent } from './buttons-loading/buttons-loading.component';
import { PopoverComponent } from './popover/popover.component';
import { RatingComponent } from './rating/rating.component';
var routes = [
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: 'accordions',
        component: AccordionsComponent
    },
    {
        path: 'badges',
        component: BadgesComponent
    },
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'buttons-loading',
        component: ButtonsLoadingComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'cards-widget',
        component: CardWidgetsComponent
    },
    {
        path: 'cards-ecommerce',
        component: CardsEcommerceComponent
    },
    {
        path: 'cards-metrics',
        component: CardMetricsComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'loaders',
        component: LoadersComponent
    },
    {
        path: 'popover',
        component: PopoverComponent
    },
    {
        path: 'rating',
        component: RatingComponent
    }
];
var UiKitsRoutingModule = /** @class */ (function () {
    function UiKitsRoutingModule() {
    }
    UiKitsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UiKitsRoutingModule);
    return UiKitsRoutingModule;
}());
export { UiKitsRoutingModule };
//# sourceMappingURL=ui-kits-routing.module.js.map