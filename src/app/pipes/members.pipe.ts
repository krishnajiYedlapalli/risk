import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'memberPipe',
    pure: false
})
export class MemberPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.MemberName.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}