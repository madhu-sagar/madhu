If there was something that I had to learn earlier that would make my life so easy, it was about how exactly the javascript runs in the browser and how the browser works internally.

So if someone has never traversed this path earlier, here is a small guide. The fancy new UI library that you have always wanted to try your hands on can wait. I promise!!!

Felix has reduced the burden on others and has written a 2-part series on how the javascript runs in the browser at a high-level.

Here are the links
1. [JavaScript Event Loop And Call Stack Explained](https://felixgerschau.com/javascript-event-loop-call-stack)
2. [JavaScript's Memory Management Explained](https://felixgerschau.com/javascript-memory-management/)

At a more technical depth are the below blog posts that adds to the discussion prefectly.
1. [Why Web Developers Need to Care about Interactivity](https://philipwalton.com/articles/why-web-developers-need-to-care-about-interactivity/)
2. [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)


And how does the pixel get rendered while Javascript does its thing? Steve Kobes has created a wonderful presentation called ['Life of a Pixel'](https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.ga884fe665f_64_316) that is sufficiently high level as well.
There is also a [video by the same name](https://www.youtube.com/watch?v=m-J-tbAlFic) but since I like reading so I can dictate my experience with the content, I prefer the slides.

But then have to give it up for this beautiful [video presentation](https://www.youtube.com/watch?v=7gtf47D_bu0&list=PLS3jzvALRSe6uP9gVfXLCG6nWo7M0hAJY) by Grigorik on web performance that is as much as the browser internals as it is about web perf.

If you are done with above and still curious about something new, here is the [error codes](https://source.chromium.org/chromium/chromium/src/+/master:net/base/net_error_list.h) listed for all the network errors that can occur in the Chrome browser. I'm sure you must have already heard that the V8 engine that powers the browser is written in C++ and so are the other stable and popular browser(s). So maybe time to start digging deeper into the C++ source code?
