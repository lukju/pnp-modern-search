define([], function() {
    return {
        General: {
            WebPartDefaultTitle: "Composant Web des secteurs verticaux de recherche"
        },
        PropertyPane: {
            SearchVerticalsGroupName: "Configuration des secteurs verticaux de recherche",
            Verticals: {
                PropertyLabel: "Secteurs verticaux",
                PanelHeader: "Configurer les secteurs verticaux",
                PanelDescription: "Ajoutez un nouveau secteur vertical pour permettre aux utilisateurs de faire des recherches dans une portée ou une source de données prédéfinie.",
                ButtonLabel: "Configurer les secteurs verticaux",
                Fields: {
                    TabName: "Nom de l’onglet",
                    IconName: "Nom de l’icône Office UI Fabric",
                    IsLink: "Est un hyperlien",
                    LinkUrl: "Lien URL",
                    OpenBehavior: "Comportement d’ouverture"
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