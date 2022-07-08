function Comments({comments}) {
    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment => {
              return <div key={comment.id}>
                   {comment.user}: {comment.comment}
             </div>
            })}
        </div>
    )
}

export default Comments;