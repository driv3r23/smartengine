import Input from '../components/Input/Input'
import { filterByArticle } from '../components/Input/actions/'

export default {
    content: {
        title: 'Kaufabbruch',
        summary: 'Verbessern Sie Ihre Verkaufsrate und erinnern Sie Kunden nach einem Kaufabbruch an die Produkte im Einkaufswagen',
    },
    filter: [
        {
            label: 'Name der kategorie',
            name: 'kategorie',
            component: {
                type: Input,
                onChange: filterByArticle
            }
        },
        {
            label: 'Name des artikels',
            name: 'artikel',
            component: {
                type: Input
            }
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