import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  createPublication,
  getPublicationById,
  updatePublicationById,
} from '../redux/actions/publicationsActionCreators';

const EditPublicationPage = ({
  match,
  history,
  dispatchCreatePublicationAction,
  dispatchGetPublicationByIdAction,
  dispatchUpdatePublicationAction,
}) => {
  const [publicationType, setPublicationType] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [error, setError] = useState({
    publicationType: false,
    title: false,
    authors: false,
    creationDate: false,
  });

  useEffect(() => {
    const { publicationId } = match.params;
    if (publicationId) {
      dispatchGetPublicationByIdAction(
        publicationId,
        ({ publicationType, title, authors, creationDate }) => {
          setPublicationType(publicationType);
          setTitle(title);
          setAuthors(authors);
          setCreationDate(creationDate);
        }
      );
    }
  }, [dispatchGetPublicationByIdAction, match.params]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (isFormInvalid()) {
      updateErrorFlags();
    } else {
      const { publicationId } = match.params;
      const data = { publicationType, title, authors, creationDate };
      // if publicationId is present, we are in edit/update mode for an existing publication
      // else, we are on the page filling out the contents for a new publication
      if (publicationId) {
        dispatchUpdatePublicationAction(
          publicationId,
          data,
          () => {
            toast.success('Publication Updated Successfully!');
            history.replace('/publications');
          },
          (message) => toast.error(`Error: ${message}`)
        );
      } else {
        dispatchCreatePublicationAction(
          data,
          () => {
            toast.success('Publication Created Successfully!');
            history.replace('/publications');
          },
          (message) => toast.error(`Error: ${message}`)
        );
      }
    }
  };

  const isFormInvalid = () =>
    !publicationType.trim() ||
    !title.trim() ||
    !authors.trim() ||
    !creationDate.trim();

  const updateErrorFlags = () => {
    const errorObj = {
      publicationType: false,
      title: false,
      authors: false,
      creationDate: false,
    };
    if (!publicationType.trim()) errorObj.publicationType = true;
    if (!title.trim()) errorObj.title = true;
    if (!authors.trim()) errorObj.authors = true;
    if (!creationDate.trim()) errorObj.creationDate = true;
    setError(errorObj);
  };

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col'>
          <h2>Edit Publication</h2>
        </div>
      </div>
      <div className='row align-items-center mt-4'>
        <div className='col-9'>
          <form noValidate onSubmit={handleOnSubmit}>
            <div className='form-group'>
              <label htmlFor='publicationType'>Publication Type</label>
              <select
                noValidate
                id='publicationType'
                name='publicationType'
                className={`form-control ${
                  error.publicationType ? 'is-invalid' : ''
                }`}
                value={publicationType}
                onChange={(e) => setPublicationType(e.target.value)}
              >
                <option value=''>-- Select --</option>
                <option value='Books &#38; Book Chapters'>
                  Books &#38; Book Chapters
                </option>
                <option value='Consultant Report'>Consultant Report</option>
                <option value='Cost Recovery (CR) report'>
                  Cost Recovery (CR) report
                </option>
                <option value='Journal'>Journal</option>
                <option value='Other Publication'>Other Publication</option>
                <option value='Poster'>Poster</option>
                <option value='Presentation'>Presentation</option>
                <option value='Conference Proceedings'>
                  Conference Proceedings
                </option>
                <option value='Internal technical report'>
                  Internal technical report
                </option>
              </select>
              <p className='invalid-feedback'>Required</p>
            </div>

            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                noValidate
                id='title'
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`form-control ${error.title ? 'is-invalid' : ''}`}
              />
              <p className='invalid-feedback'>Required</p>
            </div>

            <div className='form-group'>
              <label htmlFor='authors'>Authors</label>
              <input
                noValidate
                id='authors'
                type='text'
                placeholder='Authors'
                name='authors'
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                className={`form-control ${error.authors ? 'is-invalid' : ''}`}
              />
              <p className='invalid-feedback'>Required</p>
            </div>

            <div className='form-group'>
              <label htmlFor='creationDate'>Creation Date</label>
              <input
                noValidate
                id='creationDate'
                type='text'
                placeholder='CreationDate'
                name='creationDate'
                value={creationDate}
                onChange={(e) => setCreationDate(e.target.value)}
                className={`form-control ${
                  error.creationDate ? 'is-invalid' : ''
                }`}
              />
              <p className='invalid-feedback'>Required</p>
            </div>

            <div className='mt-5'>
              <button type='submit' className='btn btn-primary mr-2 btn-lg'>
                Save | <i className='fas fa-save' />
              </button>
              <button
                type='button'
                onClick={() => history.replace('/publications')}
                className='btn btn-secondary btn-lg'
              >
                Cancel | <i className='fas fa-times' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCreatePublicationAction: (data, onSuccess, onError) =>
    dispatch(createPublication(data, onSuccess, onError)),
  dispatchUpdatePublicationAction: (publicationId, data, onSuccess, onError) =>
    dispatch(updatePublicationById(publicationId, data, onSuccess, onError)),
  dispatchGetPublicationByIdAction: (publicationId, onSuccess) =>
    dispatch(getPublicationById(publicationId, onSuccess)),
});

export default connect(null, mapDispatchToProps)(EditPublicationPage);
