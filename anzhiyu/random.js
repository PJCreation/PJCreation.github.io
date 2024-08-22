var posts=["2024.08/AI大模型的本地部署——安装open-webui/","2024.08/hello-world/","2022.06/Linux-Docker命令/","2024.08/转-Python虚拟环境教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };