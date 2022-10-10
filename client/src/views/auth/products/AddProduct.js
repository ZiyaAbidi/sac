import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Aside from '../../../components/auth/lib/Aside'
import Banner from '../../../components/auth/lib/Banner'
import { Link } from 'react-router-dom';

const AddProduct = () => {

  const [product, setProduct] = useState({
    title: '',
    banner: '',
    desc: '',
    category: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  const parseEditorData = (desc, editor) => {
    //desc is the current value of the text editor
    // editor is an object that holds the html element that in this case is the text area where the name prop will be stored.
    const { targetElm } = editor;
    // This name value references the prop that you pass as textAreaName (desc in your case)
    const { name } = targetElm;
    // This function returns an object that your handle change can parse correctly
    return {
      target: {
        name,
        value: desc
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('useEffect Product - ', product);
    setProduct({
      title: '',
      banner: '',
      category: '',
      desc: '',
      editor: ''
    });
  }





  return (
    <main className="main">
      <div className="main-wapr">
        <Aside />

        <div className="rightSection">
          <Banner title="Add New Products" desc="We need some basic information about your company, the product or services that it provides, and where it operates." className="" />
          <div className="custom-padding">
            <div className="content_sec bg_white">
              <div className="form">
                <form id='form' onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={handleInput} value={product.title} name="title" id="title" className="form-control" />
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group bg_main">
                      <input type="file" onChange={handleInput} name='banner' id="banner" accept=".jpg,.jpeg, .png" />
                      <label htmlFor="banner" className="file_btn"><i className="fa fa-plus"></i> Add banner
                        <span>( Jpeg or png )</span></label>
                      <p>This will go at the top of the project page as a header. We recommend
                        1400x300.</p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <Editor
                      onEditorChange={(desc, editor) =>
                        handleInput(parseEditorData(desc, editor))
                      }
                      textareaName="desc" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" onChange={handleInput} value={product.category} name="category" id="category" className="form-control" />
                  </div>

                  <div className="form-group preview-campaign">
                    <Link to="/"><img src="assets/img/campaign.png" alt="" className="img-fluid" /> Click here
                      for a preview of your campaign</Link>
                  </div>

                  <div className="row_center">
                    <button className="btn btn-custom">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default AddProduct
