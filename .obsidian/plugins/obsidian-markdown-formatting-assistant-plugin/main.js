'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// Material Design Icons v5.9.55
var mdiCodeTags = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z";
var mdiFileLink = "M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M11 20H10C8.39 20 6 18.94 6 16C6 13.07 8.39 12 10 12H11V14H10C9.54 14 8 14.17 8 16C8 17.9 9.67 18 10 18H11V20M15 15V17H9V15H15M14 20H13V18H14C14.46 18 16 17.83 16 16C16 14.1 14.33 14 14 14H13V12H14C15.61 12 18 13.07 18 16C18 18.94 15.61 20 14 20M13 9V3.5L18.5 9H13Z";
var mdiFormatBold = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z";
var mdiFormatHeader1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z";
var mdiFormatHeader2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z";
var mdiFormatHeader3 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z";
var mdiFormatHeader4 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z";
var mdiFormatHeader5 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z";
var mdiFormatHeader6 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z";
var mdiFormatIndentIncrease = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z";
var mdiFormatItalic = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z";
var mdiFormatListBulleted = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z";
var mdiFormatListBulletedSquare = "M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9";
var mdiFormatListNumbered = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z";
var mdiFormatStrikethroughVariant = "M23,12V14H18.61C19.61,16.14 19.56,22 12.38,22C4.05,22.05 4.37,15.5 4.37,15.5L8.34,15.55C8.37,18.92 11.5,18.92 12.12,18.88C12.76,18.83 15.15,18.84 15.34,16.5C15.42,15.41 14.32,14.58 13.12,14H1V12H23M19.41,7.89L15.43,7.86C15.43,7.86 15.6,5.09 12.15,5.08C8.7,5.06 9,7.28 9,7.56C9.04,7.84 9.34,9.22 12,9.88H5.71C5.71,9.88 2.22,3.15 10.74,2C19.45,0.8 19.43,7.91 19.41,7.89Z";
var mdiGraph = "M19.5 17C19.37 17 19.24 17 19.11 17.04L17.5 13.79C17.95 13.34 18.25 12.71 18.25 12C18.25 10.62 17.13 9.5 15.75 9.5C15.62 9.5 15.5 9.5 15.36 9.54L13.73 6.29C14.21 5.84 14.5 5.21 14.5 4.5C14.5 3.12 13.38 2 12 2S9.5 3.12 9.5 4.5C9.5 5.21 9.79 5.84 10.26 6.29L8.64 9.54C8.5 9.5 8.38 9.5 8.25 9.5C6.87 9.5 5.75 10.62 5.75 12C5.75 12.71 6.05 13.34 6.5 13.79L4.89 17.04C4.76 17 4.63 17 4.5 17C3.12 17 2 18.12 2 19.5C2 20.88 3.12 22 4.5 22S7 20.88 7 19.5C7 18.8 6.71 18.16 6.24 17.71L7.86 14.46C8 14.5 8.12 14.5 8.25 14.5C8.38 14.5 8.5 14.5 8.64 14.46L10.27 17.71C9.8 18.16 9.5 18.8 9.5 19.5C9.5 20.88 10.62 22 12 22S14.5 20.88 14.5 19.5C14.5 18.12 13.38 17 12 17C11.87 17 11.74 17 11.61 17.04L10 13.79C10.46 13.34 10.75 12.71 10.75 12S10.46 10.66 10 10.21L11.61 6.96C11.74 7 11.87 7 12 7S12.26 7 12.39 6.96L14 10.21C13.55 10.66 13.25 11.3 13.25 12C13.25 13.38 14.37 14.5 15.75 14.5C15.88 14.5 16 14.5 16.14 14.46L17.77 17.71C17.3 18.16 17 18.8 17 19.5C17 20.88 18.12 22 19.5 22S22 20.88 22 19.5C22 18.12 20.88 17 19.5 17Z";
var mdiImage = "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z";
var mdiLanguageMarkdown = "M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6H20.56C21.35 6 22 6.63 22 7.41V16.59C22 17.37 21.35 18 20.56 18M6.81 15.19V11.53L8.73 13.88L10.65 11.53V15.19H12.58V8.81H10.65L8.73 11.16L6.81 8.81H4.89V15.19H6.81M19.69 12H17.77V8.81H15.85V12H13.92L16.81 15.28L19.69 12Z";
var mdiLinkVariant = "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";
var mdiXml = "M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z";

function pathToSvg(icon) {
    return "\n    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"currentColor\" d=\"" + icon + "\" />\n    </svg>";
}
var icons = {
    h1: pathToSvg(mdiFormatHeader1),
    h2: pathToSvg(mdiFormatHeader2),
    h3: pathToSvg(mdiFormatHeader3),
    h4: pathToSvg(mdiFormatHeader4),
    h5: pathToSvg(mdiFormatHeader5),
    h6: pathToSvg(mdiFormatHeader6),
    bold: pathToSvg(mdiFormatBold),
    italic: pathToSvg(mdiFormatItalic),
    strikethrough: pathToSvg(mdiFormatStrikethroughVariant),
    codeInline: pathToSvg(mdiCodeTags),
    codeBlock: pathToSvg(mdiXml),
    link: pathToSvg(mdiLinkVariant),
    mermaidBlock: pathToSvg(mdiGraph),
    fileLink: pathToSvg(mdiFileLink),
    image: pathToSvg(mdiImage),
    quote: pathToSvg(mdiFormatIndentIncrease),
    bulletList: pathToSvg(mdiFormatListBulleted),
    numberList: pathToSvg(mdiFormatListNumbered),
    checkList: pathToSvg(mdiFormatListBulletedSquare),
    viewIcon: pathToSvg(mdiLanguageMarkdown),
};
var addIcons = function () {
    Object.keys(icons).forEach(function (key) {
        obsidian.addIcon(key, icons[key]);
    });
};
/**
 * Convert an svg string into an HTML element.
 *
 * @param svgText svg image as a string
 */
