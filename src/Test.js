

import { useState, useRef } from 'react';




const Test = () => {

  const articleRef = useRef(null)
  const [n, setN] = useState(0)


  const handleRightRotate = e => {
    setN(prev => {
      console.log('+', prev); 
      console.log('changeNumber + ?', changeNumber)
      return ++prev;
    })
    articleRef.current.style.transform = `rotate(30deg)`
  }
  const handleLeftRotate = e => {
    setN(prev => {
      console.log('+', prev); 
      console.log('changeNumber - ?', changeNumber)
      return --prev;
    })
   
    articleRef.current.style.transform = `rotate(-30deg)` 
  }




  // const changeNumber = useRef(0)
  let [changeNumber, setchangeNumber] = useState(0)

  const handleChageNumberPlus = e => {
    console.log('changeNumber', changeNumber)
    setchangeNumber(++changeNumber)
  }

  const handleChageNumberMinus = e => {
    console.log('changeNumber', changeNumber)
    setchangeNumber(--changeNumber)
  }

  // const handleChageNumber = e => {
  //   changeNumber
  // }



  return (
    <div className="App">

      <div className='wrap' style={{ padding: "100px" }}>
        <button onClick={handleLeftRotate}>왼쪽으로 회전</button>
        <button onClick={handleRightRotate}>오른쪽으로 회전</button>
        <article style={{ marginTop: "50px", width: "200px", height: "200px", background: "red", transition: "transform 1s" }} ref={articleRef}></article>

       
        <button onClick={handleChageNumberMinus}>----</button>
        <button onClick={handleChageNumberPlus}>++++</button>
        {/* <button onClick={handleChageNumber}>changeBtn</button> */}
      </div>
    </div>
  );
}

export default Test;

