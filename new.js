var Cars = /** @class */ (function () {
    function Cars(name, model, speed) {
        this.name = name;
        this.model = model;
        this.speed = speed;
    }
    Cars.prototype.getPrice = function () {
        return (this.model * this.speed) + 1000;
    };
    return Cars;
}());
var Kia = new Cars("Kia", 2017, 250);
var priceforKia = Kia.getPrice();
document.write(priceforKia);
