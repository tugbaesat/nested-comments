document.addEventListener("DOMContentLoaded", function () {
  const showComments = document.querySelectorAll(".show-comments");

  showComments.forEach((comment) => {
    comment.addEventListener("click", () => {
      const commentContainer = comment.closest(".comment-container");
      commentContainer.classList.toggle("open");
    });
  });
});
