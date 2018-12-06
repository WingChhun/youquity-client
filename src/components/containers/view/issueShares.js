import React from 'react';
import {connect} from 'react-redux';
import {issueShares} from '../../../actions/issueShares';
import {Redirect} from 'react-router-dom';

import IssueSharesForm from '../../forms/issueSharesForm';

import '../../../css/components/containers/view/issueShares.scss';

export class IssueShares extends React.Component {
    getAvailableClasses() {
        const classes = [];
        this.props.shareClasses.forEach((element) => {
            if(element.currentlyOffered) {
                classes.push(element);
            }
        });
        return classes;
    }

    handleSubmit(v) {
        this.props.dispatch(issueShares(v));
    }

    render() {
        if(this.props.redirect) {
            return(
                <Redirect to={this.props.redirect} />
            );
        } else {
            return (
                <div className="issue-shares-page">
                    <header className="issue-shares-header">
                        <h2 className="page-heading">Issue Shares</h2>
                    </header>
                    <IssueSharesForm 
                        availableClasses={this.getAvailableClasses()} 
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

export default connect(mapStateToProps)(IssueShares);