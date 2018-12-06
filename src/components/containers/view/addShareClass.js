import React from 'react';
import {connect} from 'react-redux';
import {addShareClass} from '../../../actions/shareClass';
import {Redirect} from 'react-router-dom';

import AddShareClassForm from '../../forms/addShareClassForm';

import '../../../css/components/containers/view/addShareClass.scss';

export class AddShareClass extends React.Component {
    handleSubmit(v) {
        this.props.dispatch(addShareClass(v));
    }
    render() {
        if(this.props.redirect) {
            return(
                <Redirect to={this.props.redirect} />
            );
        } else {
            return (
                <div className="add-share-class-page">
                    <header className="add-share-class-header">
                        <h2 className="page-heading">Add Share Class</h2>
                    </header>
                    <AddShareClassForm
                        onSubmit={this.handleSubmit.bind(this)} />
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    shareClasses: state.investment.companyData.shareClasses,
    redirect: state.investment.redirect
});

export default connect(mapStateToProps)(AddShareClass);