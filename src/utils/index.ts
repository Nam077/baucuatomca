export const IMG_BAU = require('./bau.png');
export const IMG_CUA = require('./cua.png');
export const IMG_TOM = require('./tom.png');
export const IMG_CA = require('./ca.png');
export const IMG_NAI = require('./nai.png');
export const IMG_GA = require('./ga.png');
export const arrXucXac: XucXacI[] = [
    {id: 1, name: 'bau', img: IMG_BAU},
    {id: 2, name: 'cua', img: IMG_CUA},
    {id: 3, name: 'tom', img: IMG_TOM},
    {id: 4, name: 'ca', img: IMG_CA},
    {id: 5, name: 'nai', img: IMG_NAI},
    {id: 6, name: 'ga', img: IMG_GA},
]

export interface XucXacI {
    id: number,
    name: string,
    img: string,

}