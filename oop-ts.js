var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        document.getElementById("menu").innerHTML = "Our menu for today";
        for (var i = 0; i < this.items.length; ++i) {
            var newdiv = document.createElement("p");
            newdiv.appendChild(document.createTextNode(this.items[i]));
            document.body.appendChild(newdiv);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
sundayMenu.list();
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    function HappyMeal(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    HappyMeal.prototype.list = function () {
        for (var i = 0; i < this.items.length; ++i) {
            var newdiv = document.createElement("p");
            newdiv.appendChild(document.createTextNode(this.items[i]));
            document.body.appendChild(newdiv);
        }
    };
    return HappyMeal;
}(Menu));
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
menu_for_children.list();
