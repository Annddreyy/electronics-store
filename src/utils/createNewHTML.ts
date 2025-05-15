export const createNewHTML = (html: string) => {
    html = html.replaceAll('<абзац>', '<p>');
    html = html.replaceAll('</абзац>', '</p><br />');

    html = html.replaceAll('<заголовок>', '<h2 class="sectionTitle">');
    html = html.replaceAll('</заголовок>', '</h2>');

    html = html.replaceAll('<нумСписок>', '<ol style="list-style-position: inside">');
    html = html.replaceAll('</нумСписок>', '</ol>');

    html = html.replaceAll('<маркСписок>', '<ul style="list-style-position: inside">');
    html = html.replaceAll('</маркСписок>', '</ul>');

    html = html.replaceAll('<пункт>', '<li>');
    html = html.replaceAll('</пункт>', '</li>');

    return html;
};
