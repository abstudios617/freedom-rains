import React from 'react';
import {
  DeleteAccountStyles,
  DeleteAccountButton
} from './accountDelete.styles';

const DeleteAccount = ({ onClick, onCancel }) => {
  const info = (
    <p>
      <b>Deleting your account is permanent.</b> 
      &nbsp;
      When you delete your Freedom account, you won&lsquo;t be able to retrieve content or information from this account.
    </p>
  );

  return (
    <DeleteAccountStyles>
      {info}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DeleteAccountButton>
          <div onClick={onClick}>
            Continue to Account Deletion
          </div>
        </DeleteAccountButton>
        <input
          type="button"
          value="Cancel"
          onClick={onCancel}
        />
      </div>
    </DeleteAccountStyles>
  );
};

export default DeleteAccount;
