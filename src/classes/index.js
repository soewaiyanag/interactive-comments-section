import uniqid from "uniqid";

export class CommentObj {
  constructor(user, content) {
    this.id = uniqid();
    this.content = content;
    this.user = user;
    this.createdAt = "0 second ago";
    this.replies = [];
    this.score = 0;
  }
}

export class ReplyObj extends CommentObj {
  constructor(user, content, replyingTo) {
    super(user, content);
    this.replyingTo = replyingTo;
  }
}