var svgToElement = function (key) {
    var parser = new DOMParser();
    return parser.parseFromString(icons[key], 'text/xml').documentElement;
};

var formatSettings = {
    h1: {
        des: 'h1',
        icon: 'h1',
        symbol: '# ',
        shift: 2,
        selectionInput: 0,
        newLine: false,
        enclose: false,
    },
    h2: {
        des: 'h2',
        icon: 'h2',
        symbol: '## ',
        shift: 3,
        selectionInput: 0,
        newLine: false,
        enclose: false,
    },
    h3: {
        des: 'h3',
        icon: 'h3',
        symbol: '### ',
        shift: 4,
        selectionInput: 0,
        newLine: false,
        enclose: false,
    },
    h4: {
        des: 'h4',
        icon: 'h4',
        symbol: '#### ',
        shift: 5,
        selectionInput: 0,
        newLine: false,
        enclose: false,
    },
    h5: {
        des: 'h5',
        icon: 'h5',
        symbol: '##### ',
        shift: 6,
        selectionInput: 0,
        newLine: false,
        enclose: false,
    },
    h6: {
        des: 'h6',
        icon: 'h6',
        symbol: '###### ',
        shift: 7,
        selectionInput: 0,
        newLine: false,
        enclose: false,
    },
    bold: {
        des: 'bold',
        icon: 'bold',
        symbol: '****',
        shift: 2,
        selectionInput: 2,
        newLine: false,
        enclose: false,
    },
    italic: {
        des: 'italic',
        icon: 'italic',
        symbol: '**',
        shift: 1,
        selectionInput: 1,
        newLine: false,
        enclose: false,
    },
    strikethrough: {
        des: 'strikethrough',
        icon: 'strikethrough',
        symbol: '~~~~',
        shift: 2,
        selectionInput: 2,
        newLine: false,
        enclose: false,
    },
    codeBlock: {
        des: 'code_block',
        icon: 'codeBlock',
        symbol: '``` \n```',
        shift: 4,
        selectionInput: 4,
        newLine: true,
        enclose: true,
    },
    mermaidBlock: {
        des: 'mermaid_block',
        icon: 'mermaidBlock',
        symbol: '```mermaid \n```',
        shift: 4,
        selectionInput: 4,
        newLine: true,
        enclose: true,
    },
    codeInline: {
        des: 'code_inline',
        icon: 'codeInline',
        symbol: '``',
        shift: 1,
        selectionInput: 1,
        newLine: false,
        enclose: false,
    },
    link: {
        des: 'link',
        icon: 'link',
        symbol: '[]()',
        shift: 3,
        selectionInput: 1,
        newLine: false,
        enclose: false,
    },
    internalLink: {
        des: 'internal_link',
        icon: 'fileLink',
        symbol: '[[]]',
        shift: 2,
        selectionInput: 2,
        newLine: false,
        enclose: false,
    },
    image: {
        des: 'image',
        icon: 'image',
        symbol: '![]()',
        shift: 4,
        selectionInput: 2,
        newLine: false,
        enclose: false,
    },
    blockquote: {
        des: 'blockquote',
        icon: 'quote',
        symbol: '> ',
        shift: 2,
        selectionInput: 0,
        newLine: true,
        enclose: false,
    },
    bulletList: {
        des: 'bullet_list',
        icon: 'bulletList',
        symbol: '- ',
        shift: 2,
        selectionInput: 0,
        newLine: true,
        enclose: false,
    },
    numberList: {
        des: 'number_list',
        icon: 'numberList',
        symbol: '1. ',
        shift: 3,
        selectionInput: 0,
        newLine: true,
        enclose: false,
    },
    checkList: {
        des: 'check_list',
        icon: 'checkList',
        symbol: '- [ ] ',
        shift: 6,
        selectionInput: 0,
        newLine: true,
        enclose: false,
    },
};
function checkIfSelection(editor) {
    var selection = editor.getSelection();
    if (!selection || selection === '') {
        return false;
    }
    else {
        return true;
    }
}
function iconFormatter(editor, item) {
    if (editor) {
        var isSelection = checkIfSelection(editor);
        var selection = editor.getSelection();
        var curserStart = editor.getCursor('from');
        var curserEnd = editor.getCursor('to');
        var line = editor.getLine(curserStart.line);
        editor.focus();
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].contains(item.des)) {
            var reStringExact = '^\\s*' + item.symbol + '+\\s*';
            var reStringAny = '^\\s*#+\\s*';
            var cleanedLine = line.replace(new RegExp(reStringAny, 'g'), '');
            var replacment = item.symbol + cleanedLine;
            if (new RegExp(reStringExact, 'g').test(line)) {
                replacment = cleanedLine;
            }
            editor.replaceRange(replacment, { line: curserStart.line, ch: 0 }, { line: curserStart.line, ch: line.length });
        }
        else if ([
            'bold',
            'italic',
            'strikethrough',
            'code_inline',
            'link',
            'internal_link',
            'image',
        ].contains(item.des)) {
            if (isSelection) {
                editor.replaceSelection(item.symbol.substring(0, item.selectionInput) +
                    selection +
                    item.symbol.substring(item.selectionInput));
                editor.setCursor(curserStart.line, curserStart.ch + selection.length + item.shift);
            }
            else {
                editor.replaceRange(item.symbol, curserStart);
                editor.setCursor(curserStart.line, curserStart.ch + item.shift);
            }
        }
        else if (['code_block'].contains(item.des) || ['mermaid_block'].contains(item.des)) {
            if (isSelection) {
                var re = new RegExp('^(```).*(```)$', 'gs');
                var match = selection.trim().match(re);
                var replacment = selection.trim();
                if (match) {
                    replacment = editor
                        .getSelection()
                        .trim()
                        .replace(/^(```)/g, '')
                        .replace(/(```)$/g, '');
                    editor.replaceSelection(replacment);
                }
                else {
                    editor.replaceSelection(item.symbol.substring(0, item.selectionInput) +
                        '\n' +
                        replacment +
                        item.symbol.substring(item.selectionInput));
                    editor.setCursor(curserStart.line, curserStart.ch + item.shift);
                }
            }
            else {
                var pos = curserStart;
                var replacement = item.symbol;
                if (line.trim()) {
                    pos.ch = line.length;
                    replacement = '\n' + replacement;
                }
                else {
                    pos.ch = 0;
                }
                editor.replaceRange(replacement, pos);
                editor.setCursor(curserStart.line, curserStart.ch + item.shift);
            }
        }
        else if (['blockquote', 'bullet_list', 'number_list', 'check_list'].contains(item.des)) {
            var reString_1 = ('^\\s*' + item.symbol + '\\s*')
                .replace('[', '\\[')
                .replace(']', '\\]');
            if (isSelection) {
                var selectionLines = selection.split('\n');
                var notAllAreItems = selectionLines.map(function (lineOfSelection) {
                    var re = new RegExp(reString_1, 'g');
                    return re.test(lineOfSelection);
                });
                if (!notAllAreItems.contains(false)) {
                    var convertetSelectionLines = selectionLines.map(function (newLine) {
                        var re = new RegExp(reString_1, 'g');
                        return newLine.replace(re, '');
                    });
                    editor.replaceSelection(convertetSelectionLines.join('\n'));
                }
                else {
                    var convertetSelectionLines = selectionLines.map(function (newLine) {
                        var re = new RegExp(reString_1, 'g');
                        if (!re.test(newLine.trim())) {
                            return item.symbol + newLine.trim();
                        }
                        else {
                            return newLine;
                        }
                    });
                    editor.replaceSelection(convertetSelectionLines.join('\n'));
                }
            }
            else {
                var re = new RegExp(reString_1, 'gm');
                var match = line.trim().match(re);
                var replacment = item.symbol + line.replace(re, '');
                if (match) {
                    replacment = line.replace(re, '');
                }
                editor.replaceRange(replacment, { line: curserStart.line, ch: 0 }, { line: curserStart.line, ch: line.length });
            }
        }
    }
}

