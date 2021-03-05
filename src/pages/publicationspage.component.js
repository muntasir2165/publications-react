import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PublicationsCollection from '../components/publicationscollection.component';
import { fetchAllPublications } from './../redux/actions/publicationsActionCreators';

const PublicationsPage = ({
  loading,
  publications,
  dispatchFetchAllPublicationsAction,
}) => {
  useEffect(() => dispatchFetchAllPublicationsAction(), [
    dispatchFetchAllPublicationsAction,
  ]);

  return (
    <React.Fragment>
      <div className='row my-5'>
        <div className='col-10'>
          <h2>All Publications</h2>
        </div>
        <div className='col-2'>
          <Link to='/edit-publication' className='btn btn-primary'>
            Create Publication | <i className='fas fa-plus' />
          </Link>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-12'>
          {publications.length > 0 ? (
            <PublicationsCollection publications={publications} />
          ) : (
            <div className='text-center mt-5'>
              <h2>
                <i className='far fa-folder-open fa-3x' />
              </h2>
              <h1 className='text-center'>
                There are no publications available
              </h1>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  publications: state.publications,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllPublicationsAction: () => dispatch(fetchAllPublications()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PublicationsPage);
