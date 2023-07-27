import React from 'react';
const WordSearchList = () =>{

  let words = [];
  let charsTotal = 0;
  const wordList = ['CODE', 'KENTUCKY', 'JAVASCRIPT', 'CSS', 'HTML', 'REACT', 'COMPONENT', 'DIV', 'ARRAY', 'LOOP', 'CONST', 'VARIABLE'];
  for (let i = 0; i < wordList.length; i++){
    words.push(<div className='word'>{wordList[i]}</div>)
    charsTotal += wordList[i].length;
  }
 
  return (
    <div className='word-search-list-wrapper'>
      <h2>Word List</h2>
      <div className='word-search-list'>
        {words}
      </div>
      <div>
        <p>Words: {wordList.length}</p>
        <p>Characters: {charsTotal}</p>
      </div>
    </div>
  );
}
export default WordSearchList;