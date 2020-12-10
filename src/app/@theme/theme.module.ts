import  { NgModule, ModuleWithProviders} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {RouterModule} from '@angular/router'
import { GuestLayoutComponent } from './layouts/guest-layout.component'
import { HeaderComponent } from './nav-components/header/header.component'
import { FooterComponent } from './nav-components/footer/footer.component'

const COMPONENTS =[GuestLayoutComponent, HeaderComponent, FooterComponent]

@NgModule({
    declarations: [
      ...COMPONENTS
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
      RouterModule
    ],
    exports: []
  })

  export class ThemeModule{
      static forRoot() : ModuleWithProviders<ThemeModule>{
          return  <ModuleWithProviders<ThemeModule>>{
              ngModule:ThemeModule,
              providers:[]
          }
      }
  }