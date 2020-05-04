import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';
import PropTypes from 'prop-types'

const CopyButton = ({ url }) => {
  const [copied, setCopied] = useState('');
  const message = () => {
    setCopied('Copied!');
    setTimeout(() => {
      setCopied('');
    }, 2000);
  };

  return (
    <div>
      <div>
        <CopyToClipboard
          data-testid="share-btn"
          text={url}
          onCopy={() => message()}
        >
          <div className="FavShare_content">
            <img src={Share} alt="Share your recipe" />
          </div>
        </CopyToClipboard>
      </div>
      <div>
        <p>{copied}</p>
      </div>
    </div>
  );
};

export default CopyButton;

CopyButton.propTypes = {
  url: PropTypes.string.isRequired,
}
