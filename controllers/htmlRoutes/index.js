const router = require("express").Router();
const { User, Post } = require("../../models");

// GET homepage
// Navigate to /homepage and pull 20 posts to display along with username
router.get("/homepage", async (req, res) => {
  try {
    // Grab all posts from the database
    var posts = await Post.findAll();

    // Sort the posts from newest to oldest by date
    posts.sort((a, b) => b.updatedAt - a.updatedAt);

    // Limit the rendered output to 20 pins
    const postsData = posts.slice(0, 20).map((post) => ({
      postID: post.id,
      postTitle: post.postTitle,
      postDescription: post.postDescription,
      // take the pin.updatedAt and cut it off at the 4th space and only take the first half
      timestamp: post.updatedAt
        ? post.updatedAt.toString().split(" ").slice(0, 4).join(" ")
        : post.updatedAt,
      postUserId: post.user_id,
    }));

    // Take the creator userID for each post and find the username that matches the userID
    for (let i = 0; i < postsData.length; i++) {
      const userData = await User.findByPk(postsData[i].postUserId, {
        attributes: { exclude: ["password"] },
      });
      const user = userData.get({ plain: true });
      postsData[i].postUsername = user.username;
    }

    // Render the homepage with the postsData
    res.render("homepage", {
      styles: ["homepage"],
      scripts: ["homepage", "search-bar"],
      homepagePosts: postsData,
      user: {
        id: req.session.user_id,
        isLoggedIn: req.session.logged_in,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET navigation to user's post page
// Navigate to /posts/user and then redirect to /posts/user/:username once the username is known
router.get("/dashboard", async (req, res) => {
  try {
    // Log in Check, if not logged in, redirect to home page
    if (!req.session.logged_in) {
      return res.redirect("/");
    }

    // Find the user's username by the session user_id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const user = userData.get({ plain: true });

    // Redirect to /posts/user/:username
    res.redirect(`/dashboard/${user.username}`);
  } catch (err) {
    // Redirect to 404 page on error
    return res.status(404).json(err);
  }
});

// GET specific user's dashboard page
// Navigate to /pins/user/:username
router.get("/dashboard/:username", async (req, res) => {
  try {
    // Find the user's username by the session user_id
    const user = await User.findOne({
      where: {
        username: req.params.username,
      },
      attributes: { exclude: ["password"] },
    });

    // If the user does not exist, redirect to home page
    if (!user) {
      console.error(
        `The user with the provided username "${req.params.username}" does not exist.`
      );
      return res.redirect("/homepage");
    }

    // Find the user's pins
    const posts = await Post.findAll({
      where: { user_id: user.id },
    });

    // Create an array of the pins data
    var postsData = posts.map((post) => ({
      postId: post.id,
      postTitle: post.postTitle,
      postDescription: post.postDescription,
      // Take the post.updatedAt and cut it off at the 4th space and only take the first half
      timestamp: post.updatedAt
        ? post.updatedAt.toString().split(" ").slice(0, 4).join(" ")
        : post.updatedAt,
    }));

    // Render the dashboard with the postsData
    res.render("dashboard", {
      styles: ["dashboard", "homepage"],
      scripts: ["dashboard", "homepage", "search-bar"],
      myPosts: postsData,
      user: {
        id: req.session.user_id,
        isLoggedIn: req.session.logged_in,
      },
    });
  } catch (error) {
    // Redirect to 404 page on error
    return res.status(404).json(error);
  }
});

module.exports = router;
