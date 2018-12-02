import formatNumber from './formatNumber';

export default function formatCurrency(num) {
    return `$${formatNumber(num, 2)}`;
}