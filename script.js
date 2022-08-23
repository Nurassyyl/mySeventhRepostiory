'use strict';

const header = document.querySelector(".header");

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.create = function () {
        if(this.selector[0] == ".") {
            const div = document.createElement("div");
            div.classList.add(this.selector.substring(1));
            div.style.height = this.height + "px";
            div.style.width = this.width + "px";
            div.style.backgroundColor = this.bg;
            div.style.fontSize = this.fontSize + "px";
            div.textContent = "Hello World";
            header.append(div);
            console.log(div);
        } else if  (this.selector[0] == "#") {
            const id = document.createElement("id");
            id.id = this.selector.substring(1);
            id.style.height = this.height + "px";
            id.style.width = this.width + "px";
            id.style.backgroundColor = this.bg;
            id.style.fontSize = this.fontSize + "px";
            id.textContent = "15 Задания";
            header.append(id);
            console.log(id);
        } else {
            return false;
        }
    }
}

const domElement1 = new DomElement(".arman", 100, 100, "blue", 20);

domElement1.create();
