import type { Colour } from "./Colour"
import type { Fill } from "./Fill"
import type { Shape } from "./Shape"


export const AvailableColours: Colour[] = [
    { name: 'Red', colourValue: '#FF0000' },
    { name: 'Green', colourValue: '#00FF00' },
    { name: 'Purple', colourValue: '#BF40BF'}
]

export const AvailableShapes : Shape[] = [
    { name: 'Pill', value: 'Vector of a pill shape' },
    { name: 'Squiggle', value: 'Vector of a squiggle' },
    { name: 'Diamond', value: 'Vector of a diamond' }
]

export const AvailableFills : Fill[] = [
    {name: 'Empty', fillValue: ''},
    {name: 'Striped', fillValue: ""},  
    {name: 'Filled', fillValue: 'Some kinda representatino of a filled shape...?'}
]

export const AvailableAmounts : number[] = [ 1, 2, 3 ]