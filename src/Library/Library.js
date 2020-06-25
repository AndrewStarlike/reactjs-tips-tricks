import React from 'react';
import Book from './Book';

function Library({books}) {
    return (
        <div>
            {books.map(
                book => <Book key={book.id} title={book.title} author={book.author} />
            )}
        </div>
    )
}

export default Library;