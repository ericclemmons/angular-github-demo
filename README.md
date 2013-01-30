AngularJS + Github Demo
=======================

This project serves as a progressive, working example of a demo
application consuming the [Github API][github] & using [AngularJS][angular].

![Screenshot](https://raw.github.com/ericclemmons/angular-github-demo/master/screenshot.png)


Author
------

- [@ericclemmons][twitter]


Running the Demo
----------------

    $ git clone git://github.com/ericclemmons/angular-github-demo.git
    $ cd angular-github-demo
    $ python -m SimpleHTTPServer 8000

Now open [http://localhost:8000/](http://localhost:8000).

You can then use `git checkout [BRANCH]` to see the app progress!


Features
--------

Follow along with Github to see how these were built!

- [0.][0] - Setup Angular App (`ng-app`, `ng-model`, `ng-bind`)
    - [1.][1] - Project API (https://api.github.com/users/:user/repos)
    - [1.1.][1.1] - API called for username/organization upon `submit`
    - [1.2.][1.2] - Iterate over projects in `#left`
    - [1.3.][1.3] - Filter projects via search
    - [1.4.][1.4] - Replace placeholder text in `#main` with project data

- [2.][2] - Issues API (https://api.github.com/repos/:user/:project/issues?state=open)
    - [2.1.][2.1] - Selected project calls Issues API
    - [2.2.][2.2] - Iterate over issues in `#main`

- [3.][3] - Organization & Architecture

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
[2.1]: https://github.com/ericclemmons/angular-github-demo/compare/2...2.1
[2.2]: https://github.com/ericclemmons/angular-github-demo/compare/2.1...2.2
[3]: https://github.com/ericclemmons/angular-github-demo/compare/2.2...3
