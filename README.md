# General information

Welcome. This document will outline how to make contributing changes to this repository.
We want to keep it as easy as possible to contribute changes that get things working
in your environment. There are a few guidelines that we need contributors to follow
so that we can have a chance of keeping on top of things and for consistency sake.

### Getting Started

* Make sure you fully read the README.md file
* Make sure you read all documents in docs/ folder
* Make sure you have right setup local environment
* Make sure you read included project backend/rest-server/README.md and understand it
* Make sure you read included project frontend/main-site/README.md and understand it

### Short information
Run app `npm start` from project folder
Prepare app for contributing (install deps and others) `npm run happy`
See all commands `npm run`
App available at http://localhost:3000
API docs available at http://localhost:3000/apidocs in development/staging mode

### Additional Resources

* [Repository](https://github.com/boo1ean/wtftm)
* [General documentation](https://docs.google.com/document/d/1aembq_9q9I7zgfOyW5pQdtgtJyYg-_AaJUbVLHrr57U/edit)
* [Bug tracker (Jira)](https://enter_bug_tracking_system_address_here)
* [Continuous integration](https://enter_continuous integration_system_address_here)
* If you do not hear back within a reasonable time feel free to send an email to Egor Gumenyuk <boo1ean0807@gmail.com>


### Почему `{ value: '1', label: 'Мой оффер' }`

`label` - любое текстовое представление значени (будь-то имя, имя + id и тд)

`value`- любое значение используемое в качестве атрибута `value` в инпутах (может быть `id` сущности, идентификатор константы и тд).

### Почему enums и dictionary так существуют?

`enum` - набор констант, которые можно референсить в коде, в базу пишеться значение которое лежит по ключу в объекте `enum`

`dictionary` - текстовое представление констант из `enum`-а

### Почему модули и всё что внутри организовано именно так (в т.ч. core-модули и api-модули)

`Модуль` - это набор функциональных единиц которые относятся к какой-то определённой сущности, в отдельных случаях к "фиче"

`backend/api/modules` - знают о том, что они работают в `http` контексте, например если добавить, `backend/websockets`, то `backend/websockets/modules` будут знать, что они работают в контексте вебсокетов.

`backend/modules` - context-independent модули, не знают ничего ни о `http`, ни о `websockets`, предпологается, что в них находиться логика предметной области


### По какой логике разделены сервисы и провайдеры

`services` - domain-related сервисы

`providers` - ifrastructure сервисы типа `db`, `logger`, `queue` и прочие


### Как разделяются actions в рамках модуля на фронтенде

Модуль может содержать несколько `root` компонент (которые общаются со `store` и `dispatch`) и под каждый из этих компонент создаётся файл с соответствующими экшенами.

```
stats
|
|--actions
|  |--table.js
|  `--chart.js
|  
`--roots
   |--table.js
   `--roots.js
```

Если возникает проблема с придымванием имени файла, при разбиении кода на разные файл, стоит задуматься, а имеет ли такое разбиений какой-то смысл?
