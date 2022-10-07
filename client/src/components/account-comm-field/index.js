import React from 'react';
import {
  AccountCommFieldStyles,
  AccountCommFieldChildren
} from './accountCommField.styles';

const commInfoMarketing = (
  <>
    <p>Emails about your account and orders are important. We send those even if you have opted out of marketing emails.</p>
    <p>
      We send marketing emails to <b>{'firstnamelastname@gmail.com'}</b>
    </p>
    <p>Receive marketing emails</p>
    <div style={
      { display: 'flex', flexDirection: 'column' }
    }>
      <div className="marketing-checkbox">
        <input type="checkbox" id="marketing-email" name="marketing-email" />
        <label htmlFor="marketing-email">Yes! I want emails about savings, new items, and more!</label>
      </div>
      <div className="marketing-checkbox">
        <input type="checkbox" id="marketing-review" name="marketing-review" />
        <label htmlFor="marketing-review">Requests to rate and review products you&lsquo;ve offered</label>
      </div>
      <div className="marketing-checkbox">
        <input type="checkbox" id="marketing-invite" name="marketing-invite" />
        <label htmlFor="marketing-invite">Invitation to take customer surveys</label>
      </div>
    </div>
  </>
);

const commInfoSharing = (
  <>
  </>
);

const commInfoPurchases = (
  <>
  </>
);

function mapNameToInfo(name) {
  let info = (<></>);
  switch (name) {
  case 'marketing':
    info = commInfoMarketing;
    break;
  case 'sharing':
    info = commInfoSharing;
    break;
  case 'purchases':
    info = commInfoPurchases;
    break;
  default:
    break;
  }
  return info;
}

const AccountCommField = ({ title, name, onClick, show }) => {
  return (
    <AccountCommFieldStyles>
      <div
        className="title"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <span>{title}</span>
        <input
          type="button"
          name={name}
          onClick={onClick}
        />
      </div>
      <AccountCommFieldChildren show={show}>
        {mapNameToInfo(name)}
      </AccountCommFieldChildren>
    </AccountCommFieldStyles>
  );
};

export default AccountCommField;
