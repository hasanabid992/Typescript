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
var userinfo = /** @class */ (function () {
    function userinfo() {
    }
    userinfo.prototype.getprint = function () {
        this.name = prompt('Enter Your Name');
        this.fathername = prompt('Enter Your Father Name');
        this.yourClass = +prompt('Enter Class');
        this.unversityid = +prompt('Enter University');
    };
    userinfo.prototype.setprint = function () {
        console.log("Your Name " + this.name);
        console.log("Your Father Name " + this.fathername);
        console.log("Your Class " + this.yourClass);
        console.log("Your University Id " + this.unversityid);
    };
    return userinfo;
}());
var libary = /** @class */ (function (_super) {
    __extends(libary, _super);
    function libary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    libary.prototype.getlib = function () {
        this.DeptChoice = +prompt('Enter 1 for Computer Science 2 for Physics 3 for Chemistry');
        this.Dept = ['CS', 'BIO', 'Applied Phy', 'Applied Chemistry'];
        this.bookcollection = ['Physics', 'Chemistry', 'Zology', 'Botony'];
        if (this.DeptChoice === 1) {
            console.log("Your Department is", this.Dept[0]);
            console.log('Availble Books for Computer Science is', this.bookcollection[0]);
        }
        else if (this.DeptChoice === 2) {
            console.log("Your Department is", this.Dept[1]);
            console.log('Availble Books for Physics Department is', this.bookcollection[2]);
        }
        else if (this.DeptChoice === 3) {
            console.log("Your Department is", this.Dept[2]);
            console.log('Availble Books for Bio Department is', this.bookcollection[3]);
        }
        else {
            alert('Invalid');
        }
    };
    libary.prototype.setlib = function () {
    };
    return libary;
}(userinfo));
var show = new libary();
show.getprint();
show.setprint();
show.setlib();
show.getlib();
