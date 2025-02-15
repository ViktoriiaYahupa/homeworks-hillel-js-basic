const groupedSource = {
    'source A': [
        { source: 'source A', text: 'hello', date: new Date() }],
    'source BB': [
        { source: 'source BB', text: 'Вітаю', date: new Date() },
        { source: 'source BB', text: 'Вкажіть дані', date: new Date() },
        { source: 'source BB', text: 'some text', date: new Date() },
        { source: 'source BB', text: 'помилка', date: new Date() }],
    'source CCC': [
        { source: 'source CCC', text: 'Гарного дня!', date: new Date() },
        { source: 'source CCC', text: 'hello', date: new Date() }],
    'source DDDD': [
        { source: 'source DDDD', text: 'помилка', date: new Date() }]
};

groupedSource[Symbol.iterator] = function () {
    const sources = Object.keys(this);  // Отримуємо всі ключі (тобто всі джерела)
    let sourceIndex = 0;
    let itemIndex = 0;
    const self = this; // Зберігаємо посилання на зовнішній контекст (тобто на сам об'єкт groupedSource)

    return {
        next() {
            if (sourceIndex >= sources.length) {
                return { done: true };
            }

            const currentSource = sources[sourceIndex];
            const currentItems = self[currentSource];

            if (itemIndex >= currentItems.length) {
                sourceIndex++;   // переходимо до наступного source, якщо вже проітеровані всі елементи поточного джерела
                itemIndex = 0;    // обнуляємо індекс елементів 
                return this.next(); // Викликаємо наступний елемент ітератора об'єкта
            }

            const currentItem = currentItems[itemIndex];
            itemIndex++;
            return { value: currentItem, done: false };
        }
    };
}

// Використання for...of для перебору
for (let item of groupedSource) {
    console.log(item);
}

