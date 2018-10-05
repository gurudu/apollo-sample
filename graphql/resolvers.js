
const books = [
    {
        id:1,
        title:"book1"
    },
    {
        id:2,
        title:"book2"
    },
    {
        id:3,
        title:"book3"
    }
]
   
// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        allBooks: () => books,
        book: (_,{id}) => books.filter(item => item.id === id)[0],
    },
    Mutation: {
        addBook: (_, {title}) =>{
            books.push({id:books.length+1, title})
            return books;
        },
        deleteBook: (_ ,{id}) => {
            let index = books.findIndex(item => item.id === id);
            return [...books.slice(0,index), ...books.slice(index+1)]
        },
        updateBook: (_ ,{id, title}) => {
           console.log([...arguments]);
            let index = books.findIndex(item => item.id === id);
            let newBook = books.find(item => item.id === id);
            newBook.title = title;
            return [...books.slice(0,index), newBook, ...books.slice(index+1)]
        }
    }
};

module.exports = resolvers;