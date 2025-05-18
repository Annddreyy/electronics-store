export const formatDate = (
    date: Date,
    options: Intl.DateTimeFormatOptions | undefined = undefined,
): string => {
    const dateFormatter = Intl.DateTimeFormat('ru', {
        day: options?.day || '2-digit',
        month: options?.month || 'long',
        year: options?.year || 'numeric',
    });

    return dateFormatter.format(date);
};
