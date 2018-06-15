class userinfo {

   public name:string;
   public fathername:string;
   public unversityid :number;
   public yourClass:number;

   getprint(){

   	this.name=prompt('Enter Your Name');
   	this.fathername=prompt('Enter Your Father Name');
   	this.yourClass=+prompt('Enter Class');
   	this.unversityid=+prompt('Enter University');
   }

   setprint(){
      console.log("Your Name " + this.name);
      console.log("Your Father Name " + this.fathername);
      console.log("Your Class " + this.yourClass);
      console.log("Your University Id " + this.unversityid);

   }
}

class libary extends userinfo {

     public bookcollection:string[];
     public bookpick:number;
     public DeptChoice:number;
     public Dept:string[];   
	
	getlib(){

		this.DeptChoice=+prompt('Enter 1 for Computer Science 2 for Physics 3 for Chemistry');
		this.Dept=['CS','BIO','Applied Phy','Applied Chemistry'];
        this.bookcollection=['Physics','Chemistry','Zology','Botony']
		if (this.DeptChoice === 1)
    	{
    		console.log("Your Department is", this.Dept[0]);
    		console.log('Availble Books for Computer Science is' ,this.bookcollection[0]);
    	}
    		else if (this.DeptChoice === 2)
    	{
    		console.log("Your Department is" ,this.Dept[1]);
    		console.log('Availble Books for Physics Department is' ,this.bookcollection[2]);
    	}
    	   else	if (this.DeptChoice === 3)
    	{
    		console.log("Your Department is" ,this.Dept[2]);
    		console.log('Availble Books for Bio Department is' ,this.bookcollection[3]);
    		
    	}
    	else {
    		alert('Invalid');
    	}

	}

    setlib(){
    	
    }


}


var show:libary = new libary();


show.getprint();
show.setprint();
show.setlib();
show.getlib();