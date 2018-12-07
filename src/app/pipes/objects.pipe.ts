import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'objectPipe',
    pure: false
})
export class ObjectPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.objectName.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}