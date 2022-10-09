import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Aside from '../../components/auth/lib/Aside'
import Banner from '../../components/auth/lib/Banner'

const AddPost = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <main className="main">
      <div className="main-wapr">
        <Aside />

        <div className="rightSection">
          <Banner title="Add New Post" desc="We need some basic information about your company, the product or services that it provides, and where it operates." className="" />

          <div className="custom-padding">
            <div className="content_sec bg_white">
              <div className="form">
                <form action="">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name">Campaign name</label>
                      <input type="text" name="name" id="name" className="form-control" />
                    </div>

                    <div className="col-md-6 form-group">
                      <label htmlFor="basic-url" className="form-label">Slug</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon3">yootribe.com/</span>
                        <input type="text" className="form-control" id="basic-url"
                          aria-describedby="basic-addon3" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="form-control" />
                    <p>This title will show under your banner</p>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group bg_main">
                      <input type="file" id="banner" accept=".jpg,.jpeg" />
                      <label htmlFor="banner" className="file_btn"><i className="fa-solid fa-plus"></i> Add banner
                        <span>( Jpeg or png )</span></label>
                      <p>This will go at the top of the project page as a header. We recommend
                        1400x300.</p>
                    </div>

                    <div className="col-md-6 form-group bg_gray">
                      <input type="file" id="logo" accept=".jpg,.jpeg, .png" />
                      <label htmlFor="logo" className="file_btn"><i className="fa-solid fa-plus"></i> Add logo
                        <span>( Jpeg or png )</span></label>
                      <p>This will be shown as the logo of your campaign. We recommend 500x500</p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="editors">Description</label>
                    <Editor onInit={(evt, editor) => editorRef.current = editor} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="editors">Datas you want to collect </label>
                    <a className="custom_toltip" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Datas you want to collect">
                      <i className="fa-solid fa-circle-question"></i>
                    </a>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group disable_input">
                      <div className="req">
                        <p>Required</p>
                        <input type="checkbox" id="toggle_1" className="chkbx-toggle" value="1" checked />
                        <label htmlFor="toggle_1"></label>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </div>

                      <input type="text" name="fname" id="fname" className="form-control"
                        placeholder="First name" />
                    </div>

                    <div className="col-md-6 form-group disable_input">
                      <div className="req">
                        <p>Required</p>
                        <input type="checkbox" id="toggle_2" className="chkbx-toggle" value="1" checked />
                        <label htmlFor="toggle_2"></label>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </div>

                      <input type="text" name="lname" id="lname" className="form-control"
                        placeholder="Last name" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group disable_input">
                      <div className="req opcity-0">
                        <p>Required</p>
                        <input type="checkbox" id="toggle_4" className="chkbx-toggle" value="1" checked />
                        <label htmlFor="toggle_4"></label>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </div>

                      <input type="email" name="email" id="email" className="form-control"
                        placeholder="Email" />
                      <p>Email is always mandatory and cannot be deleted</p>
                    </div>

                    <div className="col-md-6 form-group">
                      <div className="req">
                        <p>Required</p>
                        <input type="checkbox" id="toggle_3" className="chkbx-toggle" value="1" checked />
                        <label htmlFor="toggle_3"></label>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </div>

                      <div className="input-group disable_input">
                        <div className="input-group-text">
                          <input className="form-check-input mt-0" type="checkbox" value=""
                            aria-label="Checkbox for following text input" />
                        </div>

                        <input type="number" name="lname" id="lname" className="form-control"
                          aria-label="Text input with checkbox" placeholder="Phone number" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group">
                      <div className="multiple_sinlge">
                        <div className="second_main">
                          <input type="file" id="multiple" multiple="multiple" />
                          <label htmlFor="multiple" className="file_btn"><i className="fa-solid fa-plus"></i>
                            Add
                            multiple choice</label>
                        </div>

                        <div className="second_main">
                          <input type="file" id="single" />
                          <label htmlFor="single" className="file_btn"><i className="fa-solid fa-plus"></i>
                            Add
                            single
                            choice</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="campaign">How many days will your campaign last ?</label>
                      <input type="text" name="campaign" id="campaign" className="form-control w238p" />
                    </div>
                  </div>

                  <div className="form-group preview-campaign">
                    <a href="#"><img src="assets/img/campaign.png" alt="" className="img-fluid" /> Click here
                      for a preview of your campaign</a>
                  </div>

                  <div className="row_center">
                    <button className="btn btn-second">Save draft</button>
                    <button className="btn btn-custom">Validate</button>
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

export default AddPost
