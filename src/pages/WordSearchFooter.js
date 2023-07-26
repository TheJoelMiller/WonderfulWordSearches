import React, { useState, useEffect } from 'react';
import axios from 'axios';
const WordSearchFooter = () =>{
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(response => {
        setJoke(response.data[0].setup + ' ' + response.data[0].punchline);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <footer>
      {joke}
    </footer>
  );
}
export default WordSearchFooter;

  