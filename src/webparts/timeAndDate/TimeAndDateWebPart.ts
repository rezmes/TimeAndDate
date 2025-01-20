// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import { Version } from '@microsoft/sp-core-library';
// import {
//   BaseClientSideWebPart,
//   IPropertyPaneConfiguration,
//   PropertyPaneTextField
// } from '@microsoft/sp-webpart-base';

// import * as strings from 'TimeAndDateWebPartStrings';
// import TimeAndDate from './components/TimeAndDate';
// import { ITimeAndDateProps } from './components/ITimeAndDateProps';

// export interface ITimeAndDateWebPartProps {
//   description: string;
// }

// export default class TimeAndDateWebPart extends BaseClientSideWebPart<ITimeAndDateWebPartProps> {

//   public render(): void {
//     const element: React.ReactElement<ITimeAndDateProps > = React.createElement(
//       TimeAndDate,
//       {
//         description: this.properties.description
//       }
//     );

//     ReactDom.render(element, this.domElement);
//   }

//   protected onDispose(): void {
//     ReactDom.unmountComponentAtNode(this.domElement);
//   }

//   protected get dataVersion(): Version {
//     return Version.parse('1.0');
//   }

//   protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
//     return {
//       pages: [
//         {
//           header: {
//             description: strings.PropertyPaneDescription
//           },
//           groups: [
//             {
//               groupName: strings.BasicGroupName,
//               groupFields: [
//                 PropertyPaneTextField('description', {
//                   label: strings.DescriptionFieldLabel
//                 })
//               ]
//             }
//           ]
//         }
//       ]
//     };
//   }
// }


// src/webparts/TimeAndDate/TimeAndDateWebPart.ts
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TimeAndDateWebPartStrings';
import TimeAndDate, { ITimeAndDateState } from './components/TimeAndDate';

export interface ITimeAndDateWebPartProps {}

export default class TimeAndDateWebPart extends BaseClientSideWebPart<ITimeAndDateWebPartProps> {
  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(
      TimeAndDate
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: []
    };
  }
}
