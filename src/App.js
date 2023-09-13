/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {

  //let[글제목1,b1] = useState('여자 코트 추천');
  //let[글제목2,b2] = useState('강남 우동 맛집');
  //let[글제목3,b3] = useState('파이썬 독학');

  let[글제목, 글제목변경] = useState(['여자 가방 추천', '강남 맛집', '리액트 독학']); //arrary로 작성 
  let[좋아요, 좋아요변경] = useState([0,0,0]);
  let[modal, setModal] = useState(false);
  let[title, setTitle] = useState(0); 
  let[입력값, 입력값변경] = useState('');
 
  return (
    <div className="App">
      <div className ="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ ()=>{       //상단 글수정 버튼 
          let copy = [...글제목];
          copy[0] = '남자 가방 추천';
          글제목변경(copy);
        }}>글수정</button>

      {/*} // 전체 일일이 다 바꿔써야함
      <button onClick={ ()=>{ 
          글제목변경(['남자 가방 추천', '강남 맛집', '리액트 독학']);
        }}>글수정</button>
      */}

      <button onClick={()=> {     //가나다순 정렬
        let copy = [...글제목]
        copy.sort();
        글제목변경(copy);
      }}> '가나다순'</button>

  {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{좋아요변경(좋아요+1)} }>👍 </span>{좋아요}</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={()=>{추천변경(추천+1)}}>🥨</span>{추천}</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ 
          setModal(!modal) }}>{글제목[2]}</h4>
        <p>9월 11일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>     {/* key={i} 오류 없앰 */}
          <h4 onClick={()=>{ setModal(true); setTitle(i) }}>{글제목[i]} 
            <span onClick={(e)=> { e.stopPropagation()
              let copy = [...좋아요];
              copy[i] = copy[i] +1;
              좋아요변경(copy)
            }}>👍 </span>{좋아요[i]} </h4>
          <p>9월 11일 발행</p>
          <button onClick = {()=> {      //글제목 삭제버튼
            let copy = [...글제목]
            copy.splice(i, 1);
            글제목변경(copy);
          }}>삭제</button>
        </div>)
        })
      }
    

      {/* 0913_input 글발행 버튼*/} 
      
      <input onChange = { (e)=> {      //input 가져옴
        입력값변경(e.target.value);     //input값 state에 추가
      }}/>  

      <button onClick = {()=>{
        let copy = [...글제목];   //input 추가
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>


      {
        modal == true ? <Modal color={"lightgray"} title={title} 글제목변경={글제목변경} 글제목 = {글제목}/> : null
      }

      

    </div>
  )
}

// *** modal button *** 
// function Modal(props){
//   return (
//     <div className="modal" style={{background: props.color}}> 
//       <h4>{props.글제목[0]}</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//       <button onClick = {()=> {
//         //props.글제목변경(['여자 가방 추천', '강남 맛집', '리액트 독학'])  
//         let copy = [...props.글제목];
//         copy[0] = '여자 가방 추천';
//         props.글제목변경(copy);
//       }}>글수정</button>
//     </div>
//   )
// }

//setTitle(i)
{/* <div> {
        글제목.map(function(a, i) {
          return (
            <div className="list">
              <h4 onClick={()=>{
                setModal(true); setTitle(i);
              }}> {글제목[i]}</h4>
            </div>
          )
        })
      }
      </div> */}

function Modal(props){
  return (
    <div className="modal" > 
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
