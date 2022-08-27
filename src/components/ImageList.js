import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    console.log(props.images)

    const photos = props.images.map((image) => {
        return <ImageCard image={image} key={image.id} />
    });

    return (
        <div className="image-list">
            {photos}
        </div>
    )
}