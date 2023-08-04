import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'src/models/menu-item';

@Pipe({
  name: 'sectionItems',
})
export class SBSectionItemsPipe implements PipeTransform {
  transform(
    section: string,
    sections: Map<string, MenuItem[]>
  ): MenuItem[] | undefined {
    return sections.get(section);
  }
}
