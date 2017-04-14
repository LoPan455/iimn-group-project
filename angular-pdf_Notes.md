#Red=hash <br>
*Purple=open/close stars* <br>
**Yellow=open/close 2 stars** <br>
_Italics_
`Green=open/close ticks` <br>
<red> <br>
[sumWebsite](http://www.www.com) <br>
1.  Red Numbers <br>
#------------------------------------- <br>
[Angular-PDF](https://github.com/sayanee/angularjs-pdf)
[Angular-PDF_FAQ]
# angular-pdf
Version: 1.5.1

**An AngularJS directive ng-pdf to display PDF files with PDFJS.**
Overview
[Demo](https://github.com/sayanee/angularjs-pdf/blob/master/ng-pdf.gif)
Integrate PDF files right into web pages.

Requirements
Check bower.json file for dependencies and their versions:
AngularJS - get the latest angular.min.js
PDFJS - build the files pdf.js and pdf.worker.js
Evergreen browsers
Features

next / previous page
zoom in / out / fit 100%
rotate clockwise
jump to a page number
when scrolling, the pdf controls will get fixed position at the top
define the view template
define the path to pdf with scope variable
handles error
show loading of pdf
show progress percentage of loading pdf
insert password for protected PDFs
dynamically change the pdf url
support retina canvas
set authorization or http headers
Getting Started

Install or copy over the file dist/angular-pdf.min.js or dist/angular-pdf.js

bower install angular-pdf
Include the path to the directive file in index.html

<script src="js/vendor/angular-pdf/dist/angular-pdf.js"></script>
Include the directive as a dependency when defining the angular app:

var app = angular.module('App', ['pdf']);
Include the directive with the attribute path to the partial under a controller

<div class="wrapper" ng-controller="DocCtrl">
    <ng-pdf template-url="/partials/viewer.html"></ng-pdf>
</div>
scale as an option

<ng-pdf template-url="/partials/viewer.html" scale=1></ng-pdf>
scale attribute can also be page-fit

<ng-pdf template-url="/partials/viewer.html" scale="page-fit"></ng-pdf>
page as an option for initial page number

<ng-pdf template-url="/partials/viewer.html" page=12></ng-pdf>
canvasid as an option for id of the canvas (default for canvasid is pdf-canvas)

<ng-pdf template-url="/partials/viewer.html" canvasid="mycanvas"></ng-pdf>
usecredentials as an option to add credentials / authorization

<ng-pdf template-url="/partials/viewer.html" usecredentials="true"></ng-pdf>
debug to enable debugging console output (optional, disabled by default)

<ng-pdf template-url="/partials/viewer.html" debug="true"></ng-pdf>
Include the canvas element to display the pdf in the template-url file

<canvas id="pdf-canvas"></canvas>
Include the path to the pdf file in the controller

app.controller('DocCtrl', function($scope) {
  $scope.pdfUrl = '/pdf/relativity.pdf';
});
Set custom headers, e.g. authorization headers with $scope.httpHeaders option

app.controller('DocCtrl', function($scope) {
  $scope.pdfUrl = '/pdf/relativity.pdf';
  $scope.httpHeaders = { Authorization: 'Bearer some-aleatory-token' };
});
Options

Next / Previous page: Include the controls in the view file as defined in the attribute template-url
<button ng-click="goPrevious()"><</span></button>
<button ng-click="goNext()">></span></button>
Zoom in / out / fit 100%: Include the controls in the view file as defined in the attribute template-url

<button ng-click="zoomIn()">+</span></button>
<button ng-click="fit()">100%</span></button>
<button ng-click="zoomOut()">-</span></button>
Rotate clockwise: Include the controls in the view file as defined in the attribute template-url and the initial class rotate0

<button ng-click="rotate()">90</span></button>
...
<canvas id="pdf-canvas" class="rotate0"></canvas>
include the css styles:

.rotate0 {-webkit-transform: rotate(0deg); transform: rotate(0deg); }
.rotate90 {-webkit-transform: rotate(90deg); transform: rotate(90deg); }
.rotate180 {-webkit-transform: rotate(180deg); transform: rotate(180deg); }
.rotate270 {-webkit-transform: rotate(270deg); transform: rotate(270deg); }
Jump to page number: Include the controls in the view file as defined in the attribute template-url

<span>Page: </span><input type="text" min=1 ng-model="pageNum"><span> / {{pageCount}}</span>
Fixed pdf controls upon scrolling: Wrap the controls in the view file as defined in the attribute template-url with a tag nav with an ng-class. Amend the scroll amount as required.

<nav ng-class="{'pdf-controls fixed': scroll > 100, 'pdf-controls': scroll <= 100}">
...
</nav>
And include the relevant css styles as required:

.pdf-controls { width: 100%; display: block; background: #eee; padding: 1em;}
.fixed { position: fixed; top: 0; left: calc(50% - 480px); z-index: 100; width: 100%; padding: 1em; background: rgba(238, 238, 238,.9); width: 960px; }
open the file index.html with a web server

When url is base64 or Uint8Array

Create a Blob:

currentBlob = new Blob([result], {type: 'application/pdf'});
$scope.pdfUrl = URL.createObjectURL(currentBlob);
Handle error

In the controller, you can call the function $scope.onError:

$scope.onError = function(error) {
	// handle the error
	// console.log(error);
}
Show loading

In the controller, you can call the function $scope.onLoad when the pdf succesfully loaded:

$scope.loading = 'loading';

$scope.onLoad = function() {
  // do something when pdf is fully loaded
  // $scope.loading = '';
}
Show progress percentage

In the controller, you can call the function $scope.onProgress

$scope.onProgress = function(progress) {
	// handle a progress bar
	// progress% = progress.loaded / progress.total
	// console.log(progress);
}
Managing password requests

In the controller, you can use the function scope.onPassword. This function is called when the PDF require an opening password.

$scope.onPassword = function (updatePasswordFn, passwordResponse) {
  // if passwordResponse === PDFJS.PasswordResponses.NEED_PASSWORD
  // you can provide the password calling updatePasswordFn('THE_PASSWORD')
  // else if passwordResponse === PDFJS.PasswordResponses.INCORRECT_PASSWORD
  // provided password is not correct
};
Variations

If using with Angular UI modal, pageNum attribute is no longer required. Checkout the implementation
Similar projects

angular-pdf-viewer - a more self-contained directive
ng-pdfviewer
Credit

PDF example used is Relativity: The Special and General Theory by Albert Einstein as kindly organized and made available free by Project Gutenberg.

Contribute

This project is an OPEN Open Source Project. This means that:

Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.
Please see CONTRIBUTING.md for details.

Versioning

This repository follows the Semantic Versioning guidelines:

For patches, run the command:

grunt bumps
For minor release, run the command:

 grunt bumps --type=minor
For major release, run the command:

 grunt bumps --type=major
License