function checkIfSelection$1(editor) {
    var selection = editor.getSelection();
    if (!selection || selection === '') {
        return false;
    }
    else {
        return true;
    }
}
function checkIfMarkdownSource(leaf) {
    return (
    // @ts-ignore
    leaf.view instanceof obsidian.MarkdownView && leaf.view.currentMode.type === 'source');
}

var htmlFormatterSettings = {
    br: {
        des: '<br/>',
        symbol: '<br/>',
        shift: 5,
        selectionInput: 5,
    },
    div: {
        des: '<div>',
        symbol: '<div></div>',
        shift: 5,
        selectionInput: 5,
    },
    span: {
        des: '<span>',
        symbol: '<span></span>',
        shift: 6,
        selectionInput: 6,
    },
    img: {
        des: '<img>',
        symbol: '<img src="" alt="" width="" height=""></img>',
        shift: 10,
        selectionInput: 38,
    },
    a: {
        des: '<a>',
        symbol: '<a></a>',
        shift: 3,
        selectionInput: 3,
    },
    p: {
        des: '<p>',
        symbol: '<p></p>',
        shift: 5,
        selectionInput: 5,
    },
    font: {
        des: '<font>',
        symbol: '<span style="font-family:default; font-size:default; color:red"></span>',
        shift: 64,
        selectionInput: 64,
    },
    table: {
        des: '<table>',
        symbol: '<table></table>',
        shift: 7,
        selectionInput: 7,
    },
    thead: {
        des: '<thead>',
        symbol: '<thead></thead>',
        shift: 7,
        selectionInput: 7,
    },
    tbody: {
        des: '<tbody>',
        symbol: '<tbody></tbody>',
        shift: 7,
        selectionInput: 7,
    },
    tfoot: {
        des: '<tfoot>',
        symbol: '<tfoot></tfoot>',
        shift: 7,
        selectionInput: 7,
    },
    tr: {
        des: '<tr>',
        symbol: '<tr></tr>',
        shift: 4,
        selectionInput: 4,
    },
    td: {
        des: '<td>',
        symbol: '<td></td>',
        shift: 4,
        selectionInput: 4,
    },
    th: {
        des: '<th>',
        symbol: '<th></th>',
        shift: 4,
        selectionInput: 4,
    },
    details: {
        des: '<details>',
        symbol: '<details></details>',
        shift: 9,
        selectionInput: 9,
    },
    summary: {
        des: '<summary>',
        symbol: '<summary></summary>',
        shift: 9,
        selectionInput: 9,
    },
};
function htmlFormatter(editor, item) {
    if (editor) {
        var isSelection = checkIfSelection$1(editor);
        var selection = editor.getSelection();
        var curserStart = editor.getCursor('from');
        var curserEnd = editor.getCursor('to');
        var line = editor.getLine(curserStart.line);
        editor.focus();
        if (isSelection) {
            var replacment = selection.trim();
            editor.replaceSelection(item.symbol.substring(0, item.selectionInput) +
                replacment +
                item.symbol.substring(item.selectionInput));
            editor.setCursor(curserStart.line, curserStart.ch + item.shift);
        }
        else {
            editor.replaceRange(item.symbol, curserStart);
            editor.setCursor(curserStart.line, curserStart.ch + item.shift);
        }
    }
}

function colorFormatter(editor, color) {
    if (editor) {
        var isSelection = checkIfSelection$1(editor);
        var selection = editor.getSelection();
        var curserStart = editor.getCursor('from');
        var curserEnd = editor.getCursor('to');
        var line = editor.getLine(curserStart.line);
        editor.focus();
        if (isSelection) {
            var replacment = selection.trim();
            editor.replaceSelection(color);
            editor.setCursor(curserStart);
        }
        else {
            editor.replaceRange(color, curserStart);
            editor.setCursor(curserStart);
        }
    }
}

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;

  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }

  idx = 0;

  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }

  return result;
}

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();

    if (!_isArray(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }

        idx += 1;
      }

      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

