import React from 'react'

function MentionsTag(props: any) {
    return (
        <div className="modal_part_two-mentions-tag">
            <div className="modal_part_two-mentions-tag-img-container">
                <img src={props.ppl.image} alt="" />
            </div>
            <span>{props.ppl.user_name}</span>
            <button className="remove-member-create-team">&times;</button>
        </div>
    )
}

export default MentionsTag
