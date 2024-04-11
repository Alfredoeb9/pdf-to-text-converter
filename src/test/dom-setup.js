const { JSDOM } = require("jsdom");

const DEFAULT_HTML = `<html>
    <head><title>Pdf To Text Converter</title></head>
</html>`;

const DOM = new JSDOM(DEFAULT_HTML, {
  url: "http://localhost:3000",
});
const { window } = DOM;

global.window = window;
global.document = window.document;
global.location = window.location;
global.navigator = {
  userAgent: "node.js",
  platform: "windows",
};
global.sessionStorage = window.sessionStorage;

global.TextEncoder = TextEncoder;
global.MutationObserver = window.MutationObserver;
global.HTMLElement = window.HTMLElement;
global.Node = window.Node;

global.IS_REACT_ACT_ENVIRONMENT = true;
