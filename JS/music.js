const notes = ['A', 'Bb', 'B', "C",  'C#','D', 
'Eb', 'E','F','F#', 'G', 'Ab','a', 'Bb', 
'b', "c",  'C#','d', 'Eb', 'E','F','F#', 'G', 'Ab']


//create paragraphs for each scale.
 const ionian = document.querySelector('.one')
const dorian = document.querySelector('.Dorian')
const phrygian = document.querySelector('.Phrygian')
const lydian = document.querySelector('.Lydian')
const mixolydian = document.querySelector('.Mixolydian');
const aeolian = document.querySelector('.Aeolian')
const locrian = document.querySelector('.Locrian')



const mj7 = document.querySelector('.mj7');

const min7 = document.querySelector('.min7')
const min9 = document.querySelector('.min9');
const dom = document.querySelector('.dominant')
const aug = document.querySelector('.aug')
const sus = document.querySelector('.sus')
const diminished = document.querySelector('.diminished');

const rel = document.querySelector('.relDiv');
const button = document.querySelector('button');

button.addEventListener('click',RelativeMinor)


//scale event listeners
ionian.addEventListener('click',Ionian)

  phrygian.addEventListener('click', Phrygian)

dorian.addEventListener('click',Dorian)
lydian.addEventListener('click',Lydian)
mixolydian.addEventListener('click', Mixolydian)
aeolian.addEventListener('click', Aeolian)
locrian.addEventListener('click', Locrian)


mj7.addEventListener('click',Major7th)
min7.addEventListener('click', Minor7th)
min9.addEventListener('click', Minor9th)
dom.addEventListener('click', Dominant);
aug.addEventListener('click',Aug);
sus.addEventListener('click',Sus);
diminished.addEventListener('click', Diminished);

//functions//
 function getKey(){
   
  var  key = window.prompt("Enter a key");
    var Id = notes.indexOf(key)
    return Id;
}
     
    
    

    function Ionian(){
        var startId = getKey();
            var length = notes.length;
           var root = notes[startId];
            var second = notes[startId+2]
           var  fifth = notes[startId+7];
           var sixth = notes[startId+9];
           var fourth  = notes[startId +5]
           var  third = notes[startId+4];
           var seven = notes[startId+11];
            var fifthP = document.createElement('p');
             
        fifthP.textContent = `${root}  Ionian (regular major) scale is ${root}, ${second},${third}, ${fourth }, ${fifth}, ${sixth}, ${seven}`;
        ionian.append(fifthP);
          
         }
         


    function Dorian(){
        var startId = getKey();
            var length = notes.length;
           var root = notes[startId] 
            var second = notes[startId+2] 
           var  fifth = notes[startId+7];
           var sixth = notes[startId+9];
           var fourth  = notes[startId +5]
           var minthird = notes[startId+3];
           var flat7 = notes[startId+10];
            var P = document.createElement('p');
             
           dorian.append(P)
          P.textContent = `${root} Dorian scale is ${root}, ${second},${minthird}, ${fourth},${fifth }, ${sixth}, ${flat7}`;}
             
 
         
     
    
    
        