var _xfBase = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike =
/*#__PURE__*/
_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (_isString(x)) {
    return false;
  }

  if (x.nodeType === 1) {
    return !!x.length;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind =
/*#__PURE__*/
_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */

var nth =
/*#__PURE__*/
_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

var reduce =
/*#__PURE__*/
_curry3(_reduce);

/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */

var append =
/*#__PURE__*/
_curry2(function append(el, list) {
  return _concat(list, [el]);
});

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */

function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;

    if (length === 0) {
      return fn();
    }

    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */

var slice =
/*#__PURE__*/
_curry3(
/*#__PURE__*/
_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */

var tail =
/*#__PURE__*/
_curry1(
/*#__PURE__*/
_checkForMethod('tail',
/*#__PURE__*/
slice(1, Infinity)));

/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */

function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */

var reverse =
/*#__PURE__*/
_curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

function _identity(x) {
  return x;
}

/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */

var identity =
/*#__PURE__*/
_curry1(_identity);

function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);

  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs$1(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!_objectIs$1(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);

  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals =
/*#__PURE__*/
_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

function _indexOf(list, a, idx) {
  var inf, item; // Array.prototype.indexOf doesn't exist below IE9

  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;

          while (idx < list.length) {
            item = list[idx];

            if (item === 0 && 1 / item === inf) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];

            if (typeof item === 'number' && item !== item) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } // non-zero numbers can utilise Set


        return list.indexOf(a, idx);
      // all these types can utilise Set

      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }

    }
  } // anything else not covered above, defer to R.equals


  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }

    idx += 1;
  }

  return -1;
}

function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result;
}

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

var XFilter =
/*#__PURE__*/
function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter =
/*#__PURE__*/
_curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var filter =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }

    return acc;
  }, {}, keys(filterable)) : // else
  _filter(pred, filterable);
}));

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var reject =
/*#__PURE__*/
_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

var XDrop =
/*#__PURE__*/
function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }

  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;

  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }

    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop =
/*#__PURE__*/
_curry2(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});

/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */

var drop =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */

var last =
/*#__PURE__*/
nth(-1);

/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */

var takeLast =
/*#__PURE__*/
_curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});

/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */

var flip =
/*#__PURE__*/
_curry1(function flip(fn) {
  return curryN(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */

var indexOf =
/*#__PURE__*/
_curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
});

/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      const sortByFirstItem = R.sortBy(R.prop(0));
 *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *
 *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      const people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */

var sortBy =
/*#__PURE__*/
_curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});

/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference, R.remove
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */

var without =
/*#__PURE__*/
_curry2(function (xs, list) {
  return reject(flip(_includes)(xs), list);
});

