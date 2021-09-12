define([], function() {
    return {
        General: {
            WebPartDefaultTitle: "Search Verticals Web Part"
        },
        PropertyPane: {
            SearchVerticalsGroupName: "Search verticals configuration",
            Verticals: {
                PropertyLabel: "Verticals",
                PanelHeader: "Configure verticals",
                PanelDescription: "Add a new vertical to allow users to search in a predefined scope or data source.",
                ButtonLabel: "Configure verticals",
                Fields: {
                    TabName: "Tab name",
                    IconName: "Fluent UI icon name",
                    IsLink: "Is hyperlink",
                    LinkUrl: "Link URL",
                    OpenBehavior: "Open behavior"
                }
            },
            EventHandlerConfig: {
                GroupName: "Event Handlers",
                Label: "On Selection Change Handler",
                Description: "Inserted code is evaluated and executed when the selected Vertical changes. The new vertical data is available as the value of the variable 'currentVertical",
                PlaceholderText: "Javascript Code"
            },
            ImportExport: "Import / Export settings"
        }
    }
});