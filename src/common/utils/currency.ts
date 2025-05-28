type FormatCurrency = {
	amount: number;
	locale: 'pt-BR';
	currency: 'BRL';
};

export function formatCurrency({ amount, currency, locale }: FormatCurrency) {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(amount);
}
