import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: { name: string; done: boolean }[], searchText: string): { name: string; done: boolean }[] {
    if (!value) return [];
    if (!searchText) return value;
    return value.filter(task =>
      task.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }


}
