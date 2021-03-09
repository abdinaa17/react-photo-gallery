import React, {useState} from 'react'
import ImgContainer from './ImgContainer'



const Form = () => {

    const API_KEY = process.env.REACT_APP_API_KEY 
    



    const [keyword, setKeyword] = useState('')
    
    const [images, setImages] = useState([])





   const fetchData =  async () => {
       const res = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${API_KEY}`);
       const data = await res.json()
       setKeyword('');
       setImages(data.results)
       
   } 

   const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
        
    }
    return (
        <div>
            <h1>React Photo Gallery</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                 type="text"
                 value={keyword}
                 onChange={(e)=> setKeyword(e.target.value)}
                 />
                 <input type="submit" value="Search"/>
            </form>

          {images && <ImgContainer images={images} />}
        </div>
    )
}

export default Form
