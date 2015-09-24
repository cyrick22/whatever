// JavaScript Document

function getElement(id) {
  return document.getElementById(id);
}

function slideTo(id) {
  //1.) the page we are bringing into focus dictates how
  // the current page will exit. So let's see what classes
  // our incoming page is using. We know it will have stage[right|left|etc...]
  var classes = getElement(id).className.split(' ');

  //2.) decide if the incoming page is assigned to right or left
  // (-1 if no match)
  var stageType = classes.indexOf('stage-left');

  //3.) on initial page load focusPage is null, so we need
  // to set the default page which we're currently seeing.
  if (FOCUS_PAGE == null) {
    // use home page
    FOCUS_PAGE = getElement('home-page');
  }

  //4.) decide how this focused page should exit.
  if (stageType > 0) {
    FOCUS_PAGE.className = 'page transition stage-right';
  } else {
    FOCUS_PAGE.className = 'page transition stage-left';
  }

  //5. refresh/set the global variable
  FOCUS_PAGE = getElement(id);

  //6. Bring in the new page.
  FOCUS_PAGE.className = 'page transition stage-center';
}