function toggleComments(element) {
  const commentContainer = element.closest(".comment-container");

  if (commentContainer) {
    const replyCommentsSection = commentContainer.querySelector(".hidden");
    if (replyCommentsSection) {
      replyCommentsSection.classList.toggle("hidden");
    }
  }
}
