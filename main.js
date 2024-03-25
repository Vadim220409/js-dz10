// ex 1

// const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
// const todoForm = document.querySelector('.todo-form');
// const todoInput = document.querySelector('.todo-input');
// const todoListElement = document.querySelector('.todo-list');

// function renderTodoList() {
//     todoListElement.innerHTML = '';
//     todoList.forEach((todo, index) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = todo.text;
//         const completeButton = document.createElement('button');
//         completeButton.textContent = 'Complete';
//         completeButton.addEventListener('click', () => {
//             todo.completed = true;
//             renderTodoList();
//         });
//         listItem.appendChild(completeButton);
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => {
//             todoList.splice(index, 1);
//             renderTodoList();
//         });
//         listItem.appendChild(deleteButton);
//         todoListElement.appendChild(listItem);
//     });
// }

// todoForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (!todoInput.value.trim()){
//         return;
//     }
//     todoList.push({ text: todoInput.value.trim(), completed: false });
//     todoInput.value = '';
//     localStorage.setItem('todoList', JSON.stringify(todoList));
//     renderTodoList();
// });

// renderTodoList();

// ex 2

// function saveData() {
//     const username = document.querySelector('.username').value;
//     localStorage.setItem('username', username);
//   }
  
// function loadData() {
//     const username = localStorage.getItem('username');
//     if (username) {
//         document.getElementById('username').value = username;
//     }
// }
  

// window.onload = loadData;

// ex 3

// let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// if (bookmarks) {
//     bookmarks.forEach(bookmark => {
//         addBookmark(bookmark.title, bookmark.url);
//     });
// }

// function saveBookmark() {
//     const urlInpt = document.querySelector('.website-url').value;
//     const titleInpt = document.querySelector('.website-title').value;

//     if (urlInpt && titleInpt) {
//         const newBookmark = { title: titleInpt, url: urlInpt };
//         bookmarks.push(newBookmark);
//         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//         addBookmark(titleInpt, urlInpt);
//         clearInputs();
//     }
// }

// function addBookmark(title, url) {
//     const list = document.querySelector('.bookmarks-list');
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `<a href="${url}" target="_blank">${title}</a> <button onclick="removeBookmark(this)">Remove</button>`;
//     list.appendChild(listItem);
// }

// function removeBookmark(node) {
//     const parent = node.parentElement;
//     parent.remove();

//     const index = Array.from(parent.parentElement.children).indexOf(parent);
//     bookmarks.splice(index, 1);
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
// }

// function clearInputs() {
//     document.querySelector('.website-url').value = '';
//     document.querySelector('.website-title').value = '';
// }

// ex 4

// let contacts = [];

// function loadContacts() {
//     contacts = JSON.parse(localStorage.getItem('contacts')) || [];
//     displayContacts();
// }

// function saveContacts() {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
// }

// function displayContacts() {
//     const contactsTable = document.querySelector('.contacts');
//     contactsTable.innerHTML = '';

//     contacts.forEach((contact, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${contact.name}</td>
//             <td>${contact.surname}</td>
//             <td>${contact.phone || 'n/a'}</td>
//             <td>${contact.email || 'n/a'}</td>
//             <td>
//                 <button onclick="editContact(${index}, '${contact.name}', '${contact.surname}', '${contact.phone || ''}', '${contact.email || ''}')">Edit</button>
//                 <button onclick="deleteContact(${index})">Delete</button>
//             </td>
//         `;
//     contactsTable.appendChild(row);
//   });
// }

// function addContact() {
//     const name = document.querySelector('.name').value;
//     const surname = document.querySelector('.surname').value;
//     const phone = document.querySelector('.phone').value;
//     const email = document.querySelector('.email').value;

//     if (name && surname) {
//         const newContact = { name, surname, phone, email };
//         contacts.push(newContact);
//         clearInputs();
//     }
// }

// function editContact(index, name, surname, phone, email) {
//     document.querySelector('.name').value = name;
//     document.querySelector('.surname').value = surname;
//     document.querySelector('.phone').value = phone;
//     document.querySelector('.email').value = email;

//     saveContacts();
//     contacts[index] = {
//         name,
//         surname,
//         phone,
//         email
//     };
// }

// function deleteContact(index) {
//     contacts.splice(index, 1);
//     saveContacts();
//     displayContacts();
// }

// function clearInputs() {
//     document.querySelector('.name').value = '';
//     document.querySelector('.surname').value = '';
//     document.querySelector('.phone').value = '';
//     document.querySelector('.email').value = '';
// }

// window.onload = loadContacts;