var SidePanelControlViewType = 'side-panel-control-view';
var SidePanelControlView = /** @class */ (function (_super) {
    __extends(SidePanelControlView, _super);
    function SidePanelControlView(leaf, plugin) {
        var _this = _super.call(this, leaf) || this;
        _this.plugin = plugin;
        return _this;
    }
    SidePanelControlView.prototype.getViewType = function () {
        return SidePanelControlViewType;
    };
    SidePanelControlView.prototype.getDisplayText = function () {
        return 'Markdown-Autocomplete';
    };
    SidePanelControlView.prototype.getIcon = function () {
        return 'viewIcon';
    };
    SidePanelControlView.prototype.load = function () {
        _super.prototype.load.call(this);
        this.draw();
    };
    SidePanelControlView.prototype.draw = function () {
        var container = this.containerEl.children[1];
        var rootEl = document.createElement('div');
        var mainDiv = rootEl.createDiv({ cls: 'nav-header' });
        mainDiv.style.maxWidth = '300px';
        mainDiv.style.minWidth = '300px';
        // --------------
        // Text Edit Section
        // --------------
        var header = mainDiv.createEl('h4');
        header.appendText('Text Edit');
        header.style.textAlign = 'center';
        header.style.marginTop = '10px';
        header.style.marginBottom = '5px';
        var hr = mainDiv.createEl('hr');
        hr.style.marginTop = '0px';
        hr.style.marginBottom = '10px';
        this.addTextEditButtons(mainDiv);
        // --------------
        // Table Section
        // --------------
        header = mainDiv.createEl('h4');
        header.appendText('Tables');
        header.style.textAlign = 'center';
        header.style.marginTop = '20px';
        header.style.marginBottom = '5px';
        hr = mainDiv.createEl('hr');
        hr.style.marginTop = '0px';
        hr.style.marginBottom = '10px';
        var info = mainDiv.createEl('p');
        info.appendText('upcoming ...');
        info.style.textAlign = 'center';
        // --------------
        // HTML Section
        // --------------
        header = mainDiv.createEl('h4');
        header.appendText('HTML');
        header.style.textAlign = 'center';
        header.style.marginTop = '20px';
        header.style.marginBottom = '5px';
        hr = mainDiv.createEl('hr');
        hr.style.marginTop = '0px';
        hr.style.marginBottom = '10px';
        this.addHtmlButtons(mainDiv);
        info = mainDiv.createEl('p');
        info.style.textAlign = 'center';
        info.style.marginTop = '10px';
        info.style.marginBottom = '10px';
        var link = info.createEl('a');
        link.appendText('Do you miss a Tag? report it!');
        link.style.textAlign = 'center';
        link.style.fontSize = '10px';
        link.href =
            'https://github.com/Reocin/obsidian-markdown-formatting-assistant-plugin/issues';
        // --------------
        // Colors
        // --------------
        header = mainDiv.createEl('h4');
        header.appendText('Colors');
        header.style.textAlign = 'center';
        header.style.marginTop = '20px';
        header.style.marginBottom = '5px';
        hr = mainDiv.createEl('hr');
        hr.style.marginTop = '0px';
        hr.style.marginBottom = '10px';
        this.addColorSection(mainDiv);
        container.empty();
        container.appendChild(rootEl);
    };
    SidePanelControlView.prototype.addHtmlButtons = function (mainDiv) {
        var _this = this;
        var addClickEvent = function (btn, type) {
            btn.onClickEvent(function () {
                // @ts-ignore
                var formatterSetting = htmlFormatterSettings[type];
                var leaf = _this.app.workspace.activeLeaf;
                var editor = null;
                if (checkIfMarkdownSource(leaf)) {
                    // @ts-ignore
                    editor = leaf.view.sourceMode.cmEditor;
                    htmlFormatter(editor, formatterSetting);
                }
            });
        };
        var numberOfCols = 3;
        var row = null;
        sortBy(identity, keys(htmlFormatterSettings)).forEach(function (key, index) {
            // @ts-ignore
            var item = htmlFormatterSettings[key];
            if (index % numberOfCols === 0) {
                row = mainDiv.createDiv({ cls: 'nav-buttons-container' });
            }
            var button = row.createDiv({ cls: 'nav-action-text-button' });
            addClickEvent(button, key);
            button.appendText(item.des);
        });
    };
    SidePanelControlView.prototype.addTextEditButtons = function (mainDiv) {
        var _this = this;
        var addClickEvent = function (btn, type) {
            btn.onClickEvent(function () {
                // @ts-ignore
                var formatterSetting = formatSettings[type];
                var leaf = _this.app.workspace.activeLeaf;
                var editor = null;
                if (checkIfMarkdownSource(leaf)) {
                    // @ts-ignore
                    editor = leaf.view.sourceMode.cmEditor;
                    iconFormatter(editor, formatterSetting);
                }
            });
        };
        var row = mainDiv.createDiv({ cls: 'nav-buttons-container' });
        for (var _i = 0, _a = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']; _i < _a.length; _i++) {
            var icon = _a[_i];
            var button_1 = row.createDiv({ cls: 'nav-action-button' });
            addClickEvent(button_1, icon);
            button_1.appendChild(svgToElement(icon));
        }
        row = mainDiv.createDiv({ cls: 'nav-buttons-container' });
        var button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'bold');
        button.appendChild(svgToElement('bold'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'italic');
        button.appendChild(svgToElement('italic'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'strikethrough');
        button.appendChild(svgToElement('strikethrough'));
        row = mainDiv.createDiv({ cls: 'nav-buttons-container' });
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'codeInline');
        button.appendChild(svgToElement('codeInline'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'codeBlock');
        button.appendChild(svgToElement('codeBlock'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'link');
        button.appendChild(svgToElement('link'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'mermaidBlock');
        button.appendChild(svgToElement('mermaidBlock'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'internalLink');
        button.appendChild(svgToElement('fileLink'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'blockquote');
        button.appendChild(svgToElement('quote'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'image');
        button.appendChild(svgToElement('image'));
        row = mainDiv.createDiv({ cls: 'nav-buttons-container' });
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'bulletList');
        button.appendChild(svgToElement('bulletList'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'numberList');
        button.appendChild(svgToElement('numberList'));
        button = row.createDiv({ cls: 'nav-action-button' });
        addClickEvent(button, 'checkList');
        button.appendChild(svgToElement('checkList'));
    };
    SidePanelControlView.prototype.addColorSection = function (mainDiv) {
        var _this = this;
        var insertColor = function (color) {
            var leaf = _this.app.workspace.activeLeaf;
            var editor = null;
            if (checkIfMarkdownSource(leaf)) {
                // @ts-ignore
                editor = leaf.view.sourceMode.cmEditor;
                colorFormatter(editor, color);
                editor.focus();
            }
        };
        var drawLastSelectedColorIcons = function (container) {
            if (container === void 0) { container = null; }
            if (!container)
                container = document.getElementById('lastSelectedColorsDiv');
            container.textContent = '';
            var table = container.createEl('table');
            var tbody = table.createEl('tbody');
            var row;
            reverse(SidePanelControlView.lastColors).forEach(function (color, index) {
                if (index % 10 === 0)
                    row = tbody.createEl('tr');
                var colorBox = row.createEl('td');
                colorBox.classList.add('color-icon');
                colorBox.style.backgroundColor = color;
                colorBox.onClickEvent(function (ev) {
                    if (ev.type === 'click') {
                        insertColor(color);
                    }
                    else {
                        SidePanelControlView.lastColors = without([color], SidePanelControlView.lastColors);
                        drawLastSelectedColorIcons();
                    }
                });
            });
        };
        var drawLastSavedColorIcons = function (container) {
            if (container === void 0) { container = null; }
            if (!container)
                container = document.getElementById('lastSavedColorsDiv');
            container.textContent = '';
            var table = container.createEl('table');
            var tbody = table.createEl('tbody');
            var row;
            reverse(_this.plugin.settings.savedColors).forEach(function (color, index) {
                if (index % 10 === 0)
                    row = tbody.createEl('tr');
                var colorBox = row.createEl('td');
                colorBox.id = 'lastSavedColorsDiv' + color;
                colorBox.classList.add('color-icon');
                colorBox.style.backgroundColor = color;
                colorBox.draggable = true;
                colorBox.onClickEvent(function (ev) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(ev.type === 'click')) return [3 /*break*/, 1];
                                insertColor(color);
                                return [3 /*break*/, 3];
                            case 1:
                                this.plugin.settings.savedColors = without([color], this.plugin.settings.savedColors);
                                return [4 /*yield*/, this.plugin.saveSettings()];
                            case 2:
                                _a.sent();
                                drawLastSavedColorIcons();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                colorBox.ondragstart = function (event) {
                    // @ts-ignore
                    _this.dragStartColor = event.target.id.replace('lastSavedColorsDiv', '');
                };
                colorBox.ondrop = function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var id, startColor, endColor, startIndex, endIndex;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(event && event.target)) return [3 /*break*/, 2];
                                id = event.target.id;
                                if (!(id.indexOf('lastSavedColorsDiv') === 0)) return [3 /*break*/, 2];
                                startColor = this.dragStartColor;
                                endColor = id.replace('lastSavedColorsDiv', '');
                                startIndex = indexOf(startColor, this.plugin.settings.savedColors);
                                endIndex = indexOf(endColor, this.plugin.settings.savedColors);
                                this.plugin.settings.savedColors[startIndex] = endColor;
                                this.plugin.settings.savedColors[endIndex] = startColor;
                                return [4 /*yield*/, this.plugin.saveSettings()];
                            case 1:
                                _a.sent();
                                drawLastSavedColorIcons();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); };
                colorBox.ondragover = function (event) {
                    event.preventDefault();
                };
            });
        };
        var colorSection = mainDiv.createDiv();
        var colorSelector = colorSection.createDiv();
        colorSelector.style.backgroundColor = last(SidePanelControlView.lastColors);
        colorSelector.style.height = '16px';
        colorSelector.style.borderRadius = '8px';
        colorSelector.style.padding = '5px';
        colorSelector.style.margin = '4px';
        colorSelector.style.marginBottom = '10px';
        var colorInput = colorSelector.createEl('input');
        colorInput.id = 'colorInput';
        colorInput.type = 'color';
        colorInput.value = last(SidePanelControlView.lastColors);
        colorInput.style.visibility = 'hidden';
        colorInput.style.padding = '0';
        colorInput.style.margin = '0';
        // colorInput.style.display = 'block';
        // colorInput.style.opacity = '0';
        colorInput.addEventListener('input', function (ev) {
            // @ts-ignore
            var color = ev.target.value;
            colorSelector.style.backgroundColor = color;
        });
        colorInput.addEventListener('change', function (ev) {
            // @ts-ignore
            var color = ev.target.value;
            // @ts-ignore
            SidePanelControlView.lastColors = pipe(without([color]), append(color), takeLast(10))(SidePanelControlView.lastColors);
            drawLastSelectedColorIcons();
            insertColor(color);
            colorSelector.style.backgroundColor = color;
            navigator.clipboard.writeText(color).then(function () {
                // @ts-ignore
                new obsidian.Notice('Copied ' + color + ' to clipboard');
            }, function () {
                new obsidian.Notice('Could not copy the color to clipboard');
            });
        }, false);
        var colorButton = colorSection.createEl('label');
        colorButton.classList.add('nav-action-text-button');
        colorButton.appendText('Select a Color');
        colorButton.style.display = 'block';
        colorButton.htmlFor = 'colorInput';
        var colorSaveButton = colorSection.createEl('div');
        colorSaveButton.classList.add('nav-action-text-button');
        colorSaveButton.appendText('Save Color');
        colorSaveButton.style.display = 'block';
        colorSaveButton.onClickEvent(function (ev) { return __awaiter(_this, void 0, void 0, function () {
            var color;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        color = last(SidePanelControlView.lastColors);
                        this.plugin.settings.savedColors = pipe(without([color]), append(color))(this.plugin.settings.savedColors);
                        drawLastSavedColorIcons();
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        var lastSelectedColorsTitle = colorSection.createEl('p');
        lastSelectedColorsTitle.appendText('Last used colors:');
        lastSelectedColorsTitle.style.marginBottom = '0px';
        var lastSelectedColors = colorSection.createEl('div');
        lastSelectedColors.id = 'lastSelectedColorsDiv';
        lastSelectedColors.style.display = 'flex';
        drawLastSelectedColorIcons(lastSelectedColors);
        var lastSavedColorsTitle = colorSection.createEl('p');
        lastSavedColorsTitle.appendText('Saved Colors:');
        lastSavedColorsTitle.style.marginBottom = '0px';
        var settingsInfo = colorSection.createEl('p');
        settingsInfo.appendText('Saved colors can be directly edited in the settings.');
        settingsInfo.style.textAlign = 'left';
        settingsInfo.style.fontSize = '10px';
        settingsInfo.style.marginTop = '0px';
        var lastSavedColors = colorSection.createEl('div');
        lastSavedColors.id = 'lastSavedColorsDiv';
        lastSavedColors.style.display = 'flex';
        drawLastSavedColorIcons(lastSavedColors);
        var info = colorSection.createEl('p');
        info.style.textAlign = 'center';
        info.style.marginTop = '10px';
        info.style.marginBottom = '10px';
        var link = info.createEl('a');
        link.appendText('Do you need some Help?');
        link.style.textAlign = 'center';
        link.style.fontSize = '10px';
        link.href =
            'https://github.com/Reocin/obsidian-markdown-formatting-assistant-plugin#color-picker';
    };
    SidePanelControlView.lastColors = ['#ff0000'];
    return SidePanelControlView;
}(obsidian.ItemView));

var CommandListView = /** @class */ (function () {
    function CommandListView(app, cm, startIndex, endIndex) {
        var _this = this;
        this.rows = [];
        this.selectetRowId = null;
        this.display = function () {
            _this.cm.addWidget(_this.cm.getCursor(), _this.getWidgetView(), true);
        };
        this.close = function () {
            var el = document.getElementById('CommandListViewRootWidget');
            if (el) {
                el.parentNode.removeChild(el);
                CommandListView.commandListView = null;
                _this.cm.off('keydown', _this.keyDownHandler);
            }
        };
        this.getWidgetView = function () {
            var root = document.createElement('div');
            root.id = 'CommandListViewRootWidget';
            root.classList.add('widget-background');
            root.style.display = 'inline-block';
            root.style.zIndex = '300';
            var table = root.createEl('table');
            table.classList.add('command-list-view-table');
            var tbody = table.createEl('tbody');
            _this.rows = [];
            Object.values(formatSettings).map(function (args) {
                if (!_this.codeString || args.des.indexOf(_this.codeString) >= 0) {
                    // @ts-ignore
                    var row = _this.getWidgetViewTextEditTableRow(args);
                    if (row)
                        _this.rows.push(row);
                }
            });
            Object.values(htmlFormatterSettings).map(function (args) {
                if (!_this.codeString || args.des.indexOf(_this.codeString) >= 0) {
                    // @ts-ignore
                    var row = _this.getWidgetViewHtmlTableRow(args);
                    if (row)
                        _this.rows.push(row);
                }
            });
            if (_this.rows.length > 0)
                _this.setRowSelected(_this.rows[0].id);
            _this.rows.slice(0, 5).forEach(function (row) {
                if (row)
                    tbody.appendChild(row);
            });
            return root;
        };
        this.getWidgetViewTextEditTableRow = function (item) {
            var row = document.createElement('tr');
            row.id = item.des;
            row.onClickEvent(function () {
                _this.cm.getCursor();
                _this.cm.replaceRange('', { line: _this.cm.getCursor().line, ch: _this.startIndex }, {
                    line: _this.cm.getCursor().line,
                    ch: _this.endIndex >= 0 ? _this.endIndex : _this.cm.getCursor().ch,
                });
                iconFormatter(_this.cm, item);
                _this.close();
                // this.cm.focus();
                // this.cm.setCursor({
                //   line: this.cm.getCursor().line,
                //   ch: this.startIndex + item.shift,
                // });
            });
            var cell1 = row.createEl('td');
            var iconDiv = cell1.createDiv();
            iconDiv.classList.add('command-list-view-icon');
            iconDiv.appendChild(svgToElement(item.icon));
            var cell2 = row.createEl('td');
            cell2.classList.add('command-list-view-text');
            cell2.setText(item.des);
            return row;
        };
        this.getWidgetViewHtmlTableRow = function (item) {
            var row = document.createElement('tr');
            row.id = item.des;
            row.onClickEvent(function () {
                _this.cm.getCursor();
                _this.cm.replaceRange('', { line: _this.cm.getCursor().line, ch: _this.startIndex }, {
                    line: _this.cm.getCursor().line,
                    ch: _this.endIndex >= 0 ? _this.endIndex : _this.cm.getCursor().ch,
                });
                htmlFormatter(_this.cm, item);
                _this.close();
            });
            var cell1 = row.createEl('td');
            var iconDiv = cell1.createDiv();
            // iconDiv.classList.add('command-list-view-icon');
            iconDiv.appendText('HTML');
            var cell2 = row.createEl('td');
            cell2.classList.add('command-list-view-text');
            cell2.style.color = '#0055F2';
            cell2.setText(item.des);
            return row;
        };
        this.app = app;
        this.cm = cm;
        var curser = cm.getCursor();
        var line = cm.getLine(curser.line);
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.codeString = line.substring(startIndex + 1, endIndex >= 0 ? endIndex : undefined);
        this.keyDownHandler = function (cf, e) {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                _this.changeRowSelected(e.key === 'ArrowUp' ? -1 : 1);
                return false;
            }
            else if (e.key === 'Enter') {
                e.preventDefault();
                var rowIndex = _this.rows.findIndex(function (r) { return r.id === _this.selectetRowId; });
                if (rowIndex >= 0 && _this.rows.length > rowIndex) {
                    _this.rows[rowIndex].click();
                }
                return false;
            }
        };
        cm.on('keydown', this.keyDownHandler);
    }
    CommandListView.display = function (app, cm, event, triggerKey) {
        this.oldCurser = cm.getCursor();
        if (['Enter', 'ArrowUp', 'ArrowDown'].contains(event.key)) {
            return false;
        }
        if (this.commandListView)
            this.commandListView.close();
        if (['Escape'].contains(event.key)) {
            return false;
        }
        var curser = cm.getCursor();
        if (!curser)
            return;
        var line = cm.getLine(curser.line);
        if (!line)
            return;
        var startIndex = line.indexOf(triggerKey);
        while (startIndex >= 0) {
            var endIndex = line.indexOf(' ', startIndex);
            if (curser.ch >= startIndex && (endIndex < 0 || curser.ch <= endIndex)) {
                if (this.commandListView)
                    this.commandListView.close();
                this.commandListView = new CommandListView(app, cm, startIndex, endIndex);
                this.commandListView.display();
                break;
            }
            else {
                if (this.commandListView)
                    this.commandListView.close();
            }
            startIndex = line.indexOf(triggerKey, startIndex + 1);
        }
    };
    CommandListView.prototype.setRowSelected = function (id) {
        var _this = this;
        if (this.selectetRowId) {
            var row_1 = this.rows.find(function (r) { return r.id === _this.selectetRowId; });
            if (row_1)
                row_1.classList.remove('command-list-view-row-selected');
        }
        var row = this.rows.find(function (r) { return r.id === id; });
        if (row)
            row.classList.add('command-list-view-row-selected');
        this.selectetRowId = id;
    };
    CommandListView.prototype.changeRowSelected = function (offset) {
        var _this = this;
        var rowIndex = this.rows.findIndex(function (r) { return r.id === _this.selectetRowId; });
        if (rowIndex >= 0) {
            if (this.rows.length > rowIndex + offset &&
                rowIndex + offset >= 0 &&
                rowIndex + offset < 5) {
                this.setRowSelected(this.rows[rowIndex + offset].id);
            }
            else if (rowIndex + offset >= 5 && this.rows.length > 0) {
                this.setRowSelected(this.rows[0].id);
            }
            else if (this.rows.length > 0) {
                var index = this.rows.length > 5 ? 4 : this.rows.length - 1;
                this.setRowSelected(this.rows[index].id);
            }
        }
        else if (this.rows.length > 0) {
            this.setRowSelected(this.rows[0].id);
        }
    };
    return CommandListView;
}());

var DEFAULT_SETTINGS = {
    triggerChar: '\\',
    sidePaneSideLeft: false,
    savedColors: ['#ff0000'],
};
var MarkdownAutocompletePlugin = /** @class */ (function (_super) {
    __extends(MarkdownAutocompletePlugin, _super);
    function MarkdownAutocompletePlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleSidePanelControlView = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // const existing = this.app.workspace.getLeavesOfType(
                        //   SidePanelControlViewType,
                        // );
                        // if (existing.length) {
                        //   this.app.workspace.revealLeaf(existing[0]);
                        //   return;
                        // }
                        this.app.workspace.detachLeavesOfType(SidePanelControlViewType);
                        if (!this.settings.sidePaneSideLeft) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.app.workspace.getLeftLeaf(false).setViewState({
                                type: SidePanelControlViewType,
                                active: true,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.app.workspace.getRightLeaf(false).setViewState({
                            type: SidePanelControlViewType,
                            active: true,
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(SidePanelControlViewType)[0]);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    MarkdownAutocompletePlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading obsidian-markdown-formatting-assistant-plugin');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        addIcons();
                        this.registerView(SidePanelControlViewType, function (leaf) {
                            _this.sidePanelControlView = new SidePanelControlView(leaf, _this);
                            return _this.sidePanelControlView;
                        });
                        this.addRibbonIcon('viewIcon', 'Open Markdown Formatting Assistant', function () {
                            _this.toggleSidePanelControlView();
                        });
                        this.addCommand({
                            id: 'open-sample-modal',
                            name: 'Open Sample Modal',
                            // callback: () => {
                            // 	console.log('Simple Callback');
                            // },
                            checkCallback: function (checking) {
                                var leaf = _this.app.workspace.activeLeaf;
                                if (leaf) {
                                    if (!checking) {
                                        new SampleModal(_this).open();
                                    }
                                    return true;
                                }
                                return false;
                            },
                        });
                        this.addSettingTab(new SettingsTab(this.app, this));
                        this.keyUpFunction = function (cm, event) {
                            return CommandListView.display(_this.app, cm, event, _this.settings.triggerChar);
                        };
                        this.registerCodeMirror(function (cm) {
                            cm.on('keyup', _this.keyUpFunction);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkdownAutocompletePlugin.prototype.onunload = function () {
        var _this = this;
        this.app.workspace.iterateCodeMirrors(function (cm) {
            cm.off('keyup', _this.keyUpFunction);
        });
    };
    MarkdownAutocompletePlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkdownAutocompletePlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MarkdownAutocompletePlugin;
}(obsidian.Plugin));
var SampleModal = /** @class */ (function (_super) {
    __extends(SampleModal, _super);
    function SampleModal(plugin) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        return _this;
    }
    SampleModal.prototype.onOpen = function () {
        var contentEl = this.contentEl;
        contentEl.createEl('h2').setText('Saved Colors');
        contentEl.createDiv().innerHTML =
            '<p>' + this.plugin.settings.savedColors.join('<br>') + '</p>';
    };
    SampleModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return SampleModal;
}(obsidian.Modal));
var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.close = function () {
        console.log('closed');
        _super.prototype.close.call(this);
    };
    SettingsTab.prototype.display = function () {
        return __awaiter(this, void 0, void 0, function () {
            var containerEl;
            var _this = this;
            return __generator(this, function (_a) {
                containerEl = this.containerEl;
                containerEl.empty();
                containerEl.createEl('h2', {
                    text: 'Markdown Formatting Assistant Settings',
                });
                new obsidian.Setting(containerEl)
                    .setName('Trigger Char')
                    .setDesc('Char which triggers the autocompletion')
                    .addText(function (text) {
                    return text
                        .setPlaceholder('Enter a char to trigger the autocompletion')
                        .setValue(_this.plugin.settings.triggerChar)
                        .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.plugin.settings.triggerChar = value;
                                    return [4 /*yield*/, this.plugin.saveSettings()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                new obsidian.Setting(containerEl)
                    .setName('Side Pane Side')
                    .setDesc('Choose on which side the Side Pane accours. ()')
                    .addText(function (text) {
                    return text
                        .setPlaceholder('Enter left or right')
                        .setValue(_this.plugin.settings.sidePaneSideLeft ? 'left' : 'right')
                        .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.plugin.settings.sidePaneSideLeft =
                                        value === 'left' ? true : false;
                                    return [4 /*yield*/, this.plugin.saveSettings()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                new obsidian.Setting(containerEl)
                    .setName('Saved Colors')
                    .setDesc('Colors which are saved vie the color picker. The order will be also considered. Requiers a restart of obsidian.')
                    .addTextArea(function (text) {
                    text.inputEl.style.minHeight = '400px';
                    text
                        .setValue(_this.plugin.settings.savedColors
                        .reverse()
                        .map(function (color, i) { return color; })
                        .join('\n'))
                        .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                        var colors, filteredColors;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    colors = value.split('\n').reverse();
                                    filteredColors = colors.filter(function (color) {
                                        return /^#[0-9A-F]{6}$/i.test(color);
                                    });
                                    this.plugin.settings.savedColors = filteredColors;
                                    return [4 /*yield*/, this.plugin.saveSettings()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    text.inputEl.addEventListener('focusout', function (ev) {
                        // @ts-ignore
                        var colors = ev.target.value.split('\n').reverse();
                        // @ts-ignore
                        var filteredColors = colors.map(function (color, i) {
                            var isHex = /^#[0-9A-F]{6}$/i.test(color);
                            if (!isHex) {
                                new obsidian.Notice('The color ' +
                                    color +
                                    'on Line' +
                                    (i + 1) +
                                    " has the wrong format and wan't be saved.");
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = MarkdownAutocompletePlugin;