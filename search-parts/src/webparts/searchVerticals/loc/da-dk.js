define([], function() {
  return {
    General: {
      WebPartDefaultTitle: "Søgevertikal-webpart"
    },
    PropertyPane: {
      SearchVerticalsGroupName: "Konfiguration af søgevertikaler",
      Verticals: {
        PropertyLabel: "Datavertikaler",
        PanelHeader: "Konfigurér datavertikaler",
        PanelDescription: "Tilføj en ny vertikal for at give brugere mulighed for søge i en predefineret datakilde eller scope.",
        ButtonLabel: "Konfigurér vertikaler",
        Fields: {
          TabName: "Navn på fane",
          IconName: "Fluent UI ikonnavn",
          IsLink: "Er hyperlink",
          LinkUrl: "Link til URL",
          OpenBehavior: "Åben adfærd"
        }
      },
      EventHandlerConfig: {
        GroupName: "Event Handlers",
        Label: "On Selection Change Handler",
        Description: "Inserted code is evaluated and executed when the vertical selection changes. The new vertical data is available as the value of the variable 'currentVertical",
        PlaceholderText: "Javascript Code"
      }
    }
  }
});