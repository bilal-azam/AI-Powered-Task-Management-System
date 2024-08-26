import React from 'react';

const SocialMediaShare = () => {
    const shareOnFacebook = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank');
    };

    const shareOnTwitter = () => {
        window.open('https://twitter.com/intent/tweet?url=' + window.location.href, '_blank');
    };

    return (
        <div>
            <button onClick={shareOnFacebook}>Share on Facebook</button>
            <button onClick={shareOnTwitter}>Share on Twitter</button>
        </div>
    );
};

export default SocialMediaShare;