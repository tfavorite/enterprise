
# Welcome to Soho XI

Soho XI is the next generation of Hook and Loop's Html controls for Infor Applications. This version is built from the ground up to be responsive, touch friendly, more flexible and completely accessible. Only the most accessible and responsive controls from the previous set are retained in this new set.

For guidelines on when and where to use the controls see the [Soho Style Guide](http://soho.infor.com).

This project is an open source project. If you have a contribution please [submit a pull request](#pull-requests). However, your code must follow our coding guidelines as mentioned in this page and use designs and behavior approved by Hook and Loop.

The project is a simple node project using SASS and Grunt with Grunt Watch and Live Reload to stage a serious of control examples shown on example and documentation pages.

## New Features
* Supports AMD (fx.. Require JS)
* Smaller Footprint
* Source Maps
* More Template Friendly
* Sass Friendly
* Themes
* Responsive
* Touch Friendly
* Retina Ready with SVG images and icons
* IE8 Support not included at the moment (TBD Might not be :)
* Rewrites: Grid / DateField
* Globalization
* Input Formatting
* Validation
* Analytics

## Upgrade Guide (from 3.x)

### Checkboxes
* New Markup

### Rewrites
* Grid
* DateField
* Tabs

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | No Tested ✔ |No Tested ✔ |


# Running the Development Project

## Install
* Install nodejs as paying attention to your OS directions: http://nodejs.org/
* Install gruntjs: http://gruntjs.com/ by running (`npm install -g grunt-cli`)
* Install sass: http://sass-lang.com/
* Install postgresql (for sample data): http://www.postgresql.org/download/

## Git The Code

* First clone the repo: `git clone http://git.infor.com/scm/soho/controls.git`
* Move into your new repo: `cd sohoxi`
* Then  `npm install` to install node package dependencies
* For details info and great tutorials on Git scenarios see `https://www.atlassian.com/git/tutorials/`



## Running The App
* `cd` into project folder and run `node server` to talk a walk in Grammercy Park
* Run `grunt` to compile initial assests
* Make a new terminal window and cd into project folder and run `grunt watch`
* Go to `http://localhost:4000/`
* Note that at this point any changes you make will cause Sass to recomplile and the browser will reload thanks to live reload

# Contributing to Soho XI

So you're interested in giving us a hand? That's awesome! We've put together some brief guidelines that should help you get started quickly and easily.

There are several to get involved, this document covers:

* [raising issues](#raising-issues)
    * [bug reports](#bugs)
    * [feature requests](#features)
    * [change requests](#changes)
* [working on SoHo Xi core](#core)
    * [submitting pull requests](#pull-requests)
* [testing and quality assurance](#testing)
* [writing documentation](#documentation)


<a name="raising-issues"></a>
## Reporting An Issue

If you're about to raise an issue because think you've found a problem, or you'd like to make a request for a new feature in the codebase, or any other reason… please read this first.

The [Jira issue tracker](http://jira.infor.com/browse/HFC) is the preferred channel for [bug reports](#bugs), [feature requests](#features), [change requests](#changes).

Use Git for [submitting pull requests](#pull-requests), but please respect the following:

* Please **search for existing issues** in JIRA before submitting a pull request. Help us keep duplicate issues to a minimum by checking to see if someone has already reported your problem or requested your idea.

* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

<a name="bugs"></a>
### Bug Reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the Jira and Git issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or look for [closed issues in the current milestone](http://jira.infor.com/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+HFC+AND+status+%3D+Resolved+ORDER+BY+priority+DESC&mode=hide).

3. **Isolate the problem** &mdash; ideally create a [reduced test case](http://css-tricks.com/6263-reduced-test-cases/) and a live example.

4. **Include a screencast if relevant** - Is your issue about a design or front end feature or bug? The most helpful thing in the world is if we can *see* what you're talking about.
Use [LICEcap](http://www.cockos.com/licecap/) to quickly and easily record a short screencast (24fps) and save it as an animated gif! Embed it directly into your Jira issue.

5. Use the Bug Report template below

A good bug report shouldn't leave others needing to chase you up for more information. Be sure to include the details of your environment.

```
Short and descriptive example bug report title

h3. Issue Summary

A summary of the issue and the browser/OS environment in which it occurs. If
suitable, include the steps required to reproduce the bug.

h3. Steps to Reproduce

1. This is the first step
2. This is the second step
3. Further steps, etc.

Any other information you want to share that is relevant to the issue being
reported. Especially, why do you consider this to be a bug? What do you expect to happen instead?

h3. Technical details:

* Script/Css Version: (See Head of the File)
* Client OS: Mac OS X 10.8.4
* Browser: Chrome 29.0.1547.57
```

<a name="features"></a>
### Feature Requests

Feature requests are welcome. Before you submit one be sure to have:

1. Read the [Roadmap and Planned Features](http://jira.infor.com/browse/HFC#selectedTab=com.atlassian.jira.plugin.system.project%3Aroadmap-panel) and check the feature hasn't already been requested. GP issues are noted with a 4.0 in the title
2. Take a moment to think about whether your idea fits with the scope and aims of the project, or if it might better fit being an app/plugin/extension. Also think if anyone else but your team would want it..
3. Remember, it's up to *you* to make a strong case to convince the merits of this feature. "We did it before" isnt strong enough. Please provide as much detail and context as possible, this means explaining the use case and why it is likely to be common.


<a name="changes"></a>
### Change Requests

Change requests cover both architectural and functional changes to how the controls work. If you have an idea for a new or different dependency, a refactor, or an improvement to a feature, etc  - please be sure to:

1. **Use the Stash and Jira search** and check someone else didn't get there first
2. Take a moment to think about the best way to make a case for, and explain what you're thinking. Are you sure this shouldn't really be a [bug report](#bug-reports) or a [feature request](#feature-requests)? Is it really one idea or is it many? What's the context? What problem are you solving? Why is what you are suggesting better than what's already there? Does it fit with the Roadmap?


<a name="pull-requests"></a>
### Submitting Pull Requests

Pull requests are awesome. If you're looking to raise a PR for something which doesn't have an open issue, please think carefully about [raising an issue](#raising-issues) which your PR can close, especially if you're fixing a bug.

If you'd like to submit a pull request you'll need to do the following:

1. **Fork the SoHo Xi Controls project in Stash.** Navigate to our internal [Stash Git Repository](http://git.infor.com/projects/SOHO/repos/controls) (you may need to contact Tim McConechy to have you added to the Stash Users list).  On the left sidebar at the top, click the button under *Actions* that says *Fork Repository*.  On the screen that follows, make sure *Enable Fork Syncing* is checked, and click *Fork Repository* to create your own remote branch of the SoHo Xi Controls Project.
2. **Clone the Repository on your machine.**  Get a local clone of your newly created remote repository. In Stash, click the *Repositories* dropdown on the top of the window, and find the link with Your Name along side the word *Controls*.  On the page that follows, click the *Clone* link in the left sidebar.  Using the URL provided to [Clone the Respository with Git](http://git-scm.com/docs/git-clone).
3. **Make your changes with the local copy of the code.**
4. **Commit your changes locally.**  Use `git commit -am "[COMMIT MESSAGE]"` and type any related JIRA Ticket numbers into the message to have our build system automatically link your commits to those issues later (For Example "HFC-2105 - Created the project scaffolding needed for adding the SoHo Xi Action Button").  Repeat Steps 3 and 4 as many times as necessary to refine your code.  Please keep in mind our [coding standards](#coding-standards) as you perform these steps.
5. **Pull/Rebase to the latest version of the controls before you submit.**  If enough time passes between your original clone and the completion of your changes, the main repository may have changed and some files you've edited may be out of sync.  To re-sync your remote branch and clone, use the following commands after committing your changes:
  * `git pull`
  * `git rebase`
You may need to merge some files.  Follow your Git client's directions on properly merging the files, and recommit the changes.
6. **Push your changes to your remote repository.**  Use `git push` to push your changes out to your branch on the Stash repository.
7. **Open a pull request.**  Using the Stash website, navigate back to the [Main SoHo Xi Controls repository](http://git.infor.com/projects/SOHO/repos/controls), and click the *Pull Requests* link on the left sidebar.  On the screen that follows, click the *Create a pull request* button. On the next screen, use the drop downs to select the Source/Destination repos (Yours and the Main repo, respectively). Review the files changed underneath, and click "Continue" when ready.  On the screen that follows, you'll be presented with a textbox containing a combination of all your commits for this pull.  Please organize the text accordingly, and list "Tim McConechy" as a reviewer before clicking "Submit".

See additional information here on how to submit a [pull request](https://confluence.atlassian.com/display/STASH/Using+pull+requests+in+Stash)

<a name="testing"></a>
### Testing and Quality Assurance

Never underestimate just how useful quality assurance is. If you're looking to get involved with the code base and don't know where to start, checking out and testing a pull request is one of the most useful things you could do.

If you want to get involved with testing SoHo Xi, there is a set of [QA Documentation](#qa-documentation) on the wiki.

Essentially though, [check out the latest master](http://git.infor.com/projects/GP/repos/gp-controls/branches), take it for a spin, and if you find anything odd, please follow the [bug report guidelines](#bug-reports) and let us know!


<a name="documentation"></a>
### Documentation

Soho XI's current documentation can be found at [soho.infor.com](http://soho.infor.com).

The documentation will be generated created inline in the pages (soon but not yet). You can fork the repo and submit pull requests following the [pull-request](#pull-requests) guidelines.

<a name="coding-standards"></a>
## Coding Standards and Conventions

[Coding Standards are now in their own Repo](http://git.infor.com/projects/SHARED/repos/coding-standards/browse/README.md)

<a name="developer-guide"></a>
## Developer Guide

#### Coding a new Control
 - See if it can be done with only css.
 - Add _*.scss file to sass/controls folder similar to current examples
 - Add new entry for new file in _controls.scss
 - Add any variables in _config.scss
 - Add a view like current examples to views/controls
 - Add link to view to index.html page
 - if js is needed copy the template.js in the js/controls folder.
 - modify the gruntfie.js to add the new script
 - add initializer code to initialize.js (should be able to boot strap the page)
 - code control
 - right unit tests by adding a js file to tests/spec like existing tests, make it run the tests/controlname page and test out various things as spec'd
 - make sure all tests pass
 - run grunt to test jshint for the new control
 - verify html is valid: https://addons.mozilla.org/en-US/firefox/addon/html-validator/
 - verify no automated accessibility errors http://squizlabs.github.io/HTML_CodeSniffer/
 - test your page with voice over https://www.apple.com/voiceover/info/guide/
 - test your page with Jaws (download http://www.freedomscientific.com/Downloads/ProductDemos) http://www.washington.edu/itconnect/learn/accessible/atc/quickstarts/jaws-2/
 - commit and pull request
 - close jira and quote the Jira number on the commit message

<a name="qa-documentation"></a>
## QA Documentation

Test Page:
http://107.170.15.202:4000/
(Note that each control can be accessed on its own url `http://107.170.15.202:4000/controls/<name>` for example:
http://107.170.15.202:4000/controls/slider)

Jira: For Reporting Issues..
http://jira.infor.com/browse/HFC

RoadMap:
https://docs.google.com/spreadsheets/d/1nxSEfNoKtQ9i3R7hgokj8VTdAJ95J8SXfhJ7IrtrOf0/edit?pli=1#gid=345637423

Requirements:
https://docs.google.com/spreadsheets/d/1Z9mmUZJlAqkCLy8vyie3AjRKUR4SVKuHGyFiQiGm98A/edit?pli=1#gid=989468169

Usefull Links:
http://accessibility.psu.edu/protocol
http://www.paciellogroup.com/blog/2010/04/html5-and-the-myth-of-wai-aria-redundance/

### Things to Test

The controls should be tested in several ways:

 - Browser Testing - IE9, IE10, IE11, Firefox, Safari, Chrome, IOS  (Phone and Tablet), Android (Phone and Tablet), Windows Touch (Surface)
 - Touch Device Support Testing
 - Accessibility Testing according to [WCAG Accessibility Standards](http://www.w3.org/TR/WCAG20/)
 - Developer Testing - Can the Controls be easily coded from the documentation, developer Web Driver.IO tests ect.
 -  Testing against requirements

### Related Testing Tools

- Tester can grab latest code from http://git.infor.com/projects/SOHO/repos/controls/browse  (Generally Two Month Cycles for versions/QA). Current Jira version is 4.0 for reporting
- tester would go through every Html page example opening it in:  IE9, IE10, IE11, Firefox, Safari, Chrome, IOS  (Phone and Tablet), Android (Phone and Tablet), Windows Touch (Surface)
- Cross check designs with https://docs.google.com/spreadsheets/d/1Z9mmUZJlAqkCLy8vyie3AjRKUR4SVKuHGyFiQiGm98A/edit?pli=1#gid=989468169
or eventually the SoHo XI site pages
- Tests for Accessibility

    1. Run Wave Toolbar https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh/related and https://addons.mozilla.org/en-US/firefox/addon/wave-toolbar/
    2. Run Squizz – Html Sniffer http://squizlabs.github.io/HTML_CodeSniffer/
    3. Test for Keyboard against http://access.aol.com/dhtml-style-guide-working-group/
    4. Test with screen readers (voice over, nvda and jaws), If only one Jaws is most critical
     [Jaws](http://www.freedomscientific.com/Products/Blindness/JAWS) can be downloaded and used for 40 minutes before a reboot. It runs on windows and works best on newer IE browsers. This is the primary screen reader to learn and test.
     Secondary Screen readers are [Voice over](https://www.apple.com/voiceover/info/guide/) for use on IOS and Mac and [NVDA](http://www.nvaccess.org/) for use in windows Firefox.
- Any issues or inconsistencies would be reported to http://jira.infor.com/browse/HFC
- Create Selenium (Javascript based) scripts or similar tests (see tests folder in git project)
- Help contribute to questions on Jira and make test examples to test different scenarios like the current test examples.

# Teams Using

| Project            | Comments      |  Names |
|--------------------|-------------|------|
| Approva Applications |An ASP Application interested in accessibility | Shabu Kutty |
| Automotive Exchange  | Evaluate with AngularJS and GWT | Tien Hanh Pham, Michael Lenz |
| Business Vault |    Justin Timbers   |   A JSF based Single Page App implement with jQuery |
| Care Assignments |   | Michael Welborn |
| Certification Manager |   |    Syedur Islam |
| Certpoint LMS  |   | Blessed Dianne Valencia |
| CPM Applications (4) |   | Rick Leedy, Mike Surel |
| CLM Web UI |   | Michael Pendon |
| Cloud Suite |   | Adel, Rick Hansen  |
| GFC  | Lawson App | Tiffany Kai King, Jon Cadag |
| Hansen 8  | An ASP Application interested in accessibility  | Ovidiu Petruescu |
| Healthcare Clinical  |   | Charlie Price |
| HMS  |   | David Parisi |
| Home Pages  | Typescript, Angular  | Fredrik Eriksson |
| Infinium SHCM  |   | Joe Bockskopf |
| Infor ERP LN - Customer Specific Utilities  |   | Flavio Marcato |
| Landmark  | Jetty Server Servlet | Phillip Patton |
| Lawson S3  |   | Andy Buboltz |
| LBI |   | Steve Stahl, Rommel Dollison |
| LTM App Group |   | Jerry Drinka, David Cooper |
| Masterpiece |   | Tam Nav |
| MNT0386 - Cloud Enablement of SRS |   | Leo Peng |
| Mongoose - Demo Services | Mongoose | Lee Flaherty |
| MSCM (Mobile Supply Chain Management ) |   | Ferdinand Brian Verdejol, Larry Amisola |
| M3 Sales and Marketing Suite Team - Metadata Publisher |   | Ralph Brian Mercadal, Lito Lopez |
| MUA (M3H5 Client) |   | Michael Quibin , Jack Rubillar |
| Optiva |   | Andy Koenigsberg |
| PMServerAdmin |   | Mike Campbell |
| (Infor) PLM Discrete |   | Srinivasulu Vadakattu |
| PCM | Knockout App | Tim Dunham |
| Rhythm | Node Js app with Marionette | Thim Orskov |
| Sales Portal |   | Matt Defina  |
| SmartStream | ASP | Wim Denayer |
| Smart Mobile CityWatch app | ?? | Nicholas Gabb |
| Softbrands FourthShift ERP | ASP | Steve Duepner |
| S3 Worklist | Webpart (Black) | Jeremy Spring |
| Sunsystems Transfer Desk | Alexander Taylor | MVC3 |
| Supply Chain Execution | Anindhya Sharma | Reviewing |
| SupplyWeb | Chad Paulinski | Reviewing |
| System I |   | Richard Sankey |
| VR POC | (POS system) works on Windows Forms using the ProvideX language. Win Forms dynamically transformed to a Web Forms (DHTML), | Arnaud Pochon  |
| Xtreme Support | ASP| Raj S. Joshi |



