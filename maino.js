function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ETFEdeebn/model.json", h)
}
    function h(){
console.log("ml5");
classifier.classify(w);
    }
function w(error,result){
 if(error){
console.log(error);
 }
    else{
        console.log(result);
        document.getElementById("result_label").innerHTML=result[0].label;
        document.getElementById("result_confidence").innerHTML=result[0].confidence;

        if (result[0].label="Ruido de fondo"){
document.getElementById("c").src="c1.gif";
document.getElementById("cu").src="cu.png";
document.getElementById("t").src="t.png";
document.getElementById("h").src="h.png";



        }
       else if(result[0].label="lapix"){
            document.getElementById("c").src="c.png";
            document.getElementById("cu").src="cu1.gif";
            document.getElementById("t").src="t.png";
            document.getElementById("h").src="h.png";
            
            
            
                    
                }
                else if(result[0].label="xd"){
                    document.getElementById("c").src="c.png";
                    document.getElementById("cu").src="cu.png";
                    document.getElementById("t").src="t1.gif";
                    document.getElementById("h").src="h.png";
                    
                    
                    
                            }
                            
                        else{
                                document.getElementById("c").src="c.png";
                                document.getElementById("cu").src="cu.png";
                                document.getElementById("t").src="t.png";
                                document.getElementById("h").src="h1.gif";
                                
                        }  
                    }}