import { TRUE } from 'node-sass'
import React from 'react'
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'react-share'
function ShareModal(props: any) {
    return (
        <div className="modal_main">
            <div className="modal_cover-delete">
                <button
                    className="close-modal"
                    onClick={props.closeModal}
                    style={{ marginLeft: '5rem' }}
                >
                    &times;
                </button>
                <label
                    className="modal_cover-title"
                    style={{ marginBottom: '2rem' }}
                >
                    Share using
                </label>{' '}
                <br />
                <FacebookShareButton
                    url={'https://peing.net/ja/'}
                    className="share-button"
                >
                    <FacebookIcon size={42} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={'https://peing.net/ja/'}
                    className="share-button"
                >
                    <TwitterIcon size={42} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                    url={'https://peing.net/ja/'}
                    className="share-button"
                >
                    <WhatsappIcon size={42} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton
                    url={'https://peing.net/ja/'}
                    className="share-button"
                >
                    <LinkedinIcon size={42} round={true} />
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default ShareModal