function Phrygian(){
    var startId = getKey();
        var length = notes.length;
       var root = notes[startId];
        var flatSecond = notes[startId+1]
       var  fifth = notes[startId+7];
       var minSix = notes[startId+8];
       var fourth  = notes[startId +5]
       var minthird = notes[startId+3];
       var flat7 = notes[startId+10];
      console.log(root + " Phrygian scale is " + root , flatSecond,minthird, fourth,fifth , minSix, flat7)
       var thirdP = document.createElement('p');
      thirdP.textContent = `${root}  Phrygian scale is ${root}, ${flatSecond},${minthird}, ${fourth,fifth }, ${minSix}, ${flat7}'`;
      phrygian.append(thirdP)
      console.log(thirdP)
 


    }

       
    function Lydian(){
        var startId = getKey();
            var length = notes.length;
           var root = notes[startId] ;
            var second = notes[startId+2]
           var  fifth = notes[startId+7];
           var sixth = notes[startId+9];
           var sharpEleventh  = notes[startId +6]
           var  third = notes[startId+4];
           var mj7 = notes[startId+11];
            var fourthP = document.createElement('p');
        fourthP.textContent = `${root }  Lydian scale is ${root}, ${second},${third}, ${sharpEleventh }, ${fifth}, ${sixth}, ${mj7}'`;
         lydian.append(fourthP);
          
         }
      console.log(lydian)
    
      function Mixolydian(){
        var startId = getKey();
            var length = notes.length;
           var root = notes[startId];
            var second = notes[startId+2]
           var  fifth = notes[startId+7];
           var sixth = notes[startId+9];
           var fourth  = notes[startId +5]
           var  third = notes[startId+4];
           var flat7 = notes[startId+10];
            var fifthP = document.createElement('p');
        fifthP.textContent = `${root}  Lydian scale is ${root}, ${second},${third}, ${fourth }, ${fifth}, ${sixth}, ${flat7}'`;
         mixolydian.append(fifthP);
          
         }
         
         function Aeolian(){
            var startId = getKey();
                var length = notes.length;
               var root = notes[startId];
                var second= notes[startId+2]
               var  fifth = notes[startId+7];
               var minSix = notes[startId+8];
               var fourth  = notes[startId +5]
               var minthird = notes[startId+3];
               var flat7 = notes[startId+10];
                var thirdP = document.createElement('p');
              thirdP.textContent = `${root}  Aeolian scale (regular Minor) is ${root}, ${second},${minthird}, ${fourth,fifth }, ${minSix}, ${flat7}`;
              aeolian.append(thirdP)
              
         
        
        
            }

            function Locrian(){
                var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
                    var second= notes[startId+1]
                   var  fifth = notes[startId+6];
                   var minSix = notes[startId+8];
                   var fourth  = notes[startId +5]
                   var minthird = notes[startId+3];
                   var flat7 = notes[startId+10];
                    var thirdP = document.createElement('p');
                  thirdP.textContent = `${root} Locrian scale is : ${root}, ${second},${minthird}, ${fourth,fifth }, ${minSix}, ${flat7}`;
                  locrian.append(thirdP)
                  
             
            
            
                }

                //chord functions
                function Major7th () {
                    var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
       
                   var fifth = notes[startId+7];
                   var third = notes[startId+4];
                   var seventh = notes[startId+11];

                   const P = document.createElement('p')
                  P.textContent = `${root} major 7th : ${root}, ${third},${fifth}, ${seventh}`;
                  mj7.append(P)
                }
                function Minor7th () {
                    var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
       
                   var fifth = notes[startId+7];
                   var third = notes[startId+3];
                   var seventh = notes[startId+10];

                   const P = document.createElement('p')
                  P.textContent = `${root} major 7th : ${root}, ${third},${fifth}, ${seventh}`;
                  min7.append(P)
                }
                 


                function Minor9th () {
                    var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
       
                   var fifth = notes[startId+7];
                   var third = notes[startId+3];
                   var nine = notes[startId+2];

                   const P = document.createElement('p')
                  P.textContent = `${root} major 9th : ${root}, ${third},${fifth}, ${nine}`;
                  min9.append(P)
                }
                function Dominant() {
                    var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
       
                   var fifth = notes[startId+7];
                   var third = notes[startId+4];
                   var seventh = notes[startId+10];

                   const P = document.createElement('p')
                  P.textContent = `${root} dominant : ${root}, ${third},${fifth}, ${seventh}`;
                 dom.append(P)
                }
                function Aug() {
                    var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
       
                   var fifth = notes[startId+8];
                   var third = notes[startId+4];
                   var seventh = notes[startId+10];

                   const P = document.createElement('p')
                  P.textContent = `${root} Augmented : ${root}, ${third},${fifth},  `;
                aug.append(P)
                }

                function Sus() {
                    var startId = getKey();
                    var length = notes.length;
                   var root = notes[startId];
       
                   var fifth = notes[startId+7];
                   var third = notes[startId+5];
                   var seventh = notes[startId+10];

                   const P = document.createElement('p')
                  P.textContent = `${root} Suspended : ${root}, ${third},${fifth},  `;
                sus.append(P)
                }


                
          function Diminished(){
            var startId = getKey();
                var length = notes.length;
               var root = notes[startId];
   
               var Flatfifth = notes[startId+6];
               var third = notes[startId+3];
               var seventh = notes[startId+9];
               const P = document.createElement('p')
               P.textContent = `${root} dimininshed : ${root}, ${third},${Flatfifth}, ${seventh}`;
               diminished.append(P)}

               function RelativeMinor(){
                var startId = getKey();
                    var length = notes.length;
                    var root =notes[startId];
                    var RM = notes[startId+9]
                    const P = document.createElement('p');
                    P.textContent = `${RM} is the relative minor of ${root}`
                     rel.append(P)
                }