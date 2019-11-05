exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "Example title",
        content: "Some content"
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  let title = req.body.title;
  let content = req.body.content;

  // Using 201 to indicate a resource created successfully
  res.status(201).json({
    message: "Post created successfully",
    posts: { title, content }
  });
};
