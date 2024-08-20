var posts=["2024/08/20/hello-world/","2024/08/20/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };