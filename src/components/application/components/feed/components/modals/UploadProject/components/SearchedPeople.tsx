import React from 'react'

function SearchedPeople(props: any) {
    const addMention = () => {
        props.addMentions({
            id: props.ppl.user_id,
            image: props.ppl.image,
            user_name: props.ppl.user_name,
        })
    }
    return (
        <div
            className="modal_part_two-mentions-dropdown-ppl"
            onClick={addMention}
        >
            <div className="modal_part_two-mentions-dropdown-img-container">
                <img src={props.ppl.image} alt="" />
            </div>
            <span>{props.ppl.user_name}</span>
        </div>
    )
}

export default SearchedPeople
