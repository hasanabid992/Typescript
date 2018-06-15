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
var Student_info = /** @class */ (function () {
    function Student_info() {
    }
    Student_info.prototype.setS_Info = function () {
        this.Name = prompt('Enter Your Name');
        this.FatherName = prompt('Enter Your Father Name');
        this.Class = +prompt('Enter Your Current Class');
        this.LastClass = +prompt('Enter Your Last Class');
        this.LastPassing = +prompt('Enter Your Last Passing Marks');
        this.Rollno = +prompt('Enter Your Roll No');
    };
    Student_info.prototype.getS_info = function () {
        console.log("Your Name is : " + this.Name);
        console.log("Your Father Name is : " + this.FatherName);
        console.log("Your Class is " + this.Class);
        console.log("Your LastClass is : " + this.LastClass);
        console.log("Your RollNo : " + this.Rollno);
        console.log("Your LastPassing Score is : " + this.LastPassing);
    };
    return Student_info;
}());
var admission = /** @class */ (function (_super) {
    __extends(admission, _super);
    function admission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    admission.prototype.setadmiss = function () {
        this.AdmissionFees = 5000;
        this.ExtracirculumFee = 3000;
        this.Gamefee = 1400;
        this.MothlyFees = 2000;
    };
    admission.prototype.getadmiss = function () {
        console.log("Admission Fee is : " + this.AdmissionFees);
        console.log("Extracirculum Fee is: " + this.ExtracirculumFee);
        console.log("Game Fee is :" + this.Gamefee);
        console.log("Monthly Fee is : " + this.MothlyFees);
    };
    return admission;
}(Student_info));
var marks = /** @class */ (function (_super) {
    __extends(marks, _super);
    function marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    marks.prototype.setmark = function () {
        this.English = +prompt('Enter Your English Marks');
        this.Physics = +prompt('Enter Your Physics Marks');
    };
    marks.prototype.getmark = function () {
        if (this.Physics < 30 && this.English < 30) {
            console.log("" + alert('You Failed'));
        }
        else {
            console.log('Congraz you passed');
        }
    };
    return marks;
}(admission));
// let stdinfo = new Student_info();
var Student = new marks();
Student.setS_Info();
Student.setmark();
Student.setadmiss();
Student.getadmiss();
Student.getmark();
Student.getS_info();
