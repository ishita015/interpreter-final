import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    array1_Obj;array2_Obj;array3_Obj;array4_Obj;array5_Obj;
  
    constructor() {
       
        
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        this.roleId = JSON.parse(localStorage.getItem('roleId'));
        // console.log("roleData--", this.roleData);
        this.array1_Obj = this.roleData['data'][0];  //for dashboard
        this.array2_Obj = this.roleData['data'][1];  //for Language
        this.array3_Obj = this.roleData['data'][2];  //for import Language
        this.array4_Obj = this.roleData['data'][3];  //for User
        this.array5_Obj = this.roleData['data'][4];  //for User request
       

        if(this.array1_Obj.userRoleId != '1'){ //1 = super admin
            if(this.array4_Obj.module_id == 4){  //4 = USER
                if(this.array4_Obj.view_permission === 'false'){
                    //remove user tab in sidebar
                    this.defaultMenu.splice(3, 1);
                }   
            }
            //other user not visible role & permission
            this.defaultMenu.splice(2, 1);
            // if language or import language are false than hide language tab in sidebar
            if( ((this.array2_Obj.module_id == 2) && (this.array2_Obj.view_permission === 'false' )) && ((this.array3_Obj.module_id == 3) && (this.array3_Obj.view_permission === 'false' )) ){   
                //hide language tab in sidebar
                this.defaultMenu.splice(1, 1);
            }else{
                if(this.array2_Obj.module_id == 2){  //2 = Language
                    if(this.array2_Obj.view_permission === 'false'){
                        //hide language sub tab in sidebar
                        this.defaultMenu.splice(2, 1);
                    }   
                }
                if(this.array3_Obj.module_id == 3){  //3 = Import Language
                    if(this.array3_Obj.view_permission === 'false'){
                        //hide import language sub tab in sidebar
                        this.defaultMenu[1].sub.splice(1, 1);
                    }   
                }
            }


            
            if(this.array5_Obj.module_id == 5){  //4 = user request
                if(this.array5_Obj.view_permission === 'false'){
                    //hide user request tab in sidebar
                    this.defaultMenu.splice(4,1);
                }   
            }
        }
    }

  
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
                { icon: 'i-Bell', name: 'Language-List', state: '/languages/list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Import Language', state: '/languages/excelImport', type: 'link' },
            ]
        },
        {
            name: 'User Roles & Permission',
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
        // {   
        //     name: 'User Request',
        //     type: 'link',
        //     icon: 'i-Add-User',
        //     state: '/user-request/list',
          
        // },
        {   
            name: 'Requests',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                
                { icon: 'i-Bell', name: 'New-Request', state: '/user-request/list', type: 'link' },
                { icon: 'i-Bell', name: 'Assign', state: '/interpreter-request/list', type: 'link' },
                // { icon: 'i-Split-Horizontal-2-Window', name: 'Assign', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'In-Progress', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/interpreter-request/completed-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Cancelled', state: '/interpreter-request/cancelled-list', type: 'link' },
            ]
        },
    ];


    userMenu: IMenuItem[] = [
        {   
            name: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/dashboard/v1',
        },
        {   
            name: 'Requests',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'New-Request', state: '/interpreter-request/list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'In-Progress', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Rejected', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Completed', state: '/interpreter-request/accept-list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Cancelled', state: '/interpreter-request/accept-list', type: 'link' },
            ]
        },
    ];

        
        // sets iconMenu as default;
        // menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu); //SUPER ADMIN
        
        // if(this.roleId=='1'){
            menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu); //SUPER ADMIN
        // }else{
        //     menuItems = new BehaviorSubject<IMenuItem[]>(this.userMenu);  // INTERPRETER ADMIN
        // }

        // navigation component has subscribed to this Observable
        menuItems$ = this.menuItems.asObservable();        


    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;//1 = super admin
    // }

    ngOnInit(){
        
        // if(this.roleId=='1'){
        //     menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu); //SUPER ADMIN
        // }else{
        //     menuItems = new BehaviorSubject<IMenuItem[]>(this.userMenu);  // INTERPRETER ADMIN
        // }

    }
}
