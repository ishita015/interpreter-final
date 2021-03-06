import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    selectedItem: IMenuItem;
    roleData;
    roleId;
    id=JSON.parse(localStorage.getItem('userId'));
    constructor( private route: ActivatedRoute,) {
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));  
    }

  

    //admin
    defaultMenu: IMenuItem[] = [
        {   
            name: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/dashboard/v1',
        },
        {   
            name: 'Languages',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'Language List', state: '/languages/list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Import Language', state: '/languages/excelImport', type: 'link' },
                { icon: 'i-Library', name: 'Language Assignment Settings', state: '/language-assignment-settings/list', type: 'link' },
            ]
        },
        {
            name: 'User Role & Permissions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'link',
            icon: 'i-Library',
            state: '/permission/rolelist',
        },
        {   
            name: 'User management',
         
            type: 'link',
            icon: 'i-Add-User',
            state: '/users/user-list',
        },
        {   
            name: 'Interpreter management',
            type: 'link',
            icon: 'i-Add-User',
            state: '/interpreter/interpreter-list',
        },{   
            name: 'Client management',
            type: 'link',
            icon: 'i-Add-User',
            state: '/client/client-list',
        },{   
            name: 'LOB',
            type: 'link',
            icon: 'i-Add-User',
            state: '/lob/list',
        },
        {   
            name: 'Requests',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'All Request', state: '/interpreter-request/all-request-list', type: 'link' },
                { icon: 'i-Bell', name: 'New Request', state: '/user-request/list', type: 'link' },
                { icon: 'i-Bell', name: 'Broadcasting', state: '/interpreter-request/list', type: 'link' },
                // { icon: 'i-Split-Horizontal-2-Window', name: 'Assign', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'In Progress', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/interpreter-request/completed-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Cancelled', state: '/interpreter-request/cancelled-list', type: 'link' },
            ]
        },

        {   
            name: 'Set Calculation',
            type: 'link',
            icon: 'i-Add-User',
            state: '/set-calculation/set-calculation-add',
        },

        {   
            name: 'Chat',
            type: 'link',
            icon: 'i-Add-User',
            state: '/chat/chat',
        },
        {   
            name: 'Request-scheduler',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'All Request', state: '/request-scheduler/all-request-list-schedular', type: 'link' },
                { icon: 'i-Bell', name: 'New Request', state: '/request-scheduler/request-list-schedular', type: 'link' },
                { icon: 'i-Bell', name: 'Broadcasting', state: '/request-scheduler/broadcast-list-schedular', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'In Progress', state: '/request-scheduler/progress-list-schedular', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/request-scheduler/completed-list-schedular', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Cencelled', state: '/request-scheduler/cancelled-list-schedular', type: 'link' },
            ]
        },
       
    ];


   userMenu: IMenuItem[] = [
        {   
            name: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/dashboard/v2',
        },
        {   
            name: 'Requests',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'Broadcasting', state: '/interpreter-request/list', type: 'link' },
                // { icon: 'i-Bell', name: 'New-Request', state: '/user-request/pending-request', type: 'link' },
                // { icon: 'i-Bell', name: 'New Request', state: '/interpreter-request/list', type: 'link' },
                // { icon: 'i-Split-Horizontal-2-Window', name: 'Assign', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'In Progress', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Rejected', state: '/interpreter-request/reject-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/interpreter-request/completed-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Cancelled', state: '/interpreter-request/cancelled-list', type: 'link' },
            ]
        },
        {   
            name: 'Chat',
            type: 'link',
            icon: 'i-Add-User',
            state: '/chat/chat',
        },
        {   
            name: 'Profile',
            type: 'link',
            icon: 'i-Add-User',
            state: '/interpreter/interpreter-profile/'+ this.id,
        },
         
    ];
    menuItems = new BehaviorSubject({v1:this.defaultMenu,v2:this.userMenu});

    menuItems$ = this.menuItems.asObservable();


     
    // menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu); //SUPER ADMIN
    // menuItems$ = this.menuItems.asObservable();        
    ngOnInit(){
        
     }


   
}
