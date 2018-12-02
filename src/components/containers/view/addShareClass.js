import React from 'react';
import {connect} from 'react-redux';
import {addShareClass} from '../../../actions';

import '../../../css/components/containers/view/addShareClass.scss';

export class AddShareClass extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        this.props.dispatch(addShareClass(data));
    }
    render() {
        return (
            <div className="add-share-class-page">
                <header className="add-share-class-header">
                    <h2 className="page-heading">Add Share Class</h2>
                </header>
                <form className="add-share-class-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="class-name">Class Name</label>
                    <input type="text" name="class-name" id="class-name" className="form-input" placeholder="Class Name" />
                    <label htmlFor="authorized-shares">Authorized Shares</label>
                    <input type="number" name="authorized-shares" id="authorized-shares" className="form-input" placeholder="000" />
                    <label htmlFor="reserved-shares">Reserved Shares</label>
                    <input type="number" name="reserved-shares" id="reserved-shares" className="form-input" placeholder="000" />
                    <label htmlFor="share-price">Price Per Share</label>
                    <input type="number" name="share-price" id="share-price" className="form-input" placeholder="000" />
                    <label htmlFor="currently-offered" className="form-label"><input type="checkbox" className="form-input" name="currently-offered" value={true}
                    id="currently-offered" />CurrentlyOffered</label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shareClasses: state.investment.companyData.shareClasses
});

export default connect(mapStateToProps)(AddShareClass);