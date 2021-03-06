import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {RegisterCategoryComponent} from './register-category/category.component';
import {CategoryComponent} from './category.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListCategoryComponent, CategoryComponent, RegisterCategoryComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
