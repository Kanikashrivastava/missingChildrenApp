import React from "react";

class ReplyComment extends React.Component {
  state = {
    comments: [],
    commentInput: ""
  };

  commentField = e => {
    this.setState({ commentInput: e.target.value });
  };

  addComment = () => {
    this.state.comments.push(this.state.commentInput);
  };

  render() {
    return (
      <div className="nestedReply" style={{ display: this.props.replyNestedComment}}>
              <ul>
                {this.state.comments.map((comment, i) => (
                  <li key={i} className="comment">
                    {comment}
                    <br />
                    <h6>
                      <a href={<ReplyComment/>}><mark>reply</mark></a>
                    </h6>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="write text here"
                value={this.state.commentInput}
                onChange={this.commentField}
              />
              <button onClick={this.addComment}>send</button>
            </div>
    )
  }
}

export default ReplyComment;
