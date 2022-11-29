import React from 'react'
import FormAddComment from './FormAddComment'

const AddCommentModal = ({ openCommentModal }) => {
    return (
        <div className='comment-modal'>
            <FormAddComment openCommentModal={openCommentModal} />
        </div>
    )
}

export default AddCommentModal