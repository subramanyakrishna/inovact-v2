function BlockAccount(props: any) {
    return (
        <div className="block-account">
            <button className="close-modal" onClick={props.closeModal}>
                &times;
            </button>
            <div className="block-account-head">
                <div>
                    <p className="block-account-heading">
                        Are you sure you want to block Matt Lee ?
                    </p>
                </div>

                <p className="block-account-description">
                    Matt will not be notified about this action
                </p>
            </div>

            <div className="block-account-buttons">
                <span className="block-account-report-n-block">
                    Report and Block account
                </span>
                <button className="confirm-action-btn">Confirm Action</button>
            </div>
        </div>
    )
}
export default BlockAccount
