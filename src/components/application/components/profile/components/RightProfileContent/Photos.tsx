import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

type photoProps = {
    images: string[]
}

function Photos(props: photoProps) {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    const openLightbox = useCallback((event) => {
        // setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    var photos = props.images.map((img) => {
        return {
            src: img,
            width: 1,
            height: 1,
            srcSet: img,
            title: '',
        }
    })

    return (
        <div>
            <div className="preview-image-container">
                {photos[0] && (
                    <div>
                        <img
                            src={photos[0]?.src}
                            className="preview-image"
                            onClick={openLightbox}
                            alt="someimage"
                        />
                        {photos.length > 1 && (
                            <button
                                className="extra-images-btn"
                                onClick={openLightbox}
                            >
                                +{photos.length - 1}
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* <Gallery photos={photos} onClick={openLightbox} /> */}
            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((img) => {
                                return { source: img.src }
                            })}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    )
}

export default Photos

/*
views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                                source: '',
                            }))}*/
