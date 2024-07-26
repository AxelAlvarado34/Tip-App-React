export type MenuItemsType = {
    id: number,
    name: string,
    price: number,
    image: string
}

export type ItemType = MenuItemsType & {
    amount: number
}

export type TipType = {
    id: string,
    value: number,
    label: string
}