class ToDo {
    constructor(text = '') {
        if (text.trim() === '') {
            throw new Error("Нотатка не може бути порожньою.");
        }

        this.text = text;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    editText(newText) {
        if (newText.trim() === '') {
            throw new Error("Нотатка не може бути порожньою.");
        }
        this.text = newText;
        this.updatedAt = new Date();
    }

    markAsCompleted() {
        this.completed = true;
        this.updatedAt = new Date();
    }

    getInfo() {
        return {
            text: this.text,
            completed: this.completed,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

//************************************************************************ */


class ToDoList {
    constructor(listOfToDos = []) {
        this.toDos = listOfToDos;
    }

    addNewNote(noteText) {
        const newNote = new ToDo(noteText);
        this.toDos.push(newNote);
        console.log(`Додано нову нотатку: "${noteText}"`);
    }

    removeNote(index) {
        if (index < 0 || index >= this.toDos.length) {
            throw new Error("Невірний індекс нотатки.");
        }
        const removedNote = this.toDos.splice(index, 1)[0];
        console.log(`Видалено нотатку: "${removedNote.text}"`);
    }

    searchByText(text) {
        const result = this.toDos.filter(function (note) {
            return note.text.includes(text);
        });

        console.log(`Пошук за текстом "${text}":`);
        result.forEach(function (note) {
            console.log(`Знайдено нотатку: "${note.text}"`);
        });
        return result;
    }

    sortByStatus() {
        this.toDos.sort(function (a, b) {
            return b.completed - a.completed;
        });

        console.log("Сортування нотаток за статусом (виконані перші):");

        this.toDos.forEach(function (note) {
            console.log(`Нотатка: "${note.text}", Статус: ${note.completed ? 'Виконано' : 'Не виконано'}`);
        });
    }

    countCompleted() {
        const count = this.toDos.filter(function (note) {
            return note.completed;
        }).length;

        console.log(`Кількість виконаних нотаток: ${count}`);
        return count;
    }

    countRemaining() {
        const count = this.toDos.filter(function (note) {
            return !note.completed;
        }).length;

        console.log(`Кількість невиконаних нотаток: ${count}`);
        return count;
    }

    sortByDate() {
        this.toDos.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        });

        console.log("Сортування нотаток за датою створення:");
        this.toDos.forEach(function (note) {
            console.log(`Нотатка: "${note.text}", Дата створення: ${note.createdAt}`);
        });
    }


    getAllNotes() {
        console.log("Всі нотатки:");
        this.toDos.forEach(function (note) {
            const info = note.getInfo();
            console.log(`Текст: "${info.text}", Статус: ${info.completed ? 'Виконано' : 'Не виконано'}, Дата створення: ${info.createdAt}, Дата редагування: ${info.updatedAt}`);
        });
    }
}



// ****************************************************************************



let myList = new ToDoList([
    new ToDo('купити хліб'),
    new ToDo('купити молоко'),
    new ToDo('зайти в хімчистку')
]);

console.log("Початковий список нотаток:");
myList.getAllNotes();

myList.addNewNote('купити подарунок');

myList.getAllNotes();

myList.removeNote(1);

myList.searchByText('подарунок');

myList.toDos[0].markAsCompleted();

myList.sortByStatus();

myList.countCompleted();

myList.countRemaining();

myList.sortByDate();

myList.getAllNotes();
