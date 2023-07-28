import React, {useState, useEffect} from 'react'
import APIService from '../APIService'

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    useEffect(() => {
      setTitle(props.article.title)
      setDescription(props.article.description)
    }, [props.article])


    const updateArticle = () => {
       APIService.UpdateArticle(props.article.id, {title, description})
       .then(resp => props.updatedInformation(resp))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title, description})
        .then(resp => props.insertedInformation(resp) )
    }


  return (
    <div>
        {props.article ? (
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>Title</label>
                <input type='text' className='form-control' id='title' placeholder='Please Enter Title'
                value={title} onChange={e => setTitle(e.target.value)} />
                <label htmlFor='description' className='form-label'>Description</label>
                <textarea className='form-control' id='description' rows='5' value={description} onChange={e => setDescription(e.target.value)} > 
                </textarea>
                <br/>

                {
                    props.article.id ?  <button onClick={updateArticle} className='btn btn-success'>Update</button>
                    : <button onClick={insertArticle} className='btn btn-success'>Insert</button>
                }
                
            </div>
        ) : null}
    </div>
  )
}

export default Form