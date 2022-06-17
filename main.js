/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyKey = /*#__PURE__*/_createClass(function MyKey(key, code, textEn, textEnShift, textRu, textRuShift, size, assignment) {
  _classCallCheck(this, MyKey);

  this.key = key;
  this.code = code;
  this.textEn = textEn;
  this.textEnShift = textEnShift;
  this.textRu = textRu;
  this.textRuShift = textRuShift;
  this.size = size;
  this.assignment = assignment;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyKey);

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MyKeyboard = /*#__PURE__*/function () {
  function MyKeyboard(KeyClass, listKey) {
    _classCallCheck(this, MyKeyboard);

    this.elements = {
      mainField: null,
      mainKeyboard: null,
      keySet: null,
      keyBuffer: null
    };
    this.properties = {
      isCapsLock: false,
      isShift: false,
      lang: localStorage.getItem("langPs0m") || "En"
    };
    this.KeyClass = KeyClass;
    this.listKey = listKey;
    this.widthFont = 12.21;
  }

  _createClass(MyKeyboard, [{
    key: "init",
    value: function init() {
      var container = document.createElement("div");
      container.classList.add("container");
      document.body.prepend(container);
      var header = document.createElement("header");
      header.classList.add("header");
      container.appendChild(header);
      header.innerHTML = "<span>RS</span>S Virtual Keybo<span>ard</span>";
      var main = document.createElement("div");
      main.classList.add("main");
      container.appendChild(main);
      var mainNotate = document.createElement("p");
      mainNotate.classList.add("main__notate");
      main.appendChild(mainNotate);
      mainNotate.textContent = "Keyboard was creating in operating system Windows.\n      For change language use LeftControl + LeftAlt\n      (Double click LeftControl + LeftAlt if you`ll using virtual keyboard)";
      this.mainField = document.createElement("textarea");
      this.mainField.classList.add("main__field");
      this.mainField.setAttribute("cols", "10"); // this.mainField.value = "";

      this.mainField.value = " adfsdfa dfkd dk djkdskdl sd ldlfdjf sdf dfdddl dsfd ds  sdf sd fsd f sd adfsdfa dfkd dk djkdskdl sd ldlfdjf sdf dfdddl dsfd ds  sdf sd fsd f sd adfsdfa dfkd dk djkdskdl sd ldlfdjf sdf dfdddl dsfd ds  sdf sd fsd f sd adfsdfa dfkd dk djkdskdl sd ldlfdjf sdf dfdddl dsfd ds  sdf sd fsd f sd adfsdfa dfkd dk djkdskdl sd ldlfdjf sdf dfdddl dsfd ds  sdf sd fsd f sd adfsdfa dfkd dk djkdskdl sd ldlfdjf dfdsf dfdfsdfsdfsdfsdf dsf sd fssssssssssssdddddddddddddddddddddddddddddddddddddddddddda";
      main.appendChild(this.mainField);
      this.mainKeyboard = document.createElement("div");
      this.mainKeyboard.classList.add("main__keyboard");
      main.appendChild(this.mainKeyboard);
      var footer = document.createElement("footer");
      footer.classList.add("footer");
      container.appendChild(footer);
      var footerLink = document.createElement("a");
      footerLink.classList.add("footer__link");
      footerLink.setAttribute("href", "https://github.com/ps0m?tab=repositories");
      footerLink.textContent = "© 2022 github";
      footer.appendChild(footerLink);
      var footerLogo = document.createElement("a");
      footerLogo.classList.add("footer__logo");
      footerLogo.setAttribute("href", "https://github.com/rolling-scopes-school/tasks/tree/master/stage1");
      footer.appendChild(footerLogo);
      this.keySet = [];
      this.keyBuffer = new Set();

      for (var i = 0; i < 64; i += 1) {
        var key = new this.KeyClass(this.listKey[i].key, this.listKey[i].code, this.listKey[i].textEn, this.listKey[i].textEnShift, this.listKey[i].textRu, this.listKey[i].textRuShift, this.listKey[i].size, this.listKey[i].assignment);
        this.keySet.push(key);
        var button = document.createElement("div");
        button.classList.add("key");
        this.mainKeyboard.append(button);
        button.dataset.number = [i];
        button.dataset.code = this.keySet[i].code;

        if (this.keySet[i].assignment === "functional") {
          button.classList.add("key_decorative");
        }

        if (this.keySet[i].size === "big") {
          button.classList.add("key_big");
        }

        if (this.keySet[i].size === "tiny") {
          button.classList.add("key_tiny");
        }

        if (this.keySet[i].code === "CapsLock") {
          button.classList.add("key__caps");
        }

        this.setMainFieldFocus();
      }
    }
  }, {
    key: "setValue",
    value: function setValue() {
      var language = this.properties.lang;

      for (var i = 0; i < this.keySet.length; i += 1) {
        if (!this.properties.isShift && !this.properties.isCapsLock) {
          this.mainKeyboard.children[i].textContent = this.keySet[i]["text".concat(language)];
        }

        if (this.keySet[i].assignment !== "functional") {
          if (!this.properties.isShift && this.properties.isCapsLock) {
            this.mainKeyboard.children[i].textContent = this.keySet[i]["text".concat(language)].toUpperCase();
          }

          if (this.properties.isShift && !this.properties.isCapsLock) {
            this.mainKeyboard.children[i].textContent = this.keySet[i]["text".concat(language, "Shift")].toUpperCase();
          }

          if (this.properties.isShift && this.properties.isCapsLock) {
            this.mainKeyboard.children[i].textContent = this.keySet[i]["text".concat(language, "Shift")].toLowerCase();
          }
        }
      }
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var _this = this;

      document.addEventListener("keydown", function (event) {
        if (event.getModifierState("CapsLock") && event.code !== "CapsLock") {
          _this.changeActiveCapsLock();

          _this.setValue();
        }
      }, {
        once: true
      });
      document.addEventListener("keydown", function (event) {
        for (var i = 0; i < _this.mainKeyboard.children.length; i += 1) {
          if (event.code === _this.mainKeyboard.children[i].dataset.code) {
            if (_this.keySet[i].assignment !== "functional") {
              event.preventDefault();
              var newClick = new MouseEvent("mousedown", {
                bubbles: true,
                cancelable: true
              });

              _this.mainKeyboard.children[i].dispatchEvent(newClick);
            }

            _this.mainKeyboard.children[i].classList.add("key_shining");
          }
        }

        if (event.code === "CapsLock" || event.code === "ShiftLeft" || event.code === "ShiftRight" || event.code === "ControlLeft" || event.code === "ControlRight" || event.code === "AltLeft" || event.code === "AltLeft") {
          if (event.repeat) {
            return;
          }
        }

        if (event.code === "Tab") {
          event.preventDefault();

          _this.mainField.setRangeText("    ", _this.mainField.selectionStart, _this.mainField.selectionEnd, "end");
        }

        if (event.code === "CapsLock") {
          _this.changeActiveCapsLock();

          _this.setValue();
        }

        if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
          // }
          _this.properties.isShift = !_this.properties.isShift;

          _this.setValue();
        }

        if (!_this.keyBuffer.has(event.code)) {
          _this.keyBuffer.add(event.code);

          _this.checkShortCuts();
        }
      });
      document.addEventListener("keyup", function (event) {
        _this.keyBuffer["delete"](event.code);

        for (var i = 0; i < _this.mainKeyboard.children.length; i += 1) {
          if (event.code === _this.mainKeyboard.children[i].dataset.code) {
            _this.mainKeyboard.children[i].classList.remove("key_shining");
          }
        }

        if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
          if (event.repeat) {
            return;
          }

          _this.properties.isShift = !_this.properties.isShift;

          _this.setValue();
        }
      });
      this.mainKeyboard.addEventListener("mousedown", function (event) {
        if (!event.target.closest(".key")) {
          return;
        }

        var number = event.target.dataset.number;

        _this.mainKeyboard.children[number].classList.add("key_shining");

        _this.keyBuffer.add(event.target.dataset.code);

        _this.checkShortCuts();

        if (_this.keySet[number].assignment !== "functional") {
          _this.mainField.setRangeText(_this.mainKeyboard.children[number].textContent, _this.mainField.selectionStart, _this.mainField.selectionEnd, "end");
        }

        if (_this.keySet[number].code === "Backspace") {
          if (_this.mainField.selectionStart !== 0) {
            _this.mainField.setRangeText("", _this.mainField.selectionStart - 1, _this.mainField.selectionEnd, "end");
          }
        }

        if (_this.keySet[number].code === "Delete") {
          if (_this.mainField.selectionStart !== 0) {
            _this.mainField.setRangeText("", _this.mainField.selectionStart, _this.mainField.selectionEnd + 1, "end");
          }
        }

        if (_this.keySet[number].code === "Enter") {
          _this.mainField.setRangeText("\n", _this.mainField.selectionStart, _this.mainField.selectionEnd, "end");
        }

        if (_this.keySet[number].code === "Tab") {
          event.preventDefault();

          _this.mainField.setRangeText("\t", _this.mainField.selectionStart, _this.mainField.selectionEnd, "end");
        }

        if (_this.keySet[number].code === "CapsLock") {
          _this.changeActiveCapsLock();

          _this.setValue();
        }

        if (_this.keySet[number].code === "ShiftLeft" || _this.keySet[number].code === "ShiftRight") {
          if (event.repeat) {
            return;
          }

          _this.properties.isShift = !_this.properties.isShift;

          _this.setValue();
        }

        if (_this.keySet[number].code === "ArrowLeft") {
          if (_this.mainField.selectionStart !== 0) {
            _this.mainField.setSelectionRange(_this.mainField.selectionStart, _this.mainField.selectionStart - 1);
          }
        }

        if (_this.keySet[number].code === "ArrowRight") {
          _this.mainField.setSelectionRange(_this.mainField.selectionStart + 1, _this.mainField.selectionStart + 1);
        }

        if (_this.keySet[number].code === "ArrowUp") {
          var positionUp = _this.moveCursorText(_this.getLengthStrings(), _this.mainField.selectionStart, "up");

          _this.mainField.setSelectionRange(positionUp, positionUp);
        }

        if (_this.keySet[number].code === "ArrowDown") {
          var positionDown = _this.moveCursorText(_this.getLengthStrings(), _this.mainField.selectionStart, "down");

          _this.mainField.setSelectionRange(positionDown, positionDown);
        }
      });
      this.mainKeyboard.addEventListener("mouseup", function (event) {
        for (var i = 0; i < _this.mainKeyboard.children.length; i += 1) {
          _this.mainKeyboard.children[i].classList.remove("key_shining");
        }

        if (!event.target.closest(".key")) {
          return;
        }

        _this.keyBuffer["delete"](event.target.dataset.code);

        var number = event.target.dataset.number;

        if (_this.keySet[number].code === "ShiftLeft" || _this.keySet[number].code === "ShiftRight") {
          if (event.repeat) {
            return;
          }

          _this.properties.isShift = !_this.properties.isShift;

          _this.setValue();
        }
      });
      this.mainKeyboard.addEventListener("dblclick", function (event) {
        if (!event.target.closest(".key")) {
          return;
        }

        var number = event.target.dataset.number;

        if (_this.keySet[number].code === "ControlLeft") {
          _this.keyBuffer.add("ControlLeft");

          _this.mainKeyboard.children[number].classList.add("key_shining");
        }
      });
    }
  }, {
    key: "checkShortCuts",
    value: function checkShortCuts() {
      if (this.keyBuffer.has("ControlLeft") && this.keyBuffer.has("AltLeft")) {
        if (this.properties.lang === "Ru") {
          this.properties.lang = "En";
          localStorage.setItem("langPs0m", "En");
        } else {
          this.properties.lang = "Ru";
          localStorage.setItem("langPs0m", "Ru");
        }

        this.keyBuffer.clear();
        this.setValue();
        var ctrlLeft = document.querySelector("[data-code=\"ControlLeft\"]");
        ctrlLeft.classList.remove("key_shining");
      }
    }
  }, {
    key: "changeActiveCapsLock",
    value: function changeActiveCapsLock() {
      var capsLock = document.querySelector("[data-code=\"CapsLock\"]");
      this.properties.isCapsLock = !this.properties.isCapsLock;

      if (this.properties.isCapsLock) {
        capsLock.classList.add("key__caps_active");
      } else capsLock.classList.remove("key__caps_active");
    }
  }, {
    key: "setMainFieldFocus",
    value: function setMainFieldFocus() {
      var _this2 = this;

      this.mainField.addEventListener("blur", function () {
        _this2.mainField.focus();
      });
    }
  }, {
    key: "getLengthStrings",
    value: function getLengthStrings() {
      var wholeLine = this.mainField.value;
      var arrayOfStringLength = [0];
      var maxLengthString = Math.ceil(this.mainField.clientWidth / this.widthFont);
      var currentSymbol = 0;
      var lastWord = 0;

      for (var i = 0; i < wholeLine.length; i += 1) {
        currentSymbol += 1;

        if (wholeLine[i] === "\n") {
          lastWord = 0;
          arrayOfStringLength[arrayOfStringLength.length - 1] = currentSymbol;
          currentSymbol = 0;
          arrayOfStringLength.push(currentSymbol);
        }

        if (wholeLine[i] === " ") {
          lastWord = currentSymbol;
        }

        if (currentSymbol < maxLengthString) {
          arrayOfStringLength[arrayOfStringLength.length - 1] = currentSymbol;
        }

        if (maxLengthString < currentSymbol) {
          if (wholeLine[i] !== " ") {
            if (!lastWord) {
              lastWord = currentSymbol - 1;
            }

            arrayOfStringLength[arrayOfStringLength.length - 1] = lastWord;
            currentSymbol -= lastWord; // } else {

            lastWord = 0;
            arrayOfStringLength.push(currentSymbol);
          }
        }
      }

      return arrayOfStringLength;
    }
  }, {
    key: "moveCursorText",
    value: function moveCursorText(arrayStrings, numberInField, direction) {
      if (numberInField === this.mainField.value.length && direction === "down" || numberInField === 0 && direction === "up") {
        return numberInField;
      }

      var numberInRow = numberInField;

      for (var i = 0; i < arrayStrings.length; i += 1) {
        numberInRow -= arrayStrings[i];

        if (numberInRow < 0) {
          if (direction === "up") {
            if (arrayStrings[i - 1] < arrayStrings[i] + numberInRow) {
              return numberInField - (arrayStrings[i] + numberInRow + 1);
            }

            return numberInField - arrayStrings[i - 1];
          }

          if (direction === "down") {
            if (arrayStrings[i + 1] <= arrayStrings[i] + numberInRow) {
              return numberInField + (arrayStrings[i + 1] - numberInRow - 1);
            }

            return numberInField + arrayStrings[i];
          }
        }

        if (numberInField === this.mainField.value.length && direction === "up") {
          if (arrayStrings[arrayStrings.length - 2] < arrayStrings[arrayStrings.length - 1]) {
            return numberInField - (arrayStrings[arrayStrings.length - 1] + 1);
          }

          return numberInField - arrayStrings[arrayStrings.length - 2];
        }
      }
    }
  }]);

  return MyKeyboard;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyKeyboard);

