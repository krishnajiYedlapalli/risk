import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'workspacesPipe',
    pure: false
})
export class WorkSpacesPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        debugger;
        return items.filter(item => item.account_name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}