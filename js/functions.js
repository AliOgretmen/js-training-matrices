/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */
 
"use strict";

Array.prototype.add = function add (mx){
    var matrix3 = [[], [], []];
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
            matrix3[i].push(this[i][j] + mx[i][j]);
        }
    }
    return matrix3;
};

Array.prototype.substract = function substract (mx){
     var matrix3 = [[], [], []];
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
            matrix3[i].push(this[i][j] - mx[i][j]);
        }
    }
    return matrix3;
};
Array.prototype.multiply = function multiply(mx){ 
    var matrix3 = [[], [], []];
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
            matrix3[i].push(this[i][j] * mx[j][i]);
        }
    }
    return matrix3;
};

Array.prototype.display = function display(){}
