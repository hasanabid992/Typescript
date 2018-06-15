var Student_info = (function () {
    function Student_info() {
    }
    Student_info.prototype.construtor = function (S) {
        var Name;
        var FatherName;
        var Class;
        var LastPassing;
        var LastClass;
        var Rollno;
    };
    Student_info.prototype.setS_Info = function () {
        this.Name = prompt('Enter Your Name');
        this.FatherName = prompt('Enter Your Father Name');
        this.Class = +prompt('Enter Your Current Class');
        this.LastClass = +prompt('Enter Your Last Class');
        this.LastPassing = +prompt('Enter Your Last Passing Marks');
        this.Rollno = +prompt('Enter Your Roll No');
    };
    Student_info.prototype.getS_info = function () {
        console.log(this.Name);
        console.log(this.FatherName);
        console.log(this.Class);
        console.log(this.LastClass);
        console.log(this.Rollno);
        console.log(this.LastPassing);
    };
    return Student_info;
}());
var stdinfo = new Student();
stdinfo.getS_info();
stdinfo.setS_Info();
