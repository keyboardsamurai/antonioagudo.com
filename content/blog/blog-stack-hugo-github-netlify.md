---
title: "My blog stack - a static site with github, hugo and netlify"
date: 2019-08-29T19:08:34+02:00
image: "images/blog/2019/post-1-blogging.webp"
description: "Where I describe how I came to use hugo and tell all about my life long love affair with Perl based content management systems"
author: "Antonio Agudo"
type: "post"
---
It's been quite a while since I last blogged, though it's something I enjoy. 
Part of the reason for this current iteration of my website is so I could blog more regularly again.
I know, all the cool kids now go to Facebook or Instagram or Tiktok to entertain themselves, but still - 
a blog is the place to go to if you to explain ideas in depth. And although it is tempting to just use medium.com these 
days to gain more reach you ultimately don't own the reach nor the platform.
So I searched around for a good solution and found [Hugo](https://gohugo.io/)

#### Why use a static generator when we have Wordpress&trade;?  

Wordpress is used everywhere for its dynamic capabilities - and it's a cool piece of software. If you know what you are 
doing, you can scale it up to millions of page views per second if need be. Of course, that kind of scaling takes a lot of
hardware for each of the components. Database read-slaves need to be synchronized, frontend servers need to be load 
balanced. Lots of moving parts because literally, everything is dynamic. 

Before Wordpress came along and took the world by storm, my first blog system in 2001 was [Movable Type](https://movabletype.org/) 
by Mena and Ben Trott, which of course evolved to [TypePad](https://www.typepad.com/). That was the only game in town 
back then, when, as kids, we had to run 10 kilometers uphill through half a meter high snow barefoot to go to school each 
morning - metaphorically speaking of course. 

The approach to publishing, that Movable Type had was simple but effective.
It would store all content in flat [BerkeleyDB](https://en.wikipedia.org/wiki/Berkeley_DB) files - no database system
necessary - and when you added an article or changed the templates it would render out HTML and save it to disk.
 
The system was a tremendous success in no small part, due to its incredibly powerful static HTML generator. 
Sites created with Movable Type did not need lots of CPU time, nearly all load was I/O bound instead. 
It takes a good amount of load to saturate such a system, before performance deteriorates.

<img src="/images/blog/2019/hugo.webp" align="right" style="margin: 20px;">
Fast forward to 2013 when Steve Francia decided to build a static generator, mimicking what already worked wonders for 
Jekyll, but using Go instead of Ruby as the codebase language. Intended for raw speed and using the much cooler Git as 
the database to get rid of things like BerkeleyDB files, it still pretty much works as Movable Type 1.0 did.

Well, maybe Movable Type 1.0 on steroids. Since Git hooks make for a nice integration surface and the general 
ecosystem is much more mature than what was available back then. Also, there are cool services, like Netlify who do an 
awesome job of hosting your website.  
