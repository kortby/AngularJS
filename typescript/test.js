var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Polygon = (function () {
    function Polygon(height) {
        this.height = height;
    }
    Polygon.prototype.computeArea = function () {
        return 0;
    };
    return Polygon;
})();
/**
 * tringle  extends Polygon
 */
var tringle = (function (_super) {
    __extends(tringle, _super);
    function tringle(height, base) {
        _super.call(this, height);
        this.base = base;
    }
    tringle.prototype.computeArea = function () {
        return .5 * this.base * this.height;
    };
    return tringle;
})(Polygon);
/**
 * Rectangular
 */
var Rectangular = (function (_super) {
    __extends(Rectangular, _super);
    function Rectangular(height, width) {
        _super.call(this, height);
        this.width = width;
    }
    Rectangular.prototype.computeArea = function () {
        return this.width * this.height;
    };
    return Rectangular;
})(Polygon);
/**
 * Square extends Rectangular
 */
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        _super.call(this, length, length);
    }
    return Square;
})(Rectangular);
