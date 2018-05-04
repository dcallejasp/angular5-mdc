import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatCheckboxModule, MatMenuModule, MatIconModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatCheckboxModule, MatMenuModule, MatIconModule, MDCTab, MDCTabFoundation, ],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatCheckboxModule, MatMenuModule, MatIconModule, MDCTab, MDCTabFoundation, ],
})
export class MaterialModule { }