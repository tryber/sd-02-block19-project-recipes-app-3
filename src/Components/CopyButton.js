import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';

const CopyButton = ({ url, index }) => {
  const [copied, setCopied] = useState('');
  const message = () => {
    setCopied('Copied!');
    setTimeout(() => {
      setCopied('');
    }, 2000);
  };

  return (
    <div>
      <div className="buttonAndCopied">
        {copied && <div><p className="copiedText">{copied}</p></div>}
        <CopyToClipboard
          className="copyButton"
          data-testid={(index === undefined) ? 'share-btn' : `${index}-horizontal-share-btn`}
          text={url}
          onCopy={message}
        >
          <div className="FavShare_content">
            <img src={Share} alt="Share your recipe" />
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopyButton;

CopyButton.propTypes = {
  url: PropTypes.string.isRequired,
};
