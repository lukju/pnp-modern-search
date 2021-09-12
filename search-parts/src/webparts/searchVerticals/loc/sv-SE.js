define([], function() {
    return {
        General: {
            WebPartDefaultTitle: "Sökvertikal webbdel"
        },
        PropertyPane: {
            SearchVerticalsGroupName: "Konfigurera sökvertikaler",
            EventHandlersGroupName: "Event Handlers",
            Verticals: {
                PropertyLabel: "Data vertikaler",
                PanelHeader: "Konfigurera vertikala data",
                PanelDescription: "Lägg till en ny vertikal så att användare kan söka i en fördefinierad datakälla eller omfattning.",
                ButtonLabel: "Konfigurera",
                Fields: {
                    TabName: "Fliknamn",
                    IconName: "Office UI Fabric ikonnamn",
                    IsLink: "Är hyperlänk",
                    LinkUrl: "Länk URL",
                    OpenBehavior: "Öppningsbeteende"
                }
            },
            EventHandlerConfig: {
                GroupName: "Event Handlers",
                Label: "On Selection Change Handler",
                Description: "Inserted code is evaluated and executed when the selected Vertical changes. The new vertical data is available as the value of the variable 'currentVertical",
                PlaceholderText: "Javascript Code"
            }
        }
    }
});