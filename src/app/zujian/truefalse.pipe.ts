import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truefalse'
})
export class TruefalsePipe implements PipeTransform
{
    transform(value?: boolean, ...args: unknown[]): unknown
    {
        if (value === undefined) return ""
        if (value) return '是'
        return '否';
    }
}
