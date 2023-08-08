import { Pipe, PipeTransform } from '@angular/core';
import { SBMenuItem } from '@sertao-bar/models/menu-item';

@Pipe({
  name: 'sectionItems',
})
export class SBSectionItemsPipe implements PipeTransform {
  transform(
    section: string,
    sections: Map<string, SBMenuItem[]>
  ): SBMenuItem[] | undefined {
    return sections.get(section);
  }
}
