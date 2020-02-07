import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { ListComponent } from './list/list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';

import {Routes} from '@angular/router'

export const appRoutes: Routes=[

    { path :'home', component : HomeComponent} ,

    {
        path:'',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children:[
            { path :'members', component : MemberListComponent} ,
            { path :'list', component : ListComponent},
            
        ]   
    },
    { path :'**',  redirectTo:'home', pathMatch:'full'} ,
];
