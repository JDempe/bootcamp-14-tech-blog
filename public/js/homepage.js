$(document).ready(function () {
  //  if any post is clicked on, expand the card to show the comments section
  $(".show-comment-btn").click(function () {
    // Find the siblig comment-section and toggle the show/hidden
    $(this).siblings(".comment-section").slideToggle();

    // change the text to hide comments
    $(this).text(function (i, text) {
      return text === "Hide Comments" ? "View Comments" : "Hide Comments";
    });
  });

  $(".add-comment-btn").click(function () {
    // if the add comment btn is clicked, take the text from text area, add it to the db and then append it to the comment section
    var commentText = $(this).siblings(".comment-text").val();
    var commentTextArea = $(this).siblings(".comment-text");
    var postId = $(this).closest(".post").data("postid");
    var commentSection = $(this).parents(".comment-section");
    var commentList = commentSection.children(".comment-list");

    // if the comment text is empty, don't do anything
    if (commentText === "") {
      return;
    }

    // if the comment text is not empty, add it to the db and then append it to the comment section
    $.ajax({
      url: "/api/comments/create/" + postId,
      method: "POST",
      data: {
        commentText: commentText,
      },
    }).then(function (data) {
      // if no-comment-message exists, remove it
      if (commentList.children(".no-comment-message").length > 0) {
        commentList.children(".no-comment-message").remove();
      }

      // get request for the just created comment for the createdAt date because it gives a different format for some reason
      $.ajax({
        url: "/api/comments/" + data.id,
        method: "GET",
      }).then(function (data) {


      // append the comment to the comment list
      commentList.append(
        `<div class="comment-date">${data.createdAt}</div>
        <div class="comment card">
          <div class="comment-text">${commentText}</div>
          <div class="comment-username">- ${data.username}</div>
        </div>`
      );

      // clear the text area
      commentTextArea.val("");
    });

  });
  });


});
