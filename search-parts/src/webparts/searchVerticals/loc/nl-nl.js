define([], function() {
    return {
        General: {
            WebPartDefaultTitle: "Zoekverticalen webonderdeel"
        },
        PropertyPane: {
            SearchVerticalsGroupName: "Zoekverticalen configuratie",
            EventHandlersGroupName: "Event Handlers",
            Verticals: {
                PropertyLabel: "Zoekverticalen",
                PanelHeader: "Configureer zoekverticalen",
                PanelDescription: "Voeg nieuwe zoekverticalen toe zodat gebruikers kunnen zoeken in een voorgedefinieerde scope of databron.",
                ButtonLabel: "Configureer zoekverticalen",
                Fields: {
                    TabName: "Tab naam",
                    IconName: "Fluent UI icoon naam",
                    IsLink: "Is hyperlink",
                    LinkUrl: "Link URL",
                    OpenBehavior: "Gedrag bij openen"
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