import React from 'react';

import '../../css/components/display/sharePurchaseForm.scss';

export default function SharePurchaseForm(props) {
    const availableTypes = props.data.availableTypes.map((type, i) => {
            return(
                <option value={type.typeSlug} key={i}>
                    {type.typeName} Shares ({type.typePricePerShare}/share)
                </option>
            );
        });

    return (
        <form className="share-purchase-form hidden">
            <header className="form-header"><h2>Purchase Shares of {props.data.companyName}</h2></header>
            <label name="purchaseType" className="form-label">
                Type of Shares
          <select name="purchaseType">
                    {availableTypes}
                </select>
            </label>
            <label name="numShares" className="form-label">
                Number of Shares Requested
          <input type="number" name="numShares" />
            </label>
            <p className="total">Total Amount: <span className="total-calced">$xxx,xxx</span></p>
            <button type="submit">Request Shares</button>
            <button type="reset">Cancel</button>
        </form>
    );
}