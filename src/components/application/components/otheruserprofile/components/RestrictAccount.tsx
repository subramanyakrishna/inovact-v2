function RestrictAccount(props: any) {
    return (
        <div className="restrict-account">
            <button className="close-modal" onClick={props.closeModal}>
                &times;
            </button>
            <div className="restrict-account-head">
                <p className="restrict-account-heading">
                    Are you sure you want to restrict Matt Lee's account?
                </p>
                <p className="restrict-account-description">
                    Matt Lee's comments will no longer be visible to others and
                    your teams can no longer be viewed by Matt Lee
                </p>
            </div>
            <div>
                <button className="confirm-action-btn">Confirm Action</button>
            </div>
        </div>
    )
}

export default RestrictAccount
