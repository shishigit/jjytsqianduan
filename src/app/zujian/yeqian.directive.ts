import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appYeqian]'
})
export class YeqianDirective
{
    constructor(
        public readonly viewContainerRef: ViewContainerRef
    )
    {
    }
}
