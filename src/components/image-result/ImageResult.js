import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile, IconButton, ZoomIn, Dialog, FlatButton} from "material-ui";


class ImageResult extends Component {
    render() {
        let imageListContent;
        const {images} = this.props;

        if (images) {
            imageListContent = {
            <GridList cols={3}>
                {images.map(img => (
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={<span>by <strong>{img.user}</strong></span>}
                        actionIcon={<IconButton>
                            <ZoomIn color="white"/>
                        </IconButton>}
                    >

                    </GridTile>
                ))}
            </GridList>
        }
        } else {
            imageListContent = null;
        }

        return (
            <div>

            </div>
        );
    }
}

ImageResult.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResult;
