var posts=["2024.08/AI大模型的本地部署——安装open-webui/","2024.08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };