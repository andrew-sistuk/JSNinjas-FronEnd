### README (Українська)

# JSNinjas-FrontEnd

Цей проєкт створений за допомогою стеку Vite та React. Він надає швидке і сучасне середовище для розробки веб-застосунків.

## Вимоги

Перед початком роботи переконайтеся, що у вас встановлені наступні інструменти:

- [Node.js](https://nodejs.org/) (версія 14 або новіша)
- [npm](https://www.npmjs.com/) (зазвичай встановлюється разом із Node.js)

## Установка

1. **Клонування репозиторію**

   Спочатку вам потрібно клонувати репозиторій проєкту:

   ```bash
   https://github.com/andrew-sistuk/JSNinjas-FronEnd.git
   ```

2. **Перехід до каталогу проєкту**

   Перейдіть до каталогу проєкту:

   ```bash
   cd JSNinjas-FronEnd
   ```

3. **Встановлення залежностей**

   Використовуйте npm для встановлення всіх необхідних залежностей:

   ```bash
   npm install
   ```

## Запуск проєкту

Для запуску проєкту виконайте наступну команду:

```bash
npm run dev
```

Ця команда запускає Vite-сервер і відкриває ваш застосунок у браузері за адресою [http://localhost:5173](http://localhost:5173). Будь-які зміни у файлах автоматично відображатимуться у браузері завдяки функції гарячого перезавантаження. 

Головна сторінка при цьому буде http://localhost:5173/characters

Також для швидкого ознайомлення застосування доступне за наступною адресою [https://js-ninjas-fron-end.vercel.app/characters](https://js-ninjas-fron-end.vercel.app/characters).

## Увага

Відповіді від серверної частини додатку при цьому можуть бути до 50 сек.

За потреби зміни серверної частини для взаємодії потрібно змінити наступний рядок в файлі src/myRedux/characters/operations.js

```bash
axios.defaults.baseURL = 'https://jsninjas-backend.onrender.com';
```

### README (English)

#JSNinjas-FrontEnd

This project is built using the Vite stack and React. It provides a fast and modern environment for developing web applications.

## Requirements

Before you start, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

## Installation

1. **Repository cloning**

First you need to clone the project repository:

 ```bash
 https://github.com/andrew-sistuk/JSNinjas-FronEnd.git
 ```

2. **Go to the project directory**

Go to the project directory:

 ```bash
 cd JSNinjas-FrontEnd
 ```

3. **Installing dependencies**

Use npm to install all required dependencies:

 ```bash
 npm install
 ```

## Launching the project

To start the project, execute the following command:

```bash
npm run dev
```

This command starts the Vite server and opens your application in the browser at [http://localhost:5173](http://localhost:5173). Any changes to the files will be automatically reflected in the browser thanks to the hot reload function.

The main page will be http://localhost:5173/characters

Also, for a quick reference, the application is available at the following address [https://js-ninjas-fron-end.vercel.app/characters](https://js-ninjas-fron-end.vercel.app/characters).

## WARNING

Responses from the server part of the application can take up to 50 seconds.

If you need to change the backend for interaction, you need to change the following line in the file src/myRedux/characters/operations.js

```bash
axios.defaults.baseURL = 'https://jsninjas-backend.onrender.com';
```

---
