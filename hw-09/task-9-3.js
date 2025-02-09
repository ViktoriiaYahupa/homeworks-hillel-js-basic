const messagesArr = [
    { source: 'A', text: 'hello', date: new Date() },
    { source: 'BB', text: 'Вітаю', date: new Date() },
    { source: 'CCC', text: 'Гарного дня!', date: new Date() },
    { source: 'CCC', text: 'hello', date: new Date() },
    { source: 'BB', text: 'Вкажіть дані', date: new Date() },
    { source: 'DDDD', text: 'помилка', date: new Date() },
    { source: 'BB', text: 'some text', date: new Date() },
    { source: 'BB', text: 'помилка', date: new Date() },

];
console.log('початковий масив об\'єктів > ', messagesArr);

function customGroupBy(messagesArr, source) {
    return messagesArr.reduce((accumResult, message) => {
        const groupedSource = message[source];
        if (!accumResult[groupedSource]) {
            accumResult[groupedSource] = [];
        }
        accumResult[groupedSource].push(message);
        return accumResult;
    }, {}
    )
}
const groupedBySource = customGroupBy(messagesArr, 'source');
console.log('новий об\'єкт з масивів > ', groupedBySource);
