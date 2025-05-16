export const formatDate = (date: Date): string => {
    const dateFormatter = Intl.DateTimeFormat('ru', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    return dateFormatter.format(date);
};
