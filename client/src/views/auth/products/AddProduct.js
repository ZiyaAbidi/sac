import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Aside from '../../../components/auth/lib/Aside'
import Banner from '../../../components/auth/lib/Banner'
import { Link } from 'react-router-dom';
import { data } from 'jquery';

const AddProduct = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [data, setData] = useState({
    title: '',
    banner: '',
    desc: '',
    category: '',
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log("Title- ", data)

    setData({
      ...data,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
                    <input type="text" onChange={handleInput} name="title" id="title" className="form-control" />
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
                    <label htmlFor="editors">Description</label>
                    <Editor name="desc" onChange={handleInput} onInit={(evt, editor) => editorRef.current = editor} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" onChange={handleInput} name="category" id="category" className="form-control" />
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
