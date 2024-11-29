const fs = require('fs');
const path = require('path');

test('El archivo HTML debe contener el texto ¡Hola, Mundo!', () => {
    const htmlFile = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    expect(htmlFile).toMatch(/<h1>¡Hola, Mundo!<\/h1>/);
});
