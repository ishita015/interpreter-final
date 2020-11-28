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
    array1_Obj;array2_Obj;array3_Obj;array4_Obj;array5_Obj;
  
    constructor() {
       
        
        this.roleData = JSON.parse(localStorage.getItem('Allpermission'));
        // console.log("roleData--", this.roleData);
        this.array1_Obj = this.roleData['data'][0];  //for dashboard
        this.array2_Obj = this.roleData['data'][1];  //for Language
        this.array3_Obj = this.roleData['data'][2];  //for import Language
        this.array4_Obj = this.roleData['data'][3];  //for User
        this.array5_Obj = this.roleData['data'][4];  //for User request
        // if(this.array1_Obj.userRoleId != '1'){ //1 = super admin
        //     if(this.array1_Obj.module_id == 1){ 
        //         if(this.array1_Obj.view_permission === 'false'){
        //             this.defaultMenu.splice(0, 1);
        //         }   
        //     }   
        // }

        if(this.array1_Obj.userRoleId != '1'){ //1 = super admin
            if(this.array4_Obj.module_id == 4){  //4 = USER
                if(this.array4_Obj.view_permission === 'false'){
                    //remove user tab in sidebar
                    this.defaultMenu.splice(3, 1);
                }   
            }
            /*
            if(this.array4_Obj.module_id == 1){  //1 = Dashboard
                if(this.array4_Obj.view_permission === 'false'){
                    //remove dashboard tab in sidebar
                    this.defaultMenu.splice(0, 1);
                }   
            }
            */
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

        
        // for (var i = 0; i < this.array1_Obj.length; i++) {
        //     console.log("module_id", this.array1_Obj[i].module_id);
        //     console.log("view_permission", this.array1_Obj[i].view_permission);
        //     if(this.array1_Obj[i].module_id == i+1){ 
        //         if(this.array1_Obj[i].view_permission === 'false'){
        //             this.defaultMenu.splice(i, 1);
        //         }   
        //     } 
        // }


/*
        for (var i = 0; i < this.array1_Obj.length; i++) {
            console.log("userRoleId",this.array1_Obj[i].userRoleId);
            console.log("module_id",this.array1_Obj[i].module_id);
            if(this.array1_Obj[i].userRoleId != '1'){ //1 = super admin
                if(this.array1_Obj[i].module_id == '1'){ //dashboard
                    if(this.array1_Obj[i].view_permission === 'false'){
                        this.defaultMenu.splice(0, 1);

                        //  console.log("defaultMenu", this.defaultMenu[1].sub);

                    }   
                } 

                // if(this.array1_Obj[i].module_id == '2' && this.array1_Obj[i].module_id == '3'){
                //     if(this.array1_Obj[i].view_permission === 'false'){

                //     }
                // }

                if(this.array1_Obj[i].module_id == '2'){ //language
                    if(this.array1_Obj[i].view_permission === 'false'){
                        this.defaultMenu[1].sub.splice(0,1);
                        // this.defaultMenu.splice(1, 1);
                    }   
                }  
                if(this.array1_Obj[i].module_id == '3'){ //import language
                    if(this.array1_Obj[i].view_permission === 'false'){
                        this.defaultMenu[1].sub.splice(1,1);
                        // this.defaultMenu.splice(1, 1);
                    }   
                }  

                // if(this.array1_Obj[i].view_permission === 'false'){
                this.defaultMenu[1].sub.splice(2,1); //for permission module 
                    // this.defaultMenu.splice(1, 1);
                // }  


                if(this.array1_Obj[i].module_id == '4'){ //User
                    if(this.array1_Obj[i].view_permission === 'false'){
                        this.defaultMenu[1].sub.splice(3,1);
                        // this.defaultMenu.splice(1, 1);
                    }   
                }   

                if(this.array1_Obj[i].module_id == '5'){ //User request
                    if(this.array1_Obj[i].view_permission === 'false'){
                        this.defaultMenu[1].sub.splice(4,1);
                        // this.defaultMenu.splice(1, 1);
                    }   
                }  

            }
        }   
*/
        // add_permission: "true"
        // delete_permission: "true"
        // edit_permission: "false"
        // id: 4
        // // module_id: 1 = dashboard, 2 = language, 3= import, 4 = user, 5=user request
        // module_name: "User"
        // status_permission: "false"
        // userRoleId: 2
        // view_permission: "true"


            // console.log("module_id-",this.array1_Obj.module_id)
            // console.log("view_permission-",this.array1_Obj.view_permission)
        // if(this.array1_Obj.userRoleId != '1'){
            // if(this.array1_Obj.module_id == '1'){ //dashboard
            //     if(this.array1_Obj.view_permission === 'false'){
            //         this.defaultMenu.splice(0, 1);
            //     }   
            // } 
             
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
            name: 'Language',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'Language-List', state: '/languages/list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Import Language', state: '/languages/excelImport', type: 'link' },
            ]
        },
        {
            name: 'Role & Permission',
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
            // sub: [
            //     { icon: 'i-Clock-3', name: 'Languages-List', state: '/languages/list', type: 'link' },  
            // ]
        },
        {   
            name: 'User Request',
            type: 'link',
            icon: 'i-Add-User',
            state: '/user-request/list',
          
        },
        {   
            name: 'Interpreter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Bell', name: 'Request-List', state: '/interpreter-request/list', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: 'Accept List', state: '/interpreter-request/accept-list', type: 'link' },
            ]
        },
       /* {
            name: 'Interpreter Request',
            description: '600+ premium icons',
            type: 'link',
            icon: 'i-Cloud-Sun',
            state: '/interpreter-request/list'
        },*/
       
        // {
        //     name: 'UI kits',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        //     type: 'dropDown',
        //     icon: 'i-Library',
        //     sub: [
        //         { icon: 'i-Bell', name: 'Alerts', state: '/uikits/alerts', type: 'link' },
        //         { icon: 'i-Split-Horizontal-2-Window', name: 'Accordions', state: '/uikits/accordions', type: 'link' },
        //         { icon: 'i-Medal-2', name: 'Badges', state: '/uikits/badges', type: 'link' },
        //         {
        //             icon: 'i-Arrow-Right-in-Circle',
        //             name: 'Buttons',
        //             type: 'dropDown',
        //             sub: [
        //                 { name: 'Bootstrap Buttons', state: '/uikits/buttons', type: 'link' },
        //                 { name: 'Loding Buttons', state: '/uikits/buttons-loading', type: 'link' }
        //             ]
        //         },
        //         { icon: 'i-ID-Card', name: 'Cards', state: '/uikits/cards', type: 'link' },
        //         { icon: 'i-Line-Chart-2', name: 'Cards metrics', state: '/uikits/cards-metrics', type: 'link' },
        //         { icon: 'i-Credit-Card', name: 'Cards widget', state: '/uikits/cards-widget', type: 'link' },
        //         { icon: 'i-Full-Cart', name: 'Cards ecommerce', state: '/uikits/cards-ecommerce', type: 'link' },
        //         { icon: 'i-Duplicate-Window', name: 'Modals', state: '/uikits/modals', type: 'link' },
        //         { icon: 'i-Speach-Bubble-3', name: 'Popover', state: '/uikits/popover', type: 'link' },
        //         { icon: 'i-Like', name: 'Rating', state: '/uikits/rating', type: 'link' },
        //         { icon: 'i-Loading-3', name: 'Loaders', state: '/uikits/loaders', type: 'link' },
        //     ]
        // },
        // {
        //     name: 'Apps',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Computer-Secure',
        //     sub: [
        //         { icon: 'i-Add-File', name: 'Invoice Builder', state: '/invoice', type: 'link' },
        //         { icon: 'i-Email', name: 'Inbox', state: '/inbox', type: 'link' },
        //         { icon: 'i-Speach-Bubble-3', name: 'Chat', state: '/chat', type: 'link' },
        //         { icon: 'i-Calendar', name: 'Calendar', state: '/calendar', type: 'link' },
        //     ]
        // },
        // {
        //     name: 'Forms',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-File-Clipboard-File--Text',
        //     sub: [
        //         { icon: 'i-File-Clipboard-Text--Image', name: 'Basic components', state: '/forms/basic', type: 'link' },
        //         { icon: 'i-Split-Vertical', name: 'Form layouts', state: '/forms/layouts', type: 'link' },
        //         { icon: 'i-Receipt-4', name: 'Input Group', state: '/forms/input-group', type: 'link' },
        //         { icon: 'i-File-Edit', name: 'Input Mask', state: '/forms/input-mask', type: 'link' },
        //         { icon: 'i-Tag-2', name: 'Tag Input', state: '/forms/tag-input', type: 'link' },
        //         { icon: 'i-Width-Window', name: 'Wizard', state: '/forms/wizard', type: 'link' },
        //         { icon: 'i-Crop-2', name: 'Image Cropper', state: '/forms/img-cropper', type: 'link' },
        //     ]
        // },
        // {
        //     name: 'Data Tables',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-File-Horizontal-Text',
        //     sub: [
        //         { icon: 'i-File-Horizontal-Text', name: 'List', state: '/tables/list', type: 'link' },
        //         { icon: 'i-Full-View-Window', name: 'Fullscreen', state: '/tables/full', type: 'link' },
        //         { icon: 'i-Code-Window', name: 'Paging', state: '/tables/paging', type: 'link' },
        //         { icon: 'i-Filter-2', name: 'Filter', state: '/tables/filter', type: 'link' },
        //     ]
        // },
        // {
        //     name: 'Sessions',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Administrator',
        //     sub: [
        //         { icon: 'i-Add-User', name: 'Sign up', state: '/sessions/signup', type: 'link' },
        //         { icon: 'i-Checked-User', name: 'Sign in', state: '/sessions/signin', type: 'link' },
        //         { icon: 'i-Find-User', name: 'Forgot', state: '/sessions/forgot', type: 'link' }
        //     ]
        // },
        // {
        //     name: 'Pages',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Windows-2',
        //     sub: [
        //         { icon: 'i-Male', name: 'User Profile', state: '/pages/profile', type: 'link' }
        //     ]
        // },
        // {
        //     name: 'Icons',
        //     description: '600+ premium icons',
        //     type: 'link',
        //     icon: 'i-Cloud-Sun',
        //     state: '/icons/iconsmind'
        // },
        // {
        //     name: 'Others',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Double-Tap',
        //     sub: [
        //         { icon: 'i-Error-404-Window', name: 'Not found', state: '/others/404', type: 'link' }
        //     ]
        // },
        // {
        //     name: 'Doc',
        //     type: 'extLink',
        //     tooltip: 'Documentation',
        //     icon: 'i-Safe-Box1',
        //     state: 'http://demos.ui-lib.com/gull-doc'
        // }
    ];


    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
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
        
        

    }
}
