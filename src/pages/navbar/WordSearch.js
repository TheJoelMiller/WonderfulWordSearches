import React from 'react';
import WordSearchBox from '../WordSearchBox';
import WordSearchList from '../WordSearchWordList';
const WordSearch = () =>{
  return (
    <div>
      <div className='word-search-wrapper'>
        <WordSearchBox />
        <WordSearchList />
      </div>
    </div>
  );
}
export default WordSearch;