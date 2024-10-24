import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primengrtl/api';
import { Code } from '@domain/code';

@Component({
    selector: 'mask-doc',
    template: `
        <app-docsectiontext>
            <p>Adding <i>mask</i> property displays a modal layer behind the popup items.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 350px; position: relative;" class="speeddial-mask-demo">
                <p-toast />
                <p-speedDial [model]="items" direction="top" [mask]="true" />
            </div>
        </div>
        <app-code [code]="code" selector="speed-dial-mask-demo"></app-code>
    `,
    providers: [MessageService]
})
export class MaskDoc implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }

    code: Code = {
        basic: `<p-speedDial
    [model]="items"
    direction="top"
    [mask]="true" />`,

        html: `<div class="card">
    <div style="height: 350px; position: relative;" class="speeddial-mask-demo">
        <p-toast />
        <p-speedDial
            [model]="items"
            direction="top"
            [mask]="true" />
    </div>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primengrtl/api';
import { SpeedDialModule } from 'primengrtl/speeddial';
import { ToastModule } from 'primengrtl/toast';

@Component({
    selector: 'speed-dial-mask-demo',
    templateUrl: './speed-dial-mask-demo.html',
    styles: [
        \`:host ::ng-deep {
            .speeddial-mask-demo {
                .p-speeddial-direction-top {
                    inset-inline-start: 0;
                    bottom: 0;
                }
            }
        }\`
    ],
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeedDialMaskDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`,

        scss: `:host ::ng-deep {
    .speeddial-mask-demo {
        .p-speeddial-direction-top {
            inset-inline-start: 0;
            bottom: 0;
        }
    }
}`
    };
}
