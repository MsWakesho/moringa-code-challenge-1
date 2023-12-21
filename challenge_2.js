function speedDetector(){
   
    let carSpeed = parseFloat(prompt(`Enter the car\s speed`));

    let speedLimit = 70 ; 

    let demeritPointPer5Km = 1;
  
    let demeritPointLimit = 12 ;

    if(carSpeed <= speedLimit){
        return "Ok";
    } else {

        let demeritPoint = Math.floor((carSpeed - speedLimit) / 5);

        if(demeritPoint < demeritPointLimit){

           return `Points : ${demeritPoint}`;
    
        }else if(demeritPoint >= demeritPointLimit){
           return 'License Suspended'
        }
    
    }

}

console.log(speedDetector())









