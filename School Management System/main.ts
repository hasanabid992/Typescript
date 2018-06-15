
class Student_info {
   
   private Name:string;
   private FatherName:string;
   private Class:number;
   private LastPassing:number;
   private LastClass:number;
   private Rollno:number;
    
        setS_Info(){
         
          this.Name=prompt('Enter Your Name');
          this.FatherName=prompt('Enter Your Father Name');
          this.Class=+prompt('Enter Your Current Class');
          this.LastClass=+prompt('Enter Your Last Class');
          this.LastPassing=+prompt('Enter Your Last Passing Marks');
          this.Rollno=+prompt('Enter Your Roll No');
    }

    getS_info(){
        
        console.log("Your Name is : " + this.Name);
        console.log("Your Father Name is : " + this.FatherName);
        console.log("Your Class is " + this.Class);
        console.log("Your LastClass is : " + this.LastClass);
        console.log("Your RollNo : " +this.Rollno);
        console.log("Your LastPassing Score is : " +this.LastPassing);


    }
    
}

class admission extends Student_info {

      private AdmissionFees:number;
      private MothlyFees:number;
      private ExtracirculumFee:number;
      private Gamefee:number;

     setadmiss(){
       this.AdmissionFees=5000;
       this.ExtracirculumFee=3000;
       this.Gamefee=1400;
       this.MothlyFees=2000;

     }

     getadmiss(){
       console.log("Admission Fee is : " +this.AdmissionFees);
       console.log("Extracirculum Fee is: " +this.ExtracirculumFee);
       console.log("Game Fee is :" +this.Gamefee);
       console.log("Monthly Fee is : "+this.MothlyFees);
     }
}

class marks extends admission {
  
    private English:number;
    private Physics:number;
  
  
    setmark()
    {
         this.English=+prompt('Enter Your English Marks');
         this.Physics=+prompt('Enter Your Physics Marks');

    }

    getmark(){
               
               if(this.Physics < 30 && this.English < 30)
               {
                 console.log(`${alert('You Failed')}`);
               }
               else {
                 console.log('Congraz you passed');
               }
 
           }   
}
 // let stdinfo = new Student_info();
 let Student : marks = new marks();

 Student.setS_Info();
 Student.setmark();
 Student.setadmiss();

 Student.getadmiss();
 Student.getmark();
 Student.getS_info();



  
  