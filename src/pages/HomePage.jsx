import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import DisplayBooks from "../components/DisplayBooks";
import {User} from '../service/user'
const user = new User()

export default function HomePage() {
    const [books, setBooks] = useState();

    var getBooks = () => {
        user.getAllBooks().then((res) => {
            let books = res.data.result;
            setBooks(books);
            console.log(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        getBooks();
      }, []);


    return (
        <div>
          <Header/>
          <DisplayBooks books={books} get={getBooks}/>
        </div>
    )
}