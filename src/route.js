const path = require('path');
const {
    getAllBooks,
    registerUser,
    login,
    GetBooksByQuery,
    GetBooksByLastReading,
    addFinishedBooks,
    getFinishedBooks,
    getDetailBook,
    getTestHandler,
    postTestHandler
} = require('./handler');

const routes = [{
        method: 'GET',
        path: '/test',
        handler: getTestHandler,
        options: {
            auth: false
        }
    },
    {
        method: 'POST',
        path: '/test',
        handler: postTestHandler,
        options: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
        options: {
            auth: false
        },
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getDetailBook,
        options: {
            auth: false
        },

    },
    {
        method: 'POST',
        path: '/register',
        handler: registerUser,
        options: {
            auth: false
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: login,
        options: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/model/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, '../model'),
                redirectToSlash: true,
                index: true
            }
        },
        options: {
            auth: false
        }
    },

    {
        method: 'GET',
        path: '/books/filter',
        handler: GetBooksByQuery,
    },
    {
        method: 'GET',
        path: '/books/recommended',
        handler: GetBooksByLastReading,
    },

    {
        method: 'POST',
        path: '/finished-books',
        handler: addFinishedBooks,
    },
    {
        method: 'GET',
        path: '/finished-books',
        handler: getFinishedBooks
    }

]

module.exports = routes;