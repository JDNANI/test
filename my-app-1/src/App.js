import React from 'react';
// import ReactPage from './ReactPage';
// import  { sculptureList } from './Data';
// import { Widget } from './Data';
import { ReactDOM } from 'react';

// export default function Gallery(){
//   const [index, setIndex]= useState(0);
//   const [showMore, setShowMore]=useState(false);
//   const hasNext=index<sculptureList.length-1;

//   function handleClick(){
//     if(hasNext){
//       setIndex(index+1);
//     }
//     else{
//       setIndex(0);
//     }
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore);
//   }
//   let sculpture= sculptureList[index]
//   return(
//     <div><br/>
//       <button onClick={handleClick}>Next</button>
      
//       <h2>
//       <i>{sculpture.name}  by {sculpture.artist}</i>
//       </h2>
//       <h3>{index+1} of {sculptureList.length}</h3>
//       <button onClick={handleMoreClick}>{showMore? 'Hide':'Show'} details</button><br/>
//       {showMore && <p> {sculpture.description}</p>}<br/>
//       <img src={sculpture.url} alt={sculpture.alt}></img>
//     </div>
//   );
// }


// export default function Hello(){
//   const [show,setShow] = useState();

//   function Update(event){
//     setShow(event.target.value)
//     console.log(event.target.value);
//   }
//   return (
//     <>
//     <input className='enter' type='text' onKeyUp={Update} ></input>
//     <h1>{show}</h1>
//     <Widget Msg={show}></Widget>
//     </>
//   )
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

