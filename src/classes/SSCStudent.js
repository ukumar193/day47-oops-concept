class SSCStudent{
     constructor(name,engMarks,hinMarks,telMarks,matMarks,sciMarks,socMarks){
          console.log("Inside Student SSC constructor");
          console.log(name,engMarks,hinMarks,telMarks,matMarks,sciMarks,socMarks)
          this.name=name;      /**local variable */
          this.telMarks=telMarks;
          this.engMarks=engMarks;
          this.hinMarks=hinMarks;
          this.matMarks=matMarks;
          this.sciMarks=sciMarks;
          this.socMarks=socMarks;
     }
   calculateResult = ()=>{
     let passmarks =35;
     if(this.engMarks>= passmarks &&
        this.telMarks>= passmarks &&
        this.hinMarks>= passmarks &&
        this.socMarks>= passmarks &&
        this.matMarks>= passmarks &&
        this.socMarks>= passmarks 
     ){ 
          console.log(`${this.name} passed in ssc`)
     } else{
       console.log(`${this.name} failed in ssc`)
     }

   }

}
export default SSCStudent ;