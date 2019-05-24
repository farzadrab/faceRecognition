import React from 'react';

const ImageLinkForm = ({ imageUrl, boundingBox }) => {
    return (
        <div className='pa5 center'>
            <img alt='' src={imageUrl} width='500px' />
            <p>
                top: {boundingBox.top_row}
                <br />
                bottom: {boundingBox.bottom_row}
                <br />
                left: {boundingBox.left_col}
                <br />
                right: {boundingBox.right_col}
            </p>

        </div>
    );
}

export default ImageLinkForm;