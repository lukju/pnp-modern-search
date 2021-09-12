declare interface ISearchVerticalsWebPartStrings {
  General: {
    WebPartDefaultTitle: string;
  },
  PropertyPane: {
    SearchVerticalsGroupName: string;
    Verticals: {
      PropertyLabel: string;
      PanelHeader: string;
      PanelDescription: string;
      ButtonLabel: string;
      Fields: {
        TabName: string;
        IconName: string;
        IsLink: string;
        LinkUrl: string;
        OpenBehavior: string;
      }
    },
    EventHandlerConfig: {
      GroupName: string;
      Label: string;
      Description: string;
      PlaceholderText: string;
    },
    ImportExport: string;
  }
}

declare module 'SearchVerticalsWebPartStrings' {
  const strings: ISearchVerticalsWebPartStrings;
  export = strings;
}
