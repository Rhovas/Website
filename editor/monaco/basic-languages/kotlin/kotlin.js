"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/kotlin/kotlin", ["require"],(require)=>{
var moduleExports = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/basic-languages/kotlin/kotlin.ts
  var kotlin_exports = {};
  __export(kotlin_exports, {
    conf: () => conf,
    language: () => language
  });
  var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"]
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
      ["/*", "*/"]
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "/*", close: "*/" }
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "<", close: ">" }
    ],
    folding: {
      markers: {
        start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
        end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
      }
    }
  };
  var language = {
    defaultToken: "",
    tokenPostfix: ".rho",
    keywords: [
      "assert",
      "break",
      "catch",
      "class",
      "continue",
      "do",
      "else",
      "ensure",
      "false",
      "finally",
      "for",
      "func",
      "if",
      "in",
      "init",
      "import",
      "interface",
      "match",
      "null",
      "print",
      "require",
      "return",
      "struct",
      "this",
      "throw",
      "try",
      "type",
      "while",
      "val",
      "var"
    ],
    operators: [
      "+",
      "-",
      "*",
      "/",
      "%",
      "&&",
      "||",
      "!",
      "==",
      "!=",
      "===",
      "!==",
      ">",
      "<",
      "<=",
      ">=",
      "[",
      "]",
      "?",
      "?.",
      "?..",
      "..",
      ":",
      ";",
      "@",
      "$",
      "#",
      "_",
    ],
    symbols: /[=><!~?:&|+\-*\/]+/,
    escapes: /\\(?:[nrt"$\\]|u[0-9A-F]{4})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9A-F]+(_+[0-9A-F]+)*/,
    tokenizer: {
      root: [
        { include: "@whitespace" },
        [/[A-Z][A-Za-z]*/, "type.identifier"],
        [/[a-z_][A-Za-z0-9_]*/, {
          cases: {
            "@keywords": "keyword.$0",
            "@default": "identifier"
          }
        }],
        [/:[a-z_][A-Za-z0-9_]*/, "variable"],
        [/#[a-z_][A-Za-z0-9_]*/, "variable", "@dsl"],
        [/[{}()\[\]]/, "@brackets"],
        [/[<>](?!@symbols)/, "@brackets"],
        [/@symbols/, {
          cases: {
            "@operators": "delimiter",
            "@default": ""
          }
        }],
        [/@\s*[a-zA-Z_$][\w$]*/, "annotation"],
        [/(@digits)\.(@digits)(e[\-+]?(@digits))?/, "number.float"],
        [/0x(@hexdigits)/, "number.hex"],
        [/0o(@octaldigits)/, "number.octal"],
        [/0b(@binarydigits)/, "number.binary"],
        [/(@digits)/, "number"],
        [/[.,;]/, "delimiter"],
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        [/"/, "string", "@string"]
      ],
      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"]
      ],
      comment: [
        [/[^\/*]+/, "comment"],
        [/\/\*/, "comment", "@comment"],
        [/\*\//, "comment", "@pop"],
        [/[\/*]/, "comment"]
      ],
      string: [
        [/\${/, "delimiter.bracket", "@stringBraceCounting"],
        [/([^"$\\]|\$[^{])+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"]
      ],
      stringBraceCounting: [
        [/{/, "delimiter.bracket", "@stringBraceCounting"],
        [/}/, "delimiter.bracket", "@pop"],
        { include: "root" }
      ],
      dsl: [
        { include: "whitespace" },
        [/{/, "delimiter.bracket", "@dslBraceCountingOuter"],
        [/(?:)/, "delimiter", "@pop"],
      ],
      dslBraceCountingOuter: [
        [/{/, "string", "@dslBraceCountingInner"],
        [/}/, "delimiter.bracket", "@pop"],
        [/./, "string"]
      ],
      dslBraceCountingInner: [
        [/{/, "string", "@dslBraceCountingInner"],
        [/}/, "string", "@pop"],
        [/./, "string"]
      ]
    }
  };
  return __toCommonJS(kotlin_exports);
})();
return moduleExports;
});
