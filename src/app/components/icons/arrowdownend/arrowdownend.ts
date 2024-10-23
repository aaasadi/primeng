import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/baseicon';

@Component({
    selector: 'ArrowDownEndIcon',
    standalone: true,
    imports: [BaseIcon],
    template: `
        @if (isRTL) {
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
                <path
                    d="M10.092 11.9564C10.2662 11.9564 10.4332 11.8875 10.5564 11.7649C10.6796 11.6422 10.7488 11.4759 10.7488 11.3025C10.7488 11.129 10.6796 10.9627 10.5564 10.84C10.4332 10.7174 10.2662 10.6485 10.092 10.6485H4.24193L11.7909 3.13239C11.8555 3.07252 11.9072 3.00033 11.9431 2.92011C11.979 2.83989 11.9983 2.7533 11.9999 2.66549C12.0015 2.57768 11.9852 2.49046 11.9522 2.40904C11.9192 2.32761 11.87 2.25364 11.8076 2.19154C11.7453 2.12944 11.671 2.08049 11.5892 2.0476C11.5074 2.01471 11.4198 1.99855 11.3316 2.0001C11.2434 2.00165 11.1564 2.02087 11.0759 2.05661C10.9953 2.09236 10.9228 2.14389 10.8626 2.20814L3.31363 9.72424V3.8997C3.31363 3.72626 3.24443 3.55992 3.12126 3.43728C2.99808 3.31464 2.83102 3.24574 2.65682 3.24574C2.48262 3.24574 2.31555 3.31464 2.19238 3.43728C2.0692 3.55992 2 3.72626 2 3.8997V11.346C2.00046 11.433 2.01832 11.5189 2.05255 11.5989C2.10343 11.7169 2.18762 11.8175 2.29489 11.8887C2.40217 11.9599 2.5279 11.9986 2.65682 12L10.092 11.9564Z"
                    fill="currentColor"
                />
            </svg>
        } @else {
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
                <path
                    d="M12 3.88141C12 3.70664 11.9306 3.53903 11.807 3.41545C11.6834 3.29187 11.5158 3.22244 11.341 3.22244C11.1662 3.22244 10.9986 3.29187 10.875 3.41545C10.7515 3.53903 10.682 3.70664 10.682 3.88141V9.75069L3.1082 2.17686C2.98328 2.06046 2.81806 1.99709 2.64734 2.0001C2.47662 2.00311 2.31373 2.07227 2.19299 2.19301C2.07226 2.31375 2.0031 2.47663 2.00009 2.64735C1.99708 2.81807 2.06045 2.9833 2.17685 3.10821L9.75068 10.682H3.8814C3.70663 10.682 3.53901 10.7515 3.41543 10.8751C3.29185 10.9986 3.22242 11.1663 3.22242 11.341C3.22242 11.5158 3.29185 11.6834 3.41543 11.807C3.53901 11.9306 3.70663 12 3.8814 12H11.3849C11.4725 11.9995 11.5592 11.9816 11.6397 11.9473C11.7439 11.8934 11.832 11.8131 11.8952 11.7144C11.9584 11.6157 11.9946 11.5021 12 11.385V3.88141Z"
                    fill="currentColor"
                />
            </svg>
        }
    `
})
export class ArrowDownEndIcon extends BaseIcon {}