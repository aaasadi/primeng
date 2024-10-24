import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primengrtl/confirmdialog';
import { ButtonModule } from 'primengrtl/button';
import { ToastModule } from 'primengrtl/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { PositionDoc } from './positiondoc';
import { TemplateDoc } from './templatedoc';
import { HeadlessDoc } from './headlessdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ConfirmDialogModule, ButtonModule, ToastModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, PositionDoc, TemplateDoc, HeadlessDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ConfirmDialogDocModule {}
