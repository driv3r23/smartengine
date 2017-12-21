/* Abstract configuration of the page */

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import Image from '../components/Image/Image'

import { filterByValue } from '../components/Input/actions/'

export default {
    content: {
        title: 'Kaufabbruch',
        summary: 'Verbessern Sie Ihre Verkaufsrate und erinnern Sie Kunden nach einem Kaufabbruch an die Produkte im Einkaufswagen',
    },
    step: {
        label: 'Schritt 2 von 3: Artikel wahlen'
    },
    filter: [ // Filter configuration
        {
            label: 'Name des artikels',
            name: 'artikel',
            component: {
                type: Input, // Choose component to render (e.g. Select, Range)
                onChange: { // Component event handler
                    action: filterByValue, // Action to be dispatched
                    name: 'article' // Filtered value
                }
            }
        },
        {
            label: 'Name der kategorie',
            name: 'kategorie',
            component: {
                type: Input                
            }
        }        
    ],
    table: [ // Table configuration, here you can order the columns, set labels, choose component to render
        {
            name: 'image',
            label: '',
            component: {
                type: Image
            }
        },
        {
            name: 'article',
            label: 'Artikel'
        },
        {
            name: 'id',
            label: 'Artikel ID'
        },
        {
            name: 'count',
            label: 'Anzahl Abbruche'
        },
        {
            name: 'control',
            label: '',
            component: {
                type: Button,
                data: {
                    label: 'Auswahlen'
                }
            }
        }
    ]
}