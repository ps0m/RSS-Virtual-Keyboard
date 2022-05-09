class MyKeyboard {
  constructor(KeyClass, listKey) {
    this.elements = {
      mainField: null,
      mainKeyboard: null,
      keySet: null,
      keyBuffer: null,
    };
    this.properties = {
      isCapsLock: false,
      isShift: false,
      lang: localStorage.getItem("langPs0m") || "En",
    };
    this.KeyClass = KeyClass;
    this.listKey = listKey;
  }

  init() {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.prepend(container);

    const header = document.createElement("header");
    header.classList.add("header");
    container.appendChild(header);
    header.innerHTML = "<span>RS</span>S Virtual Keybo<span>ard</span>";

    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);

    this.mainField = document.createElement("textarea");
    this.mainField.classList.add("main__field");
    this.mainField.setAttribute("cols", "10");
    this.mainField.value = "";
    main.appendChild(this.mainField);

    this.mainKeyboard = document.createElement("div");
    this.mainKeyboard.classList.add("main__keyboard");
    main.appendChild(this.mainKeyboard);

    const mainNotate = document.createElement("p");
    mainNotate.classList.add("main__notate");
    main.appendChild(mainNotate);
    mainNotate.textContent = `Keyboard was creating in operating system Windows.
      For change language use LeftControl + LeftAlt
      (Double click LeftControl + LeftAlt if you\`ll using virtual keyboard)`;

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    container.appendChild(footer);

    const footerLink = document.createElement("a");
    footerLink.classList.add("footer__link");
    footerLink.setAttribute("href", "https://github.com/ps0m?tab=repositories");
    footerLink.textContent = "© 2022 github";
    footer.appendChild(footerLink);

    const footerLogo = document.createElement("a");
    footerLogo.classList.add("footer__logo");
    footerLink.setAttribute("href", "https://github.com/rolling-scopes-school/tasks/tree/master/stage1");
    footer.appendChild(footerLogo);

    this.keySet = [];
    this.keyBuffer = new Set();

    for (let i = 0; i < 64; i += 1) {
      const key = new this.KeyClass(
        this.listKey[i].key,
        this.listKey[i
        ].code,
        this.listKey[i
        ].textEn,
        this.listKey[i
        ].textEnShift,
        this.listKey[i
        ].textRu,
        this.listKey[i
        ].textRuShift,
        this.listKey[i
        ].size,
        this.listKey[i
        ].assignment,
      );
      this.keySet.push(key);

      const button = document.createElement("div");
      button.classList.add("key");
      this.mainKeyboard.append(button);
      button.dataset.number = [i,
      ];
      button.dataset.code = this.keySet[i
      ].code;
      if (this.keySet[i
      ].assignment === "functional") {
        button.classList.add("key_decorative");
      }
      if (this.keySet[i
      ].size === "big") {
        button.classList.add("key_big");
      }
      if (this.keySet[i
      ].size === "tiny") {
        button.classList.add("key_tiny");
      }
      if (this.keySet[i
      ].code === "CapsLock") {
        button.classList.add("key__caps");
      }
    }
    this.setMainFieldFocus();
  }

  setValue() {
    const language = this.properties.lang;
    for (let i = 0; i < this.keySet.length; i += 1) {
      if (!this.properties.isShift && !this.properties.isCapsLock) {
        this.mainKeyboard.children[i
        ].textContent = this.keySet[i
        ][`text${language}`];
      }
      if (this.keySet[i
      ].assignment !== "functional") {
        if (!this.properties.isShift && this.properties.isCapsLock) {
          this.mainKeyboard.children[i
          ].textContent = this.keySet[i
          ][`text${language
          }`
          ].toUpperCase();
        }
        if (this.properties.isShift && !this.properties.isCapsLock) {
          this.mainKeyboard.children[i
          ].textContent = this.keySet[i
          ][`text${language
          }Shift`
          ].toUpperCase();
        }
        if (this.properties.isShift && this.properties.isCapsLock) {
          this.mainKeyboard.children[i
          ].textContent = this.keySet[i
          ][`text${language
          }Shift`
          ].toLowerCase();
        }
      }
    }
  }

  setEventListener() {
    document.addEventListener("keydown", (event) => {
      if (event.getModifierState("CapsLock") && event.code !== "CapsLock") {
        this.changeActiveCapsLock();
        this.setValue();
      }
    }, { once: true });

    document.addEventListener("keydown", (event) => {
      for (let i = 0; i < this.mainKeyboard.children.length; i += 1) {
        if (event.code === this.mainKeyboard.children[i].dataset.code) {
          if (this.keySet[i].assignment !== "functional") {
            event.preventDefault();
            const newClick = new MouseEvent("mousedown", {
              bubbles: true,
              cancelable: true,
            });
            this.mainKeyboard.children[i].dispatchEvent(newClick);
          }
          this.mainKeyboard.children[i].classList.add("key_shining");
        }
      }

      if (event.code === "CapsLock" || event.code === "ShiftLeft"
        || event.code === "ShiftRight" || event.code === "ControlLeft"
        || event.code === "ControlRight" || event.code === "AltLeft"
        || event.code === "AltLeft") {
        if (event.repeat) {
          return;
        }
      }

      if (event.code === "Tab") {
        event.preventDefault();
        this.mainField.setRangeText("    ", this.mainField.selectionStart, this.mainField.selectionEnd, "end");
      }

      if (event.code === "CapsLock") {
        this.changeActiveCapsLock();
        this.setValue();
      }

      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        // }
        this.properties.isShift = !this.properties.isShift;
        this.setValue();
      }
      if (!this.keyBuffer.has(event.code)) {
        this.keyBuffer.add(event.code);
        this.checkShortCuts();
      }
    });

    document.addEventListener("keyup", (event) => {
      this.keyBuffer.delete(event.code);
      for (let i = 0; i < this.mainKeyboard.children.length; i += 1) {
        if (event.code === this.mainKeyboard.children[i
        ].dataset.code) {
          this.mainKeyboard.children[i
          ].classList.remove("key_shining");
        }
      }
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        if (event.repeat) {
          return;
        }
        this.properties.isShift = !this.properties.isShift;
        this.setValue();
      }
    });

    this.mainKeyboard.addEventListener("mousedown", (event) => {
      if (!event.target.closest(".key")) {
        return;
      }
      const { number } = event.target.dataset;
      this.mainKeyboard.children[number
      ].classList.add("key_shining");

      this.keyBuffer.add(event.target.dataset.code);
      this.checkShortCuts();

      if (this.keySet[number
      ].assignment !== "functional") {
        this.mainField.setRangeText(this.mainKeyboard.children[number
        ].textContent, this.mainField.selectionStart, this.mainField.selectionEnd, "end");
      }
      if (this.keySet[number
      ].code === "Backspace") {
        if (this.mainField.selectionStart !== 0) {
          this.mainField.setRangeText("", this.mainField.selectionStart - 1, this.mainField.selectionEnd, "end");
        }
      }
      if (this.keySet[number
      ].code === "Delete") {
        if (this.mainField.selectionStart !== 0) {
          this.mainField.setRangeText("", this.mainField.selectionStart, this.mainField.selectionEnd + 1, "end");
        }
      }
      if (this.keySet[number
      ].code === "Enter") {
        this.mainField.setRangeText("\n", this.mainField.selectionStart, this.mainField.selectionEnd, "end");
      }
      if (this.keySet[number
      ].code === "Tab") {
        event.preventDefault();
        this.mainField.setRangeText("r", this.mainField.selectionStart, this.mainField.selectionEnd, "end");
      }
      if (this.keySet[number
      ].code === "CapsLock") {
        this.changeActiveCapsLock();
        this.setValue();
      }
      if (this.keySet[number
      ].code === "ShiftLeft" || this.keySet[number
      ].code === "ShiftRight") {
        if (event.repeat) {
          return;
        }
        this.properties.isShift = !this.properties.isShift;
        this.setValue();
      }
      if (this.keySet[number].code === "ArrowLeft") {
        if (this.mainField.selectionStart !== 0) {
          this.mainField.setSelectionRange(
            this.mainField.selectionStart,
            this.mainField.selectionStart - 1,
          );
        }
      }
      if (this.keySet[number].code === "ArrowRight") {
        this.mainField.setSelectionRange(
          this.mainField.selectionStart + 1,
          this.mainField.selectionStart + 1,
        );
      }
      if (this.keySet[number].code === "ArrowUp") {
        this.mainField.setSelectionRange(
          this.mainField.selectionStart - 69,
          this.mainField.selectionStart - 69,
        );
      }
      if (this.keySet[number].code === "ArrowDown") {
        if (this.mainField.selectionStart !== 0) {
          this.mainField.setSelectionRange(
            this.mainField.selectionStart + 69,
            this.mainField.selectionStart + 69,
          );
        }
      }
    });

    this.mainKeyboard.addEventListener("mouseup", (event) => {
      for (let i = 0; i < this.mainKeyboard.children.length; i += 1) {
        this.mainKeyboard.children[i].classList.remove("key_shining");
      }
      if (!event.target.closest(".key")) {
        return;
      }
      this.keyBuffer.delete(event.target.dataset.code);

      const { number } = event.target.dataset;

      if (this.keySet[number
      ].code === "ShiftLeft" || this.keySet[number
      ].code === "ShiftRight") {
        if (event.repeat) {
          return;
        }
        this.properties.isShift = !this.properties.isShift;
        this.setValue();
      }
    });

    this.mainKeyboard.addEventListener("dblclick", (event) => {
      if (!event.target.closest(".key")) {
        return;
      }
      const { number } = event.target.dataset;
      if (this.keySet[number
      ].code === "ControlLeft") {
        this.keyBuffer.add("ControlLeft");
        this.mainKeyboard.children[number
        ].classList.add("key_shining");
      }
    });
  }

  checkShortCuts() {
    if (this.keyBuffer.has("ControlLeft") && this.keyBuffer.has("AltLeft")) {
      if (this.properties.lang === "Ru") {
        this.properties.lang = "En";
        localStorage.setItem(
          "langPs0m",
          "En",
        );
      } else {
        this.properties.lang = "Ru";
        localStorage.setItem(
          "langPs0m",
          "Ru",
        );
      }
      this.keyBuffer.clear();
      this.setValue();
      const ctrlLeft = document.querySelector("[data-code=\"ControlLeft\"]");
      ctrlLeft.classList.remove("key_shining");
    }
  }

  changeActiveCapsLock() {
    const capsLock = document.querySelector("[data-code=\"CapsLock\"]");
    this.properties.isCapsLock = !this.properties.isCapsLock;
    if (this.properties.isCapsLock) {
      capsLock.classList.add("key__caps_active");
    } else capsLock.classList.remove("key__caps_active");
  }

  setMainFieldFocus() {
    this.mainField.focus();
    this.mainField.addEventListener("blur", () => {
      this.mainField.focus();
    });
  }
}

export default MyKeyboard;
