import React from 'react';
import {connect} from 'react-redux';
import {issueShares} from '../../../actions/issueShares';
import {Redirect} from 'react-router-dom';

import IssueSharesForm from '../../forms/issueSharesForm';
import Loading from '../../display/loadingDiv';

import {editInvestment} from '../../../actions/editInvestment';

import '../../../css/components/containers/view/issueShares.scss';

export class IssueShares extends React.Component {
    componentDidMount() {
        let params;
        if(this.props.match) {
            params = this.props.match.params;
        } else {
            params = null;
        }
        if(params && params.investmentId) {
            this.props.editInvestment(params.investmentId, this.props.pendingInvestments);
        }
    }
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
        let params;
        if (this.props.match) {
            params = this.props.match.params;
        } else {
            params = null;
        }
        if(params && params.investmentId) {
            this.props.issueShares(v, this.props.editingIndex, params.investmentId, this.props.shareClasses);
        } else {
            this.props.issueShares(v, null, null, this.props.shareClasses);
        }
    }

    render() {
        if(this.props.isReady) {
            if(this.props.redirect) {
                return(
                    <Redirect to={this.props.redirect} />
                );
            } else {
                if(this.props.editing) {

                }
                return (
                    <div className="issue-shares-page">
                        <header className="issue-shares-header">
                            <h2 className="page-heading">Issue Shares</h2>
                        </header>
                        <IssueSharesForm 
                            availableClasses={this.getAvailableClasses()} 
                            onSubmit={this.handleSubmit.bind(this)}
                            initialValues={this.props.initialValues}
                            loading={this.props.loading} />
                    </div>
                );
            }
        } else {
            return(
                <Loading />
            );
        }
    }
}

const mapStateToProps = state => ({
    shareClasses: state.investment.companyData.shareClasses,
    pendingInvestments: state.investment.investmentData.pending,
    redirect: state.investment.redirect,
    isReady: state.investment.isReady,
    initialValues: state.investment.editing,
    editingIndex: state.investment.editingIndex,
    editingId: state.investment.editingId,
    loading: state.investment.loading
});

const mapDispatchToProps = {
    editInvestment,
    issueShares
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueShares);