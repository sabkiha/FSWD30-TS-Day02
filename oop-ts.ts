class Menu {

	public items: Array<string>;
	public pages: number;

	constructor (item_list: Array<string>, total_pages: number) {
		this.items = item_list;
		this.pages = total_pages;
	}

	list(): void{
		document.getElementById("menu").innerHTML = "Our menu for today";

		for (var i = 0; i < this.items.length; ++i) {
			var newdiv = document.createElement("p");
			newdiv.appendChild(document.createTextNode(this.items[i]));
			document.body.appendChild(newdiv);
		}
	}
}

var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);

sundayMenu.list();

class HappyMeal extends Menu {
	
	constructor(item_list: Array<string>, total_pages: number) {
		super(item_list, total_pages);
	}

	list(): void {
		for (var i = 0; i < this.items.length; ++i) {
			var newdiv = document.createElement("p");
			newdiv.appendChild(document.createTextNode(this.items[i]));
			document.body.appendChild(newdiv);
		}
	}
}

	var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
	menu_for_children.list();


