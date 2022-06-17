import "./scss/style.scss";
import ListSetKey from "./js/list";
import MyKey from "./js/key";
import MyKeyboard from "./js/keyboard";

const VirtualKeyboard = new MyKeyboard(MyKey, ListSetKey);

VirtualKeyboard.init();
VirtualKeyboard.setValue();
VirtualKeyboard.setEventListener();
