AngularJS+Github Demo
===================

This project serves as a progressive, working example of a demo
application consuming the [Github API][1] & using [AngularJS][2].


Author
------

- [@ericclemmons][3]


Features
--------

Let's see how many of these features we can build in!

0. Setup Angular App (`ng-app`, `ng-model`, `ng-bind`)

1. Project API (https://api.github.com/users/:user/repos)

    1. API called for username/organization upon `submit`
    2. Iterate over projects in `#left`
    3. Filter projects via search
    4. Replace placeholder text in `#main` with project data

2. Issues API (https://api.github.com/repos/:user/:project/issues?state=open)

    1. Selected project calls Issues API
    2. Iterate over issues in `#main`

3. Organization & Architecture

For more information, see the exhaustive, highly detailed wireframe:

![Features](https://raw.github.com/ericclemmons/angular-github-demo/master/features.jpg)


License
-------

Copyright (c) 2013 Eric Clemmons Licensed under the MIT license.


[1]: http://developer.github.com/
[2]: http://angularjs.org/
[3]: https://twitter.com/ericclemmons