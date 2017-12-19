import Input from '../components/Input/Input'

export default {
    content: {
        title: 'Kaufabbruch',
        summary: 'Verbessern Sie Ihre Verkaufsrate und erinnern Sie Kunden nach einem Kaufabbruch an die Produkte im Einkaufswagen',
    },
    filter: [
        {
            label: 'Name der kategorie',
            name: 'kategorie',
            component: Input
        },
        {
            label: 'Name des artikels',
            name: 'artikel',
            component: Input
        }
    ],
    table: [
        {
            name: 'image', label: ''
        },
        {
            name: 'article', label: 'Artikel'
        },
        {
            name: 'id', label: 'Artikel ID'
        },
        {
            name: 'count', label: 'Anzahl Abbruche'
        },
        {
            name: 'control', label: ''
        }
    ]
}