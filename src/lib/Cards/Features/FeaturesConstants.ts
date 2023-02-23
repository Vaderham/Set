import type { Colour } from "./Colour"
import type { Fill } from "./Fill"
import type { Shape } from "./Shape"


export const AvailableColours: Colour[] = [
    { id: 0, name: 'Red', colourValue: '#FF0000' },
    { id: 1, name: 'Green', colourValue: '#00FF00' },
    { id: 2, name: 'Purple', colourValue: '#BF40BF'}
]

export const AvailableShapes : Shape[] = [
    { id:0, name: 'Pill', value: 'Vector of a pill shape' },
    { id: 1, name: 'Squiggle', value: 'Vector of a squiggle' },
    { id: 2, name: 'Diamond', value: 'Vector of a diamond' }
]

export const AvailableFills : Fill[] = [
    {id: 0, name: 'Empty', fillValue: '#ffffff'},
    {
        id: 1,
        name: 'Striped', 
        fillValue: `<pattern id="striped" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)"><line x1="0" y="0" x2="0" y2="14" stroke="#000000" stroke-width="2" /></pattern>`,
        patternId: 'striped'
    },  
    {id: 2, name: 'Filled', fillValue: ''}
]

export const AvailableAmounts : number[] = [ 1, 2, 3 ]