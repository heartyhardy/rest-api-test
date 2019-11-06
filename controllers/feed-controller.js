exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "Example title",
        img: "img/ducky.jpg",
        content: "Some content",
        creator: {
          name: "someguy"
        },
        createdAt: new Date()
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
