import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ajax } from 'rxjs/ajax';

import { LoginRouting} from './login.routing';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, AuthService} from 'ng4-social-login';
const config = new AuthServiceConfig([
{
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2079698572291099')
}
],false);

export function provideConfig(){
    return config;
}
@NgModule({
    declarations: [
       LoginComponent
    ],
    imports: [
        // Angular
        SocialLoginModule,
        HttpModule,
        RouterModule,
        CommonModule,

        // Componente
        LoginRouting
        ],
    providers: [
        
        AuthService,
        {provide: AuthServiceConfig, useFactory: provideConfig}

    ],
    bootstrap: [LoginComponent]
})

export class LoginModule { }