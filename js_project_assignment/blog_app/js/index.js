(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => showBlogs(data))
    .catch((error) => console.log(error));
})();

const postContainer = document.querySelector("#posts_container");

const showBlogs = (blogs) => {
  if (!blogs) {
    postContainer.innerHTML = "<h1  class = 'text-center'>Loading...</h1>";
  }
  if (Array.isArray(blogs)) {
    postContainer.innerHTML = "";
    blogs.forEach((blog) => {
      const blogDiv = document.createElement("div");
      blogDiv.classList.add("blog", "col-md-10", "col-lg-8", "col-xl-7");
      blogDiv.innerHTML = `
        <div class="post-preview">
       
          <h2 class="post-title" data-id=${blog.id}>
            ${blog.title}
          </h2>
          <p class="post-subtitle">
            ${blog.body}
          </p>
          <button type="button" class="btn btn-danger" onClick = "deleteBlog(${blog.id})">Delete</button>
        </div> 
            `;

      postContainer.appendChild(blogDiv);
    });
  }
};

showBlogs();

const deleteBlog = (id) => {
  const confirmation = confirm("Are you sure you want to delete this blog?");
  if (!confirmation) {
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      // Removing the deleted blog from the UI
      const blogDivContainer = document.querySelector(
        `h2[data-id="${id}"]`
      ).parentElement;
      blogDivContainer.remove();
    })
    .catch((error) => console.log(error));
};

const addBlog = () => {
  const blogTitleInput = document.querySelector("#blog_title");
  const blogBodyInput = document.querySelector("#blog_body");

  const title = blogTitleInput.value;
  const body = blogBodyInput.value;

  const newBlog = { title, body };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newBlog),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Clearing input fields after adding a new blog

      blogTitleInput.value = "";
      blogBodyInput.value = "";

      const blogDiv = document.querySelector(".blog");
      blogDiv.innerHTML = `
      <div class="post-preview">
      <h2 class="post-title" data-id=${data.id}>
        ${data.title}
      </h2>
      <p class="post-subtitle">
        ${data.body}
      </p>
      <button type="button" class="btn btn-danger" onClick = "deleteBlog(${data.id})">Delete</button>
        </div> 
      `;
      postContainer.prepend(blogDiv);
    })
    .catch((error) => console.log(error));
};
