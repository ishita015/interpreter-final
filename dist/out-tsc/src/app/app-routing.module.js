var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
//import { AuthGaurd } from './shared/services/auth.gaurd';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { AuthGaurd } from './shared/services/auth.gaurd';
var adminRoutes = [
    {
        path: 'dashboard',
        loadChildren: function () { return import('./views/dashboard/dashboard.module').then(function (m) { return m.DashboardModule; }); },
        canActivate: [AuthGaurd]
    },
    {
        path: 'languages',
        loadChildren: function () { return import('./views/languages/languages.module').then(function (m) { return m.LanguagesModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return import('./views/profile/profile.module').then(function (m) { return m.ProfileModule; }); }
    },
    {
        path: 'set-calculation',
        loadChildren: function () { return import('./views/set-calculation/set-calculation.module').then(function (m) { return m.SetCalculationModule; }); }
    },
    {
        path: 'users',
        loadChildren: function () { return import('./views/users/users.module').then(function (m) { return m.UsersModule; }); }
    },
    {
        path: 'interpreter',
        loadChildren: function () { return import('./views/interpreter-management/interpreter-management.module').then(function (m) { return m.InterpreterManagementModule; }); }
    }, {
        path: 'client',
        loadChildren: function () { return import('./views/client-management/interpreter-management.module').then(function (m) { return m.InterpreterManagementModule; }); }
    },
    {
        path: 'interpreter-request',
        loadChildren: function () { return import('./views/interpreter-request/interpreter-request.module').then(function (m) { return m.InterpreterRequestModule; }); }
    },
    {
        path: 'permission',
        loadChildren: function () { return import('./views/permission/permission.module').then(function (m) { return m.PermissionModule; }); }
    },
    {
        path: 'roleset',
        loadChildren: function () { return import('./views/roleset/roleset.module').then(function (m) { return m.RolesetModule; }); }
    },
    {
        path: 'user-request',
        loadChildren: function () { return import('./views/user-request/user-request.module').then(function (m) { return m.UserRequestModule; }); }
    },
    // {
    //   path: 'chating',
    //   loadChildren: () => import('./views/chating/chating.module').then(m => m.ChatingModule)
    // },
    {
        path: 'uikits',
        loadChildren: function () { return import('./views/ui-kits/ui-kits.module').then(function (m) { return m.UiKitsModule; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return import('./views/forms/forms.module').then(function (m) { return m.AppFormsModule; }); }
    },
    {
        path: 'invoice',
        loadChildren: function () { return import('./views/invoice/invoice.module').then(function (m) { return m.InvoiceModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return import('./views/inbox/inbox.module').then(function (m) { return m.InboxModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return import('./views/calendar/calendar.module').then(function (m) { return m.CalendarAppModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return import('./views/chat/chat.module').then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'contacts',
        loadChildren: function () { return import('./views/contacts/contacts.module').then(function (m) { return m.ContactsModule; }); }
    },
    {
        path: 'tables',
        loadChildren: function () { return import('./views/data-tables/data-tables.module').then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return import('./views/pages/pages.module').then(function (m) { return m.PagesModule; }); }
    },
    {
        path: 'icons',
        loadChildren: function () { return import('./views/icons/icons.module').then(function (m) { return m.IconsModule; }); }
    }
];
var routes = [
    {
        path: '',
        redirectTo: 'sessions/signin',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: function () { return import('./views/sessions/sessions.module').then(function (m) { return m.SessionsModule; }); }
            }
        ]
    },
    {
        path: '',
        component: BlankLayoutComponent,
        children: [
            {
                path: 'others',
                loadChildren: function () { return import('./views/others/others.module').then(function (m) { return m.OthersModule; }); }
            }
        ]
    },
    {
        path: '',
        component: AdminLayoutSidebarLargeComponent,
        //canActivate: [AuthGaurd],
        children: adminRoutes
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map