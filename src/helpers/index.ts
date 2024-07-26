export const formatCurrency = (money: number) => {
    return new Intl.NumberFormat('es-US', {
        style: "currency",
        currency: 'USD'
    }).format(money);
}