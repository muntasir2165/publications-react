import React, { useState } from 'react';
import TotalPublicationTrend from './totalpublicationtrend.component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { deletePublicationById } from './../redux/actions/publicationsActionCreators';

const PublicationsCollection = ({ publications, dispatchDeleteAction }) => {
  const [selectedPublication, setSelectedPublication] = useState('');

  const showConfirmationModal = (event, publicationId) => {
    event.preventDefault();
    setSelectedPublication(publicationId);
    window.$('#confirmationModal').modal('show');
  };

  const handleOnDelete = () => {
    dispatchDeleteAction(
      selectedPublication,
      () => {
        window.$('#confirmationModal').modal('hide');
        toast.success('Publication Deleted Successfully!');
      },
      (message) => {
        window.$('#confirmationModal').modal('hide');
        toast.error(`Error: ${message}`);
      }
    );
  };

  return (
    <React.Fragment>
      <TotalPublicationTrend publications={publications} />
      <table className='table table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Publication Type</th>
            <th scope='col'>Title</th>
            <th scope='col'>Authors</th>
            <th scope='col' className='creation-date-display'>
              Creation Date
            </th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {publications.map((item) => (
            <tr key={item._id}>
              <td>
                <Link to={`/edit-publication/${item._id}`}>
                  {item.publicationType}
                </Link>
              </td>
              <td>{item.title}</td>
              <td>{item.authors}</td>
              <td>{item.creationDate}</td>
              <td>
                <a href='/' onClick={(e) => showConfirmationModal(e, item._id)}>
                  <i className='fas fa-trash-alt fa-lg text-danger' />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal handleOnDelete={handleOnDelete} />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteAction: (publicationId, onSuccess, onError) =>
    dispatch(deletePublicationById(publicationId, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(PublicationsCollection);

const Modal = ({ handleOnDelete }) => (
  <div className='modal' id='confirmationModal' tabIndex='-1' role='dialog'>
    <div role='document' className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Confirmation</h5>
        </div>
        <div className='modal-body'>
          <p>Are you sure, you want to delete this publication ?</p>
        </div>
        <div className='modal-footer'>
          <button
            type='button'
            data-dismiss='modal'
            className='btn btn-secondary'
          >
            No
          </button>
          <button
            type='button'
            onClick={handleOnDelete}
            data-dismiss='modal'
            className='btn btn-primary'
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
);
