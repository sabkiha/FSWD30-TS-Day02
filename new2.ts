import {Cars} from './new'

var Hundai: Cars = new Cars("Hundai", 2014, 260);

var priceHundai = Hundai.getPrice();

(<any>document).write(priceHundai);

