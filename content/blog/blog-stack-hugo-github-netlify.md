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

## Customizing the hugo template

Of course you will want to customize the theme you picked out for your website. Never make the mistake of editing the 
theme directly from it's directory in ```/themes```. Instead just copy the template files to the layouts folder and 
make use of the [hugo file lookup mechanism](https://gohugo.io/templates/lookup-order/). 

Just to make sure you don't accidentally modify a file inside the ```/templates``` folder it's a good idea to set read 
only flags on the whole directory. Just do ```chmod -R 555 themes/theme-name```  

### Let's Optimize

I like to optimize my websites quite a bit before letting google index them. Not only will those optimized pages rank 
better, people will also be thankful that you didn't waste their time with endlessly loading websites. 
[Google's pagespeed tool](https://developers.google.com/speed/pagespeed/insights/) makes it really easy to cover most of
he big issues that can cost you users because your website is too slow for whatever reason. 

### Converting images to WebP
A big chunk of load time routinely falls to image size. This is a low hanging fruit. Just use mod_pagespeed on nginx and 
let it take care of things, right? Well - not in this case. Hosting the site on netlify means top notch infrastructure, 
but no choice in servers. 

For the sake of absolutely best compression I will use webp. Why? Well for one, because it's freakishly small file format.
But also, because it makes google happy. So on a mac you can just use ```brew install cwebp``` 
on linux you do ```apt-get install cwebp``` to install the handy converter utility and then you navigate to your hugo 
site root, make sure all files are backed up or better yet, checked into git - just in case disaster strikes.

Now you can run a recursive conversion task on all PNG or JPG images and turn them into WebP images with a default 
compression quality of 75 while preserving the alpha channel. 

```shell script
find ./ \( -name "*.png" -o -name "*.jpg" \) -exec cwebp -q 75 {} -o {}.webp \;                 
```

That way you easily save 40% or more in file size, depending on how well your files were optimized initially.

Now let's rename all those ```.png.webp``` or ```.jpg.webp``` images to just ```.webp``` file extensions. 

```shell script
find . -name "*.png.webp" -exec bash -c 'mv "$1" "${1%.png.webp}".webp' - '{}' \;                 
find . -name "*.jpg.webp" -exec bash -c 'mv "$1" "${1%.jpg.webp}".webp' - '{}' \;                 
```                     

And then you will have to replace all images in your template inside your ```layouts/``` folder.

#### Troubleshooting browser compatibility issues

Take a look at your site in Chrome. Looks smashing!<br>
Now look at it again in Safari. On your iPhone/iPad. On IE11. Where do those broken images come from? Not that great, right?

Welcome to image format hell. We decided we'd go with a modern format, but there are [quite a number of browsers
out there](https://caniuse.com/#feat=webp) that are, well, not that modern for one reason or the other.

You have two choices here. Either you provide those older browsers with a fallback image (i.e. the original image format
PNG or JPG) or you teach those olden browsers how to properly display WebP by ways of using a polyfill.

I will do the latter. By compiling the ES6 based [webp-hero](https://github.com/chase-moskal/webp-hero) library to 
common javascript like so:

```shell script
git clone https://github.com/chase-moskal/webp-hero.git
cd webp-hero
npm install
npm run build
cp -r dist-cjs/ ~/myhugosite/static/js/libwebp
```

and initializing them in your footer like so

```html
<script src="/js/polyfills.js"></script>
<script src="/js/webp-hero.bundle.js"></script>
<script>
  var webpMachine = new webpHero.WebpMachine()
  webpMachine.polyfillDocument()
</script>    
```

Now all old browsers will be able to see your WebP images as well. Of course this approach has some obvious drawbacks:
We incur a performance hit on older browsers and a couple of requests in order to save on image size. On image heavy 
sites this might be worth it though. 
