import React from 'react';
import {connect} from 'react-redux';

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

    render() {
        const availableClasses = this.getAvailableClasses();
        const classOptionList = availableClasses.map((element, i) => {
            return(
                <option key={i} value={element.classSlug}>{element.className}</option>
            );
        });
        return (
            <div className="issue-shares-page">
                <header className="issue-shares-header">
                    <h2 className="page-heading">Issue Shares</h2>
                </header>
                <form className="issue-shares-start">
                    <label htmlFor="share-type">Share Type</label>
                    <select name="share-type" id="share-type" className="form-input">
                        {classOptionList}
                    </select>
                    <label htmlFor="shareholder-name">Shareholder Name</label>
                    <input type="text" name="shareholder-name" id="shareholder-name" className="form-input" placeholder="Shareholder Name" />
                    <label htmlFor="num-shares">Number of Shares</label>
                    <input type="number" name="num-shares" id="num-shares" className="form-input" placeholder="000" />
                    <fieldset className="checkbox-group">
                        <legend>Steps for Issue:</legend>
                        <div className="checkbox-container">
                            <label htmlFor="step1" className="form-label"><input type="checkbox" name="issue-shares-workflow" value="step1" id="step1" />Subscription Agreement Received</label>
                            <label htmlFor="step2" className="form-label"><input type="checkbox" name="issue-shares-workflow" value="step2" id="step2" />Payment Received</label>
                            <label htmlFor="step3" className="form-label"><input type="checkbox" name="issue-shares-workflow" value="step3" id="step3" />Certificate Issued</label>
                        </div>
                    </fieldset>
                    <label htmlFor="certificate-number">Certificate Number </label>
                    <input type="text" name="certificate-number" id="certificate-number" className="form-input" placeholder="Certificate Number" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shareClasses: state.companyData.shareClasses
});

export default connect(mapStateToProps)(IssueShares);