class Cars {
	name: string;
	model: number;
	speed: number;

	getPrice () {
		return (this.model*this.speed) + 1000;
	}

	constructor(name:string, model:number, speed:number) {
		this.name = name;
		this.model = model;
		this.speed = speed;
	}
}

var Kia: Cars = new Cars("Kia", 2017, 250);

var priceforKia = Kia.getPrice();

(<any>document).write(priceforKia);