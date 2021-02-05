import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
//import { AuthGaurd } from './shared/services/auth.gaurd';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { AuthGaurd } from './shared/services/auth.gaurd';
const adminRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthGaurd]
    },
    {
      path: 'languages',
      loadChildren: () => import('./views/languages/languages.module').then(m => m.LanguagesModule)
    },{
      path: 'lob',
      loadChildren: () => import('./views/lob/languages.module').then(m => m.LanguagesModule)
    }, {
      path: 'language-assignment-settings',
      loadChildren: () => import('./views/language-assignment-settings/languages.module').then(m => m.LanguagesModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
    },
    {
      path: 'set-calculation',
      loadChildren: () => import('./views/set-calculation/set-calculation.module').then(m => m.SetCalculationModule)
    },
    {
      path: 'users',
      loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'interpreter',
      loadChildren: () => import('./views/interpreter-management/interpreter-management.module').then(m => m.InterpreterManagementModule)
    },{
      path: 'client',
      loadChildren: () => import('./views/client-management/interpreter-management.module').then(m => m.InterpreterManagementModule)
    },
    {
      path: 'client-request',
      loadChildren: () => import('./views/interpreter-request/interpreter-request.module').then(m => m.InterpreterRequestModule)
    },{
      path: 'interpreter-request',
      loadChildren: () => import('./views/interpreter-request/interpreter-request.module').then(m => m.InterpreterRequestModule)
    },
    {
      path: 'permission',
      loadChildren: () => import('./views/permission/permission.module').then(m => m.PermissionModule)
    },

    {
      path: 'roleset',
      loadChildren: () => import('./views/roleset/roleset.module').then(m => m.RolesetModule)
    },
    {
      path: 'user-request',
      loadChildren: () => import('./views/user-request/user-request.module').then(m => m.UserRequestModule)
    },

    // {
    //   path: 'chating',
    //   loadChildren: () => import('./views/chating/chating.module').then(m => m.ChatingModule)
    // },
    {
      path: 'uikits',
      loadChildren: () => import('./views/ui-kits/ui-kits.module').then(m => m.UiKitsModule)
    },
    {
      path: 'forms',
      loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule)
    },
    {
      path: 'invoice',
      loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule)
    },
    {
      path: 'inbox',
      loadChildren: () => import('./views/inbox/inbox.module').then(m => m.InboxModule)
    },
    {
      path: 'calendar',
      loadChildren: () => import('./views/calendar/calendar.module').then(m => m.CalendarAppModule)
    },
    {
      path: 'chat',
      loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule)
    },
    {
      path: 'contacts',
      loadChildren: () => import('./views/contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
      path: 'tables',
      loadChildren: () => import('./views/data-tables/data-tables.module').then(m => m.DataTablesModule)
    },
    {
      path: 'pages',
      loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    }
  ];

const routes: Routes = [
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
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutSidebarLargeComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
