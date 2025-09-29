const posts = [
  {
    id: 1,
    title: "Post one",
  },
  {
    id: 2,
    title: "Post two",
  },
];

// One way of exporting
// export const getPosts = () => posts;

const getPosts = () => posts;

// Another export
export const getPostsLength = () => posts.length;
// Exporting as default
export default getPosts;

// Another way of exporting
// export { getPosts };
