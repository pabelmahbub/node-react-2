import './App.css';
import {useState,useEffect, useRef} from 'react';

function App() {
  const [newspapers, setNewspapers] = useState([]);
   const nameRef= useRef()
   const linkRef = useRef()

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setNewspapers(data))


  }, [])
  
  const handleAddLink = e =>{
    const name = nameRef.current.value;
    const link = linkRef.current.value;
    const newAdd = {name:name,link:link}
    console.log(link);

    fetch('http://localhost:5000/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAdd)
    })
      .then(res => res.json())
      .then(data => {console.log(data);

        const addedNewspaper = data;
        const newNewspapers = [...newspapers,addedNewspaper];
        setNewspapers(newNewspapers);
      
      
  })

nameRef.current.value='';
linkRef.current.value='';


    e.preventDefault();
  }


  return (
    <div className="App">
     <h1>Hello</h1>
     <h3>{newspapers.length}</h3>
     {
       newspapers.map(newspaper=> <li>{newspaper.id}.{newspaper.name}{newspaper.address}</li>)
     }

     <form onSubmit={handleAddLink}>
       <input type='text' ref={nameRef} placeholder='Write here new media name'></input>
       <br></br>
       <input type='text'ref={linkRef} placeholder='link name'></input>
       <br></br>
       <input type='submit'></input>
     </form>
     
    </div>
  );
}

export default App;
