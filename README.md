AngularJS + Github Demo
=======================

This project serves as a progressive, working example of a demo
application consuming the [Github API][github] & using [AngularJS][angular].


Author
------

- [@ericclemmons][twitter]


Features
--------

Follow along with Github to see how these were built!

0. [Compare][0] - Setup Angular App (`ng-app`, `ng-model`, `ng-bind`)

1. [Compare][1] - Project API (https://api.github.com/users/:user/repos)

    1. [Compare][1.1] - API called for username/organization upon `submit`
    2. [Compare][1.2] - Iterate over projects in `#left`
    3. [Compare][1.3] - Filter projects via search
    4. [Compare][1.4] - Replace placeholder text in `#main` with project data

2. [Compare][2] - Issues API (https://api.github.com/repos/:user/:project/issues?state=open)

    1. [Compare][2.1] - Selected project calls Issues API
    2. [Compare][2.2] - Iterate over issues in `#main`

3. Organization & Architecture

For more information, see the exhaustive, highly detailed wireframe:

![Features](https://raw.github.com/ericclemmons/angular-github-demo/master/features.jpg)


License
-------

Copyright (c) 2013 Eric Clemmons Licensed under the MIT license.


[github]: http://developer.github.com/
[angular]: http://angularjs.org/
[twitter]: https://twitter.com/ericclemmons

[0]: https://github.com/ericclemmons/angular-github-demo/compare/master...0
[1]: https://github.com/ericclemmons/angular-github-demo/compare/1...1.4
[1.1]: https://github.com/ericclemmons/angular-github-demo/compare/1...1.1
[1.2]: https://github.com/ericclemmons/angular-github-demo/compare/1.1...1.2
[1.3]: https://github.com/ericclemmons/angular-github-demo/compare/1.2...1.3
[1.4]: https://github.com/ericclemmons/angular-github-demo/compare/1.3...1.4
[2]: https://github.com/ericclemmons/angular-github-demo/compare/2...2.2
[2.1]: https://github.com/ericclemmons/angular-github-demo/compare/2.0...2.1
[2.2]: https://github.com/ericclemmons/angular-github-demo/compare/2.1...2.2