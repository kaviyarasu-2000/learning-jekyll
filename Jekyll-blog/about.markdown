---
layout: default
title: About
permalink: /about/
---

{% include nav.html %}

 <div class="container-fluid about">
    <div class="text-center p-4">
      <h1 class="pagetitle">{{ page.title }} </h1>
      <h6 class="mt-3">The blog is show in the some general topics.</h6>
      <img class="image mt-5" src="{{ site.baseurl }}/assets/images/about.png">
    </div>
    <div class="text-center">
      <a class="btn btn-primary mb-4" onclick="history.go(-1)">back</a>
    </div>
 </div>

{% include footer.html %}