class MyKeyboard {
  constructor(KeyClass, listKey) {
    this.elements = {
      container: null,
      header: null,
      main: null,
      mainField: null,
      mainKeyboard: null,
      mainNotate: null,
      button: null,
      keySet: null,
      keyBuffer: null,
    };
    this.properties = {
      textValue: "",
      isCapsLock: false,
      isShift: false,
      lang: localStorage.getItem("langPs0m") || "En",
    };
    this.KeyClass = KeyClass;
    this.listKey = listKey;
  }

  init() {
    this.container = document.createElement("div");
    this.container.classList.add("container");
    document.body.prepend(this.container);

    this.header = document.createElement("header");
    this.header.classList.add("header");
    this.container.appendChild(this.header);
    this.header.textContent = "RSS Виртуальная клавиатура";

    this.main = document.createElement("div");
    this.main.classList.add("main");
    this.container.appendChild(this.main);

    this.mainField = document.createElement("textarea");
    this.mainField.classList.add("main__field");
    // this.mainField.setAttribute("wrap", "hard");
    this.mainField.setAttribute("cols", "10");
    this.mainField.value = "MyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloperMyNamesSergeyImJuniorFrontendDeveloper";
    this.main.appendChild(this.mainField);

    this.mainKeyboard = document.createElement("div");
    this.mainKeyboard.classList.add("main__keyboard");
    this.main.appendChild(this.mainKeyboard);

    this.mainNotate = document.createElement("p");
    this.mainNotate.classList.add("main__notate");
    this.main.appendChild(this.mainNotate);
    this.mainNotate.textContent = `Клавиатура создана в операционной системе Windows.
    Для переключения языка комбинация: левыe ctrl + alt`;

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
      // console.log(this.keySet[i]);

      this.button = document.createElement("div");
      this.button.classList.add("key");
      this.mainKeyboard.append(this.button);
      this.button.dataset.number = [i,
      ];
      this.button.dataset.code = this.keySet[i
      ].code;
      if (this.keySet[i
      ].size === "big") {
        this.button.classList.add("key_big");
      }
      if (this.keySet[i
      ].size === "tiny") {
        this.button.classList.add("key_tiny");
      }
      if (this.keySet[i
      ].code === "CapsLock") {
        this.button.classList.add("key__caps");
      }
    }
    this.setMainFieldFocus();
  }

  setValue() {
    // console.log(`isCapsLock  ${this.properties.isCapsLock}`,
    // `isShift ${this.properties.isShift}`);
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
        // if (event.repeat) {
        //   return;
        // }
        this.changeActiveCapsLock();
        this.setValue();
      }

      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        // if (event.repeat) {
        //   return;
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
      // console.log(event);
      this.keyBuffer.delete(event.code);
      // this.checkShortCuts();
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
      // console.log(event);
      if (!event.target.closest(".key")) {
        return;
      }
      const { number } = event.target.dataset;
      this.mainKeyboard.children[number
      ].classList.add("key_shining");

      this.keyBuffer.add(event.target.dataset.code);
      // console.log(this.keyBuffer);
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
      ].code === "Enter") {
        this.mainField.setRangeText("\n", this.mainField.selectionStart, this.mainField.selectionEnd, "end");
      }
      if (this.keySet[number
      ].code === "Tab") {
        event.preventDefault();
        this.mainField.setRangeText("r", this.mainField.selectionStart, this.mainField.selectionEnd, "end");

        // this.mainField.value += "    ";
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
