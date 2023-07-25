import React from 'react';
import Square from './Square';
const WordSearchBox = () =>{

 let wordSearchValues = [];
  const letters = 'DVKRTXVJHZBHLJUMHCUFBALFAJTQATYTSJCMORFOCMGVQPDLOOPBMEKSLNAOKENTUCKYDASTZSAYOSNECFHDECRFCREPVYLOOESKYTDRRFUVGLEAMKEQNIIAVRABZGORPUUIVPYUNREMJZYAOYNRTIHBIJVYTAECNPEIICIAEAHIXWRKEDRCQHBWRGSOVEFYNGUZVLDYUCONSTZATKDZEZVKPCODEZAWU';
  for (let i = 0; i < letters.length; i++){
    if (i % 15 === 0){
      wordSearchValues.push(<div className='board-row'></div>)
    }
    wordSearchValues.push(<Square value = {letters.charAt(i)}/>)
  }

  return (
    <div className='word-search-box'>
      {wordSearchValues}
    </div>
  );
}
export default WordSearchBox;