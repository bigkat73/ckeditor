/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  myFonts = ['Muli'];

  config.font_names = 'sans serif';

  for(var i = 0; i<myFonts.length; i++){
     config.font_names = config.font_names+';'+myFonts[i];
     myFonts[i] = 'http://fonts.googleapis.com/css?family='+myFonts[i].replace(' ','+');

     //assuming you use jquery
     $("head").append("<link rel='stylesheet' href='"+ myFonts[i] +"'>");
  }
};
