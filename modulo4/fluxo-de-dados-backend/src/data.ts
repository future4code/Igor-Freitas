// 2

export type Products = {
    id:string,
    productName:string,
    price:number

}

export const shoes: Products[] = [
    {
        id: '1',
        productName: 'Yeezy 350v2',
        price: 1.540
    },
    {
        id: '2',
        productName: 'Versace Chain Reaction',
        price: 7.250
    },
    {
        id: Math.random().toString(),
        productName: 'Adidas Yeezy 350v2',
        price: 1.540
    },
    {
        id: '3',
        productName: 'Nike Air Max 720',
        price: 899
    },
    {
        id: '4',
        productName: 'Adidas Yeezy 500',
        price: 1.199
    },
    {
        id: '5',
        productName: 'Bape x Reebok',
        price: 14.599
    },
    {
        id: '6',
        productName: 'To delete',
        price: 66.66
    }
]