/***/ }),

/***/ "./src/js/list.js":
/*!************************!*\
  !*** ./src/js/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ListSetKey = [{
  key: "`",
  code: "Backquote",
  textEn: "`",
  textEnShift: "~",
  textRu: "ё",
  textRuShift: "Ё",
  size: "normal",
  assignment: "symbol"
}, {
  key: "1",
  code: "Digit1",
  textEn: "1",
  textEnShift: "!",
  textRu: "1",
  textRuShift: "!",
  size: "normal",
  assignment: "symbol"
}, {
  key: "2",
  code: "Digit2",
  textEn: "2",
  textEnShift: "@",
  textRu: "2",
  textRuShift: "\"",
  size: "normal",
  assignment: "symbol"
}, {
  key: "3",
  code: "Digit3",
  textEn: "3",
  textEnShift: "#",
  textRu: "3",
  textRuShift: "№",
  size: "normal",
  assignment: "symbol"
}, {
  key: "4",
  code: "Digit4",
  textEn: "4",
  textEnShift: "$",
  textRu: "4",
  textRuShift: ";",
  size: "normal",
  assignment: "symbol"
}, {
  key: "5",
  code: "Digit5",
  textEn: "5",
  textEnShift: "%",
  textRu: "5",
  textRuShift: "%",
  size: "normal",
  assignment: "symbol"
}, {
  key: "6",
  code: "Digit6",
  textEn: "6",
  textEnShift: "^",
  textRu: "6",
  textRuShift: ":",
  size: "normal",
  assignment: "symbol"
}, {
  key: "7",
  code: "Digit7",
  textEn: "7",
  textEnShift: "&",
  textRu: "7",
  textRuShift: "?",
  size: "normal",
  assignment: "symbol"
}, {
  key: "8",
  code: "Digit8",
  textEn: "8",
  textEnShift: "*",
  textRu: "8",
  textRuShift: "*",
  size: "normal",
  assignment: "symbol"
}, {
  key: "9",
  code: "Digit9",
  textEn: "9",
  textEnShift: "(",
  textRu: "9",
  textRuShift: "(",
  size: "normal",
  assignment: "symbol"
}, {
  key: "0",
  code: "Digit0",
  textEn: "0",
  textEnShift: ")",
  textRu: "0",
  textRuShift: ")",
  size: "normal",
  assignment: "symbol"
}, {
  key: "-",
  code: "Minus",
  textEn: "-",
  textEnShift: "_",
  textRu: "-",
  textRuShift: "_",
  size: "normal",
  assignment: "symbol"
}, {
  key: "=",
  code: "Equal",
  textEn: "=",
  textEnShift: "+",
  textRu: "=",
  textRuShift: "+",
  size: "normal",
  assignment: "symbol"
}, {
  key: "Backspace",
  code: "Backspace",
  textEn: "Backspace",
  textEnShift: "Backspace",
  textRu: "Backspace",
  textRuShift: "Backspace",
  size: "big",
  assignment: "functional"
}, {
  key: "Tab",
  code: "Tab",
  textEn: "Tab",
  textEnShift: "Tab",
  textRu: "Tab",
  textRuShift: "Tab",
  size: "normal",
  assignment: "functional"
}, {
  key: "q",
  code: "KeyQ",
  textEn: "q",
  textEnShift: "Q",
  textRu: "й",
  textRuShift: "Й",
  size: "normal",
  assignment: "symbol"
}, {
  key: "w",
  code: "KeyW",
  textEn: "w",
  textEnShift: "W",
  textRu: "ц",
  textRuShift: "Ц",
  size: "normal",
  assignment: "symbol"
}, {
  key: "e",
  code: "KeyE",
  textEn: "e",
  textEnShift: "E",
  textRu: "у",
  textRuShift: "У",
  size: "normal",
  assignment: "symbol"
}, {
  key: "r",
  code: "KeyR",
  textEn: "r",
  textEnShift: "R",
  textRu: "к",
  textRuShift: "К",
  size: "normal",
  assignment: "symbol"
}, {
  key: "t",
  code: "KeyT",
  textEn: "t",
  textEnShift: "T",
  textRu: "е",
  textRuShift: "Е",
  size: "normal",
  assignment: "symbol"
}, {
  key: "y",
  code: "KeyY",
  textEn: "y",
  textEnShift: "Y",
  textRu: "н",
  textRuShift: "Н",
  size: "normal",
  assignment: "symbol"
}, {
  key: "u",
  code: "KeyU",
  textEn: "u",
  textEnShift: "U",
  textRu: "г",
  textRuShift: "Г",
  size: "normal",
  assignment: "symbol"
}, {
  key: "i",
  code: "KeyI",
  textEn: "i",
  textEnShift: "I",
  textRu: "ш",
  textRuShift: "Ш",
  size: "normal",
  assignment: "symbol"
}, {
  key: "o",
  code: "KeyO",
  textEn: "o",
  textEnShift: "O",
  textRu: "щ",
  textRuShift: "Щ",
  size: "normal",
  assignment: "symbol"
}, {
  key: "p",
  code: "KeyP",
  textEn: "p",
  textEnShift: "P",
  textRu: "з",
  textRuShift: "З",
  size: "normal",
  assignment: "symbol"
}, {
  key: "[",
  code: "BracketLeft",
  textEn: "[",
  textEnShift: "{",
  textRu: "х",
  textRuShift: "Х",
  size: "normal",
  assignment: "symbol"
}, {
  key: "]",
  code: "BracketRight",
  textEn: "]",
  textEnShift: "}",
  textRu: "ъ",
  textRuShift: "Ъ",
  size: "normal",
  assignment: "symbol"
}, {
  key: "/",
  code: "Backslash",
  textEn: "/",
  textEnShift: "|",
  textRu: "/",
  textRuShift: "\\",
  size: "normal",
  assignment: "symbol"
}, {
  key: "CapsLock",
  code: "CapsLock",
  textEn: "CapsLock",
  textEnShift: "CapsLock",
  textRu: "CapsLock",
  textRuShift: "",
  size: "big",
  assignment: "functional"
}, {
  key: "a",
  code: "KeyA",
  textEn: "a",
  textEnShift: "A",
  textRu: "ф",
  textRuShift: "Ф",
  size: "normal",
  assignment: "symbol"
}, {
  key: "s",
  code: "KeyS",
  textEn: "s",
  textEnShift: "S",
  textRu: "ы",
  textRuShift: "Ы",
  size: "normal",
  assignment: "symbol"
}, {
  key: "d",
  code: "KeyD",
  textEn: "d",
  textEnShift: "D",
  textRu: "в",
  textRuShift: "В",
  size: "normal",
  assignment: "symbol"
}, {
  key: "f",
  code: "KeyF",
  textEn: "f",
  textEnShift: "F",
  textRu: "а",
  textRuShift: "А",
  size: "normal",
  assignment: "symbol"
}, {
  key: "g",
  code: "KeyG",
  textEn: "g",
  textEnShift: "G",
  textRu: "п",
  textRuShift: "П",
  size: "normal",
  assignment: "symbol"
}, {
  key: "h",
  code: "KeyH",
  textEn: "h",
  textEnShift: "H",
  textRu: "р",
  textRuShift: "Р",
  size: "normal",
  assignment: "symbol"
}, {
  key: "j",
  code: "KeyJ",
  textEn: "j",
  textEnShift: "J",
  textRu: "о",
  textRuShift: "О",
  size: "normal",
  assignment: "symbol"
}, {
  key: "k",
  code: "KeyK",
  textEn: "k",
  textEnShift: "K",
  textRu: "л",
  textRuShift: "Л",
  size: "normal",
  assignment: "symbol"
}, {
  key: "l",
  code: "KeyL",
  textEn: "l",
  textEnShift: "L",
  textRu: "д",
  textRuShift: "Д",
  size: "normal",
  assignment: "symbol"
}, {
  key: ";",
  code: "Semicolon",
  textEn: ";",
  textEnShift: ":",
  textRu: "ж",
  textRuShift: "Ж",
  size: "normal",
  assignment: "symbol"
}, {
  key: "'",
  code: "Quote",
  textEn: "'",
  textEnShift: "\"",
  textRu: "э",
  textRuShift: "Э",
  size: "normal",
  assignment: "symbol"
}, {
  key: "Enter",
  code: "Enter",
  textEn: "Enter",
  textEnShift: "Enter",
  textRu: "Enter",
  textRuShift: "",
  size: "big",
  assignment: "functional"
}, {
  key: "Shift",
  code: "ShiftLeft",
  textEn: "Shift",
  textEnShift: "Shift",
  textRu: "Shift",
  textRuShift: "",
  size: "big",
  assignment: "functional"
}, {
  key: "z",
  code: "KeyZ",
  textEn: "z",
  textEnShift: "Z",
  textRu: "я",
  textRuShift: "Я",
  size: "normal",
  assignment: "symbol"
}, {
  key: "x",
  code: "KeyX",
  textEn: "x",
  textEnShift: "X",
  textRu: "ч",
  textRuShift: "Ч",
  size: "normal",
  assignment: "symbol"
}, {
  key: "c",
  code: "KeyC",
  textEn: "c",
  textEnShift: "C",
  textRu: "с",
  textRuShift: "С",
  size: "normal",
  assignment: "symbol"
}, {
  key: "v",
  code: "KeyV",
  textEn: "v",
  textEnShift: "V",
  textRu: "м",
  textRuShift: "М",
  size: "normal",
  assignment: "symbol"
}, {
  key: "b",
  code: "KeyB",
  textEn: "b",
  textEnShift: "B",
  textRu: "и",
  textRuShift: "И",
  size: "normal",
  assignment: "symbol"
}, {
  key: "n",
  code: "KeyN",
  textEn: "n",
  textEnShift: "N",
  textRu: "т",
  textRuShift: "Т",
  size: "normal",
  assignment: "symbol"
}, {
  key: "m",
  code: "KeyM",
  textEn: "m",
  textEnShift: "M",
  textRu: "ь",
  textRuShift: "Ь",
  size: "normal",
  assignment: "symbol"
}, {
  key: ",",
  code: "Comma",
  textEn: ",",
  textEnShift: "<",
  textRu: "б",
  textRuShift: "Б",
  size: "normal",
  assignment: "symbol"
}, {
  key: ".",
  code: "Period",
  textEn: ".",
  textEnShift: ">",
  textRu: "ю",
  textRuShift: "Ю",
  size: "normal",
  assignment: "symbol"
}, {
  key: "/",
  code: "Slash",
  textEn: "/",
  textEnShift: "?",
  textRu: ".",
  textRuShift: ",",
  size: "normal",
  assignment: "symbol"
}, {
  key: "ArrowUp",
  code: "ArrowUp",
  textEn: "⮝",
  textEnShift: "⮝",
  textRu: "⮝",
  textRuShift: "⮝",
  size: "normal",
  assignment: "functional"
}, {
  key: "Shift",
  code: "ShiftRight",
  textEn: "Shift",
  textEnShift: "Shift",
  textRu: "Shift",
  textRuShift: "Shift",
  size: "big",
  assignment: "functional"
}, {
  key: "Control",
  code: "ControlLeft",
  textEn: "Ctrl",
  textEnShift: "Ctrl",
  textRu: "Ctrl",
  textRuShift: "Ctrl",
  size: "normal",
  assignment: "functional"
}, {
  key: "Meta",
  code: "MetaLeft",
  textEn: "⊞",
  textEnShift: "⊞",
  textRu: "⊞",
  textRuShift: "⊞",
  size: "normal",
  assignment: "functional"
}, {
  key: "Alt",
  code: "AltLeft",
  textEn: "Alt",
  textEnShift: "Alt",
  textRu: "Alt",
  textRuShift: "Alt",
  size: "normal",
  assignment: "functional"
}, {
  key: " ",
  code: "Space",
  textEn: " ",
  textEnShift: " ",
  textRu: " ",
  textRuShift: " ",
  size: "tiny",
  assignment: "symbol"
}, {
  key: "Alt",
  code: "AltRight",
  textEn: "Alt",
  textEnShift: "Alt",
  textRu: "Alt",
  textRuShift: "Alt",
  size: "normal",
  assignment: "functional"
}, {
  key: "Control",
  code: "ControlRight",
  textEn: "Ctrl",
  textEnShift: "Ctrl",
  textRu: "Ctrl",
  textRuShift: "Ctrl",
  size: "normal",
  assignment: "functional"
}, {
  key: "ArrowLeft",
  code: "ArrowLeft",
  textEn: "⮜",
  textEnShift: "⮜",
  textRu: "⮜",
  textRuShift: "⮜",
  size: "normal",
  assignment: "functional"
}, {
  key: "ArrowDown",
  code: "ArrowDown",
  textEn: "⮟",
  textEnShift: "⮟",
  textRu: "⮟",
  textRuShift: "⮟",
  size: "normal",
  assignment: "functional"
}, {
  key: "ArrowRight",
  code: "ArrowRight",
  textEn: "⮞",
  textEnShift: "⮞",
  textRu: "⮞",
  textRuShift: "⮞",
  size: "normal",
  assignment: "functional"
}, {
  key: "Delete",
  code: "Delete",
  textEn: "Del",
  textEnShift: "Del",
  textRu: "Del",
  textRuShift: "Del",
  size: "normal",
  assignment: "functional"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListSetKey);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _js_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/list */ "./src/js/list.js");
/* harmony import */ var _js_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/key */ "./src/js/key.js");
/* harmony import */ var _js_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/keyboard */ "./src/js/keyboard.js");




var VirtualKeyboard = new _js_keyboard__WEBPACK_IMPORTED_MODULE_3__["default"](_js_key__WEBPACK_IMPORTED_MODULE_2__["default"], _js_list__WEBPACK_IMPORTED_MODULE_1__["default"]);
VirtualKeyboard.init();
VirtualKeyboard.setValue();
VirtualKeyboard.setEventListener();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map