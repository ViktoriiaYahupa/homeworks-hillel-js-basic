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

const groupedSource = Object.groupBy(
    messagesArr,
    (source) => {
        return (source.source);
    }
);
console.log('початковий масив об\'єктів > ', messagesArr);
console.log('новий об\'єкт з масивів > ', groupedSource);
