import React from 'react'

const SuggestionInvitation = () => {
    return (
        <div className="suggestions">
            <h6 className="suggestions__title">Suggestion Invitation</h6>

            <div className="suggestions__row">
                <div className="suggestions__row__rowInfo">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt=""
                    />

                    <div className="suggestions__row__text">
                        <h5 className="text-style--bold text-align--left text-size--big">
                            Jane Doe
                        </h5>
                        <p className="text-style--light text-align--left text-size--small">
                            Designation
                        </p>
                    </div>
                </div>
                <div className="suggestions__row__buttons">
                    <button className="suggestions__row__button--green">
                        Invite
                    </button>
                    <button className="suggestions__row__button--white">
                        Remove
                    </button>
                </div>
            </div>

            <div className="suggestions__row">
                <div className="suggestions__row__rowInfo">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt=""
                    />

                    <div className="suggestions__row__text">
                        <h5 className="title">Jane Doe</h5>
                        <p className="sub-title">Designation</p>
                    </div>
                </div>
                <div className="suggestions__row__buttons">
                    <button className="suggestions__row__button--green">
                        Invite
                    </button>
                    <button className="suggestions__row__button--white">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SuggestionInvitation
