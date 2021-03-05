import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PublicationTrend from '../components/publicationtrend.component';

import { fetchAllPublications } from './../redux/actions/publicationsActionCreators';

const PublicationTrendPage = ({
  loading,
  publications,
  dispatchFetchAllPublicationsAction,
}) => {
  useEffect(() => dispatchFetchAllPublicationsAction(), [
    dispatchFetchAllPublicationsAction,
  ]);

  return (
    <div className='row mt-5'>
      <div className='col-12'>
        {publications.length > 0 ? (
          <PublicationTrend publications={publications} />
        ) : (
          !loading && (
            <div className='text-center mt-5'>
              <h2>
                <i className='far fa-folder-open fa-3x' />
              </h2>
              <h1 className='text-center'>
                There are no publication trends available
              </h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  publications: state.publications,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllPublicationsAction: () => dispatch(fetchAllPublications()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationTrendPage);
