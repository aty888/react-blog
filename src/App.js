// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['리엑트' , 'Vue' , 'Next JS']);
  let [date] = useState(['2023. 8. 1', '2023. 8. 2', '2023. 8. 3']);
  let [hart, setHart] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [input, setInput] = useState('');


  return (
    <div className="App">
      <div className="bg">
        <h4>TY blog</h4>
      </div>
       <button onClick={() => setTitle(['NEXT JS' , 'NODE JS' , 'JAVA'])}>수정버튼</button>
       <button onClick={ ()=>{ 
        let copy = [...title];
        copy.sort();
        setTitle(copy)
        } }>가나다순정렬</button>
      <div className='list'>
        {
          title.map(function(tit, i){
            return ( 
              <div className='item' key={i}>
                <div className='title' onClick={() => {setModal(!modal); setModalTitle(i);}}>{tit} <span className='hart' onClick={(e)=>{
                  let hartCopy = [...hart];
                  hartCopy[i]= hartCopy[i] + 1;
                  setHart(hartCopy);
                  e.stopPropagation();
                }}>❤</span> { hart[i] }</div>
                <div className='date'>{date[i]}</div>
              </div>  
            )
          })
        }
      </div>
      <div className='input'>
        <input type="text" onChange={(e) => {
          setInput(e.target.value);
        }}/>
        <button onClick={(e) => {
          let copy = [...title];
          copy.unshift(input);
          setTitle(copy)
        }}>등록</button>
      </div>
      {
        modal === true ? <Modal modalTitle={modalTitle} setTitle={setTitle} date={date} title={title}></Modal> : null      
      }
    </div>
  );
}

function  Modal(props) {
 return (
    <div className='modal'>
        <h4>{props.title[props.modalTitle]}</h4>
        <p>{props.date[props.modalTitle]}</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
