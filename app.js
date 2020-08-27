'use strict';

//------------------------------------------------------------------
// APP INITIALIZATION
//------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const { GoogleSheetsCMS } = require('jovo-cms-googlesheets');


const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
    new GoogleSheetsCMS()
);


//------------------------------------------------------------------
 //APP LOGIC
 //------------------------------------------------------------------

const LowestPrice_Statement = 9;
const LowestPrice=7;
//--------------------------------------
const MotoX4_row= 1;    
const MotoZ4_row= 2;    
const MotoG8_row= 3;
const iPhone11Pro_row= 4;   
const iPhone11_row= 5;  
const iPhoneXR= 6;
const OnePlus7T_row= 7;     
const OnePlus7TPro_row= 8; 
 const OnePlus6T_row= 9;
const Redmi7_row= 10;     
const Redmi7A_row= 11;     
const Redmi8A_row= 12;
const GalaxyS9_row= 13;
const GalaxyS10_row= 14;
const GalaxyNote10_row= 15;
const GalaxyA8_row= 16;

//-------------------------------------

const Price = 2;
const Sdiscount = 5;
const Swarranty = 4;


const Mdisplay = 3;
const Mbattery = 4;
const Mram = 5;
const Mfrontcamera = 6;
const Mbackcamera = 7;
const Minternal = 8;
const Mcolours = 9;
const Moperatinsystem = 10;
const Mcompanywarranty = 11;
const Mcustomer = 12;

//-------------------------------------

const Answer = 1;
 const min = 1;
 const max = 10;


 function RandomSpeech(x){
    let speech = ' ';
    if (x == '1')
      speech = 'You can also ask me for customer rating of a particular mobile phone';

    else if (x == '2')
      speech = 'You can also ask me about shop warranty on different mobile phones offered by different phones'; 

    else if (x == '3')
      speech = 'You can also ask me about Front and Back Camera detials of different mobile phones'; 

    else if (x == '4')
      speech = 'You can also get to know the battery life of any phone using the "battery life of" command'; 

    else if (x == '5')
      speech = 'You can also ask me about discount and offers available in different stores on different phones'; 

else if (x == '6')
      speech = 'Get the list of available phones of a particular company by "Suggest company name phones" command'; 

    else if (x == '7')
      speech = 'The "display of" intent will let you know the display details of phones available'; 

else if (x == '8')
      speech = 'Get to know the battery life of available phones using the "battery life of" command'; 

    else if (x == '9')
      speech = 'You can also ask be about the internal storage of available mobile phones'; 

else if (x == '10')
      speech = 'What more would you like to know'; 


    else
      speech = 'Hmmm Ask me something else';

    return speech;

 }





app.setHandler({
    LAUNCH() {
        let speech = "Welcome to Mobile Compare, one place to get all your mobile related questions answered. You can proceed by asking me questions and if there is any error you can always run the help command.";
        console.log();
        this.ask(speech);
    },

//-------------------------------------------------------------------------------------------

    Unhandled(){
        console.log();
        let speech = "Query not recognized, please run the help command by saying 'help' to know more about the commands that you can run";
        this.ask(speech);
    },

//-------------------------------------------------------------------------------------------


LowestPriceIntent() {

    console.log();
   let speech = this.$inputs.mobile_name.value;
   let id = this.$inputs.mobile_name.id;
    let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);

    if (id === 't') {
        
        let speech = "this is test slot";
        this.ask(speech);
    

    }  else if (id == 'SGA8') {

          if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[GalaxyA8_row][LowestPrice_Statement + '....' + question]);
    

    }  else if (id =='SGN10') {

       if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[GalaxyNote10_row][LowestPrice_Statement] + '....' + question);
    

    } else if (id =='SGS10') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[GalaxyS10_row][LowestPrice_Statement] + '....' + question);

    }  else if (id == 'SGS9') {

         if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[GalaxyS9_row][LowestPrice_Statement] + '....' + question);

    } else if (id =='R8A') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[Redmi8A_row][LowestPrice_Statement] + '....' + question);;

    } else if (id =='R7A') {

         if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[Redmi7A_row][LowestPrice_Statement] + '....' + question);

    }   else if (id == 'R7') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[Redmi7_row][LowestPrice_Statement] + '....' + question);

    } else if (id =='OP6T') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[OnePlus6T_row][LowestPrice_Statement] + '....' + question);

    } else if (id =='OP7TP') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[OnePlus7TPro_row][LowestPrice_Statement] + '....' + question);

    } else if (id == 'OP7T') {

     if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[OnePlus7T_row][LowestPrice_Statement] + '....' + question);

    }   else if (id == 'IXR') {

         if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[iPhoneXR][LowestPrice_Statement] + '....' + question);

    } else if (id == 'I11') {

      if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[iPhone11_row][LowestPrice_Statement] + '....' + question);

    } else if (id == 'I11P') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[iPhone11Pro_row][LowestPrice_Statement] + '....' + question);


    } else if (id == 'MG8') {

         if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[MotoG8_row][LowestPrice_Statement] + '....' + question);

    } else if (id == 'MZ4') {

       if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[MotoZ4_row][LowestPrice_Statement] + '....' + question);

    } else if (id == 'MX4') {

        if(LowestPrice == '999999'){
            let speech = 'This model isnt currently available, please search for an another model';
            this.ask(speech);
        } else
            this.ask(this.$cms.Cheap[MotoX4_row][LowestPrice_Statement] + '....' + question);
    }   else {

    let speech= "Else loop";
    this.ask(speech);
}
    },


CustomerReviewIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Mcustomer] + ' out of 5 ' +  '....' + question);
           }

else if (id == 'SGN10')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Mcustomer] + ' out of 5 ');
           }
else if (id == 'SGS10')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Mcustomer] + ' out of 5 ' +  '....' + question);
           }
else if (id == 'SGS9')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Mcustomer] + ' out of 5 ');
           }
else if (id == 'R8A')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Mcustomer] + ' out of 5 ' + '....' + question);
           }
else if (id == 'R7A')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Mcustomer] + ' out of 5 ');
           }
else if (id == 'R7')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Mcustomer] + ' out of 5 ' + '....' + question);
           }
else if (id == 'OP6T')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Mcustomer] + ' out of 5 ');
           }
else if (id == 'OP7TP')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mcustomer] + ' out of 5 ' + '....' + question);
           }
else if (id == 'OP7T')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Mcustomer] + ' out of 5 ');
           }
else if (id == 'IXR')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Mcustomer] + ' out of 5 ' + '....' + question);
           }
else if (id == 'I11')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Mcustomer] + ' out of 5 ');
           }
else if (id == 'I11P')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Mcustomer] + ' out of 5 ' + '....' + question);
           }
else if (id == 'MG8')
           {
this.ask('Customer rating of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Mcustomer] + ' out of 5 ');
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},


//-----------------------------------------------------------------------------------------

BatteryIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Mbattery] + ' M.A.H ');
           }

else if (id == 'SGN10')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Mbattery] + ' M.A.H ' + '....' + question);
           }
else if (id == 'SGS10')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Mbattery] + ' M.A.H ');
           }
else if (id == 'SGS9')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Mbattery] + ' M.A.H ' + '....' + question);
           }
else if (id == 'R8A')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Mbattery] + ' M.A.H ');
           }
else if (id == 'R7A')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Mbattery] + ' M.A.H ' + '....' + question);
           }
else if (id == 'R7')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Mbattery] + ' M.A.H ');
           }
else if (id == 'OP6T')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Mbattery] + ' M.A.H '+ '....' + question);
           }
else if (id == 'OP7TP')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mbattery] + ' M.A.H ');
           }
else if (id == 'OP7T')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Mbattery] + ' M.A.H ' + '....' + question);
           }
else if (id == 'IXR')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Mbattery] + ' M.A.H ');
           }
else if (id == 'I11')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Mbattery] + ' M.A.H ' + '....' + question);
           }
else if (id == 'I11P')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Mbattery] + ' M.A.H ');
           }
else if (id == 'MG8')
           {
this.ask('Battery of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Mbattery] + ' M.A.H ' + '....' + question);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},

//----------------------------------------------------------------------------------------

RamIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Mram] + ' GB ' + '....' + question);
           }

else if (id == 'SGN10')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Mram] + ' GB ');
           }
else if (id == 'SGS10')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Mram] + ' GB ' + '....' + question);
           }
else if (id == 'SGS9')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Mram] + ' GB ');
           }
else if (id == 'R8A')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Mram] + ' GB ' + '....' + question);
           }
else if (id == 'R7A')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Mram] + ' GB ');
           }
else if (id == 'R7')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Mram] + ' GB ' + '....' + question);
           }
else if (id == 'OP6T')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Mram] + ' GB ');
           }
else if (id == 'OP7TP')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mram] + ' GB ' + '....' + question);
           }
else if (id == 'OP7T')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Mram] + ' GB ');
           }
else if (id == 'IXR')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Mram] + ' GB ' + '....' + question);
           }
else if (id == 'I11')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Mram] + ' GB ');
           }
else if (id == 'I11P')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Mram] + ' GB '+ '....' + question);
           }
else if (id == 'MG8')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Mram] + ' GB ');
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},


//-------------------------------------------------------------------------------------

InternalStorageIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Minternal] + ' GB ');
           }

else if (id == 'SGN10')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Minternal] + ' GB ' + '....' + question);
           }
else if (id == 'SGS10')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Minternal] + ' GB ');
           }
else if (id == 'SGS9')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Minternal] + ' GB ' + '....' + question);
           }
else if (id == 'R8A')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Minternal] + ' GB ');
           }
else if (id == 'R7A')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Minternal] + ' GB ' + '....' + question);
           }
else if (id == 'R7')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Minternal] + ' GB ');
           }
else if (id == 'OP6T')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Minternal] + ' GB ' + '....' + question);
           }
else if (id == 'OP7TP')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Minternal] + ' GB ');
           }
else if (id == 'OP7T')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Minternal] + ' GB ' + '....' + question);
           }
else if (id == 'IXR')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Minternal] + ' GB ');
           }
else if (id == 'I11')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Minternal] + ' GB ' + '....' + question);
           }
else if (id == 'I11P')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Minternal] + ' GB ');
           }
else if (id == 'MG8')
           {
this.ask('Internal storage of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Minternal] + ' GB ' + '....' + question);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},

//------------------------------------------------------------------------------------

FrontCameraIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Front camera of  ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }

else if (id == 'SGN10')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Mfrontcamera] + ' mega pixel ');
           }
else if (id == 'SGS10')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'SGS9')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Mfrontcamera] + ' mega pixel ');
           }
else if (id == 'R8A')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'R7A')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Mfrontcamera] + ' mega pixel ');
           }
else if (id == 'R7')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'OP6T')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Mfrontcamera] + ' mega pixel ');
           }
else if (id == 'OP7TP')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'OP7T')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Mfrontcamera] + ' mega pixel ');
           }
else if (id == 'IXR')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'I11')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'I11P')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Mfrontcamera] + ' mega pixel ');
           }
else if (id == 'MG8')
           {
this.ask('Front camera of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Mfrontcamera] + ' mega pixel ' + '....' + question);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},

//-------------------------------------------------------------------------------


BackCameraIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Mbackcamera] + ' mega pixel ');
           }

else if (id == 'SGN10')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'SGS10')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Mbackcamera] + ' mega pixel ');
           }
else if (id == 'SGS9')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'R8A')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Mbackcamera] + ' mega pixel ');
           }
else if (id == 'R7A')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'R7')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Mbackcamera] + ' mega pixel ');
           }
else if (id == 'OP6T')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'OP7TP')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mbackcamera] + ' mega pixel ');
           }
else if (id == 'OP7T')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'IXR')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Mbackcamera] + ' mega pixel ');
           }
else if (id == 'I11')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
else if (id == 'I11P')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Mbackcamera] + ' mega pixel ');
           }
else if (id == 'MG8')
           {
this.ask('Back camera of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Mbackcamera] + ' mega pixel ' + '....' + question);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},


//-----------------------------------------------------------------------------------

ColoursAvailableIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[GalaxyA8_row][Mcolours] + '....' + question);
           }

else if (id == 'SGN10')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[GalaxyNote10_row][Mcolours]);
           }
else if (id == 'SGS10')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[GalaxyS10_row][Mcolours] + '....' + question);
           }
else if (id == 'SGS9')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[GalaxyS9_row][Mcolours] + '....' + question);
           }
else if (id == 'R8A')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[Redmi8A_row][Mcolours]);
           }
else if (id == 'R7A')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[Redmi7A_row][Mcolours] + '....' + question);
           }
else if (id == 'R7')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[Redmi7_row][Mcolours]);
           }
else if (id == 'OP6T')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[OnePlus6T_row][Mcolours] + '....' + question);
           }
else if (id == 'OP7TP')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mcolours]);
           }
else if (id == 'OP7T')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[OnePlus7T_row][Mcolours] + '....' + question);
           }
else if (id == 'IXR')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[iPhoneXR_row][Mcolours]);
           }
else if (id == 'I11')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[iPhone11_row][Mcolours] + '....' + question);
           }
else if (id == 'I11P')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[iPhone11Pro_row][Mcolours]);
           }
else if (id == 'MG8')
           {
this.ask('Available colours of ' + val + ' are ' + this.$cms.Mobile_details[MotoG8_row][Mcolours] + '....' + question);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},

//--------------------------------------------------------------------------------------


OperatingSystemIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Moperatinsystem]);
           }

else if (id == 'SGN10')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Moperatinsystem] + '....' + question);
           }
else if (id == 'SGS10')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Moperatinsystem]);
           }
else if (id == 'SGS9')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Moperatinsystem]  + '....' + question);
           }
else if (id == 'R8A')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Moperatinsystem]);
           }
else if (id == 'R7A')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Moperatinsystem] + '....' + question);
           }
else if (id == 'R7')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Moperatinsystem]);
           }
else if (id == 'OP6T')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Moperatinsystem] + '....' + question);
           }
else if (id == 'OP7TP')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Moperatinsystem]);
           }
else if (id == 'OP7T')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Moperatinsystem] + '....' + question);
           }
else if (id == 'IXR')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Moperatinsystem]);
           }
else if (id == 'I11')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Moperatinsystem] + '....' + question);
           }
else if (id == 'I11P')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Moperatinsystem]);
           }
else if (id == 'MG8')
           {
this.ask('Operating system of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Moperatinsystem] + '....' + question);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},


//------------------------------------------------------------------------------------


CompanyWarrantyIntent() {
            console.log();
            let val = this.$inputs.mobile_name.value;
            let id = this.$inputs.mobile_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'SGA8')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyA8_row][Mcompanywarranty] + '....' + question);
           }

else if (id == 'SGN10')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyNote10_row][Mcompanywarranty]);
           }
else if (id == 'SGS10')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS10_row][Mcompanywarranty] + '....' + question);
           }
else if (id == 'SGS9')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[GalaxyS9_row][Mcompanywarranty]);
           }
else if (id == 'R8A')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[Redmi8A_row][Mcompanywarranty] + '....' + question);
           }
else if (id == 'R7A')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7A_row][Mcompanywarranty]);
           }
else if (id == 'R7')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[Redmi7_row][Mcompanywarranty] + '....' + question);
           }
else if (id == 'OP6T')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus6T_row][Mcompanywarranty]);
           }
else if (id == 'OP7TP')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7TPro_row][Mcompanywarranty] + '....' + question);
           }
else if (id == 'OP7T')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[OnePlus7T_row][Mcompanywarranty]);
           }
else if (id == 'IXR')
           {
this.ask('RAM of ' + val + ' is ' + this.$cms.Mobile_details[iPhoneXR_row][Mcompanywarranty] + '....' + question);
           }
else if (id == 'I11')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11_row][Mcompanywarranty]);
           }
else if (id == 'I11P')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[iPhone11Pro_row][Mcompanywarranty] + '....' + question);
           }
else if (id == 'MG8')
           {
this.ask('Company warranty of ' + val + ' is ' + this.$cms.Mobile_details[MotoG8_row][Mcompanywarranty]);
           }
 else {

    let speech= "Else loop";
    this.ask(speech);
}

},







//----------------------------------------------------------------------------------------

DiscountIntent(){
            console.log();
            let StoreName = this.$inputs.store_name.id;
            let id = this.$inputs.mobile_name.id;
            let val = this.$inputs.mobile_name.value;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);

            if(StoreName == 'Alpha')
            {
                    if (id == 'SGA8')
                    {   
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyA8_row][Sdiscount] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyNote10_row][Sdiscount] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyS10_row][Sdiscount] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyS9_row][Sdiscount] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[Redmi8A_row][Sdiscount] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[Redmi7A_row][Sdiscount] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[Redmi7_row][Sdiscount] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[OnePlus6T_row][Sdiscount] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[OnePlus7TPro_row][Sdiscount] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[OnePlus7T_row][Sdiscount] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[iPhoneXR][Sdiscount] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[iPhone11_row][Sdiscount] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[iPhone11Pro_row][Sdiscount] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[MotoG8_row][Sdiscount] );

                    }

            }

            else if (StoreName == 'Beta')
            {
                if (id == 'SGA8')
                    {   
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyA8_row][Sdiscount] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyNote10_row][Sdiscount] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyS10_row][Sdiscount] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyS9_row][Sdiscount] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[Redmi8A_row][Sdiscount] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[Redmi7A_row][Sdiscount] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[Redmi7_row][Sdiscount] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[OnePlus6T_row][Sdiscount] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[OnePlus7TPro_row][Sdiscount] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[OnePlus7T_row][Sdiscount] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[iPhoneXR][Sdiscount] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[iPhone11_row][Sdiscount] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[iPhone11Pro_row][Sdiscount] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[MotoG8_row][Sdiscount] );

                    }


            }

            else if (StoreName == 'Gamma')
            {

                if (id == 'SGA8')
                    {   
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyA8_row][Sdiscount] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyNote10_row][Sdiscount] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyS10_row][Sdiscount] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyS9_row][Sdiscount] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[Redmi8A_row][Sdiscount] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[Redmi7A_row][Sdiscount] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[Redmi7_row][Sdiscount] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[OnePlus6T_row][Sdiscount] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[OnePlus7TPro_row][Sdiscount] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[OnePlus7T_row][Sdiscount] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[iPhoneXR][Sdiscount] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[iPhone11_row][Sdiscount] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName +  'is ' + this.$cms.Gamma[iPhone11Pro_row][Sdiscount] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[MotoG8_row][Sdiscount] );

                    }

            }
            else if (StoreName == 'Delta')
            {   

                if (id == 'SGA8')
                    {   
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyA8_row][Sdiscount] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyNote10_row][Sdiscount] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyS10_row][Sdiscount] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyS9_row][Sdiscount] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[Redmi8A_row][Sdiscount] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[Redmi7A_row][Sdiscount] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[Redmi7_row][Sdiscount] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[OnePlus6T_row][Sdiscount] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[OnePlus7TPro_row][Sdiscount] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[OnePlus7T_row][Sdiscount] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[iPhoneXR][Sdiscount] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[iPhone11_row][Sdiscount] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[iPhone11Pro_row][Sdiscount] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Additional discount on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[MotoG8_row][Sdiscount] );

                    }

            }
            else 
            {
                this.ask('store name else loop');
            }

    },

//-------------------------------------------------------------------------------------------

ShopwiseWarrantyIntent(){
            console.log();
            let StoreName = this.$inputs.store_name.id;
            let id = this.$inputs.mobile_name.id;
            let val = this.$inputs.mobile_name.value;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);

            if(StoreName == 'Alpha')
            {
                    if (id == 'SGA8')
                    {   
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[GalaxyA8_row][Swarranty] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[GalaxyNote10_row][Swarranty] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[GalaxyS10_row][Swarranty] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[GalaxyS9_row][Swarranty] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[Redmi8A_row][Swarranty] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[Redmi7A_row][Swarranty] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[Redmi7_row][Swarranty] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[OnePlus6T_row][Swarranty] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[OnePlus7TPro_row][Swarranty] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[OnePlus7T_row][Swarranty] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[iPhoneXR][Swarranty] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[iPhone11_row][Swarranty] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[iPhone11Pro_row][Swarranty] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Alpha[MotoG8_row][Swarranty] );

                    }

            }

            else if (StoreName == 'Beta')
            {
                if (id == 'SGA8')
                    {   
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[GalaxyA8_row][Swarranty] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[GalaxyNote10_row][Swarranty] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[GalaxyS10_row][Swarranty] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[GalaxyS9_row][SSwarranty] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[Redmi8A_row][Swarranty] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[Redmi7A_row][Swarranty] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[Redmi7_row][Swarranty] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[OnePlus6T_row][Swarranty] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[OnePlus7TPro_row][Swarranty] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[OnePlus7T_row][Swarranty] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[iPhoneXR][Swarranty] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[iPhone11_row][Swarranty] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[iPhone11Pro_row][Swarranty] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Beta[MotoG8_row][Swarranty] );

                    }


            }

            else if (StoreName == 'Gamma')
            {

                if (id == 'SGA8')
                    {   
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[GalaxyA8_row][Swarranty] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[GalaxyNote10_row][Swarranty] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[GalaxyS10_row][Swarranty] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[GalaxyS9_row][Swarranty] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[Redmi8A_row][Swarranty] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[Redmi7A_row][Swarranty] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[Redmi7_row][Swarranty] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[OnePlus6T_row][Swarranty] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[OnePlus7TPro_row][Swarranty] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[OnePlus7T_row][Swarranty] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[iPhoneXR][Swarranty] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[iPhone11_row][Swarranty] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName +  'is ' + this.$cms.Gamma[iPhone11Pro_row][Swarranty] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Gamma[MotoG8_row][Swarranty] );

                    }

            }
            else if (StoreName == 'Delta')
            {   

                if (id == 'SGA8')
                    {   
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyA8_row][Swarranty] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyNote10_row][Swarranty] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyS10_row][Swarranty] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[GalaxyS9_row][Swarranty] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[Redmi8A_row][Swarranty] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[Redmi7A_row][Swarranty] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[Redmi7_row][Swarranty] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[OnePlus6T_row][Swarranty] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[OnePlus7TPro_row][Swarranty] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[OnePlus7T_row][Swarranty] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[iPhoneXR][Swarranty] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[iPhone11_row][Swarranty] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[iPhone11Pro_row][Swarranty] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Shop warranty on ' + val + ' in store ' + StoreName + ' is ' + this.$cms.Delta[MotoG8_row][Swarranty] );

                    }

            }
            else 
            {
                this.ask('store name else loop');
            }

    },


//-------------------------------------------------------------------------------------------

    StorewisePriceIntent(){
            console.log();
            let StoreName = this.$inputs.store_name.id;
            let id = this.$inputs.mobile_name.id;
            let val = this.$inputs.mobile_name.value;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);

            if(StoreName == 'Alpha')
            {
                    if (id == 'SGA8')
                    {   
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyA8_row][Price] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyNote10_row][Price] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyS10_row][Price] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[GalaxyS9_row][Price] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[Redmi8A_row][Price] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[Redmi7A_row][Price] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[Redmi7_row][Price] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[OnePlus6T_row][Price] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[OnePlus7TPro_row][Price] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[OnePlus7T_row][Price] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[iPhoneXR][Price] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[iPhone11_row][Price] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[iPhone11Pro_row][Price] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Alpha[MotoG8_row][Price] );

                    }

            }

            else if (StoreName == 'Beta')
            {
                if (id == 'SGA8')
                    {   
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyA8_row][Price] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyNote10_row][Price] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyS10_row][Price] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[GalaxyS9_row][Price] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[Redmi8A_row][Price] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[Redmi7A_row][Price] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[Redmi7_row][Price] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[OnePlus6T_row][Price] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[OnePlus7TPro_row][Price] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[OnePlus7T_row][Price] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[iPhoneXR][Price] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[iPhone11_row][Price] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[iPhone11Pro_row][Price] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Beta[MotoG8_row][Price] );

                    }


            }

            else if (StoreName == 'Gamma')
            {

                if (id == 'SGA8')
                    {   
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyA8_row][Price] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyNote10_row][Price] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyS10_row][Price] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[GalaxyS9_row][Price] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[Redmi8A_row][Price] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[Redmi7A_row][Price] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[Redmi7_row][Price] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[OnePlus6T_row][Price] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[OnePlus7TPro_row][Price] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[OnePlus7T_row][Price] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[iPhoneXR][Price] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[iPhone11_row][Price] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[iPhone11Pro_row][Price] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Gamma[MotoG8_row][Price] );

                    }

            }
            else if (StoreName == 'Delta')
            {   

                if (id == 'SGA8')
                    {   
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[GalaxyA8_row][Price] );
                    }

                    else if (id == 'SGN10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[GalaxyNote10_row][Price] );

                    }
                    else if (id == 'SGS10')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[GalaxyS10_row][Price] );

                    }
                    else if (id == 'SGNS9')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[GalaxyS9_row][Price] );

                    }

                    else if (id == 'R8A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[Redmi8A_row][Price] );

                    }
                    else if (id == 'R7A')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[Redmi7A_row][Price] );

                    }
                    else if (id == 'R7')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[Redmi7_row][Price] );

                    }

                    else if (id == 'OP6T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[OnePlus6T_row][Price] );

                    }
                    else if (id == 'OP7TP')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[OnePlus7TPro_row][Price] );

                    }
                    else if (id == 'OP7T')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[OnePlus7T_row][Price] );

                    }

                    else if (id == 'IXR')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[iPhoneXR][Price] );

                    }
                    else if (id == 'I11')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[iPhone11_row][Price] );

                    }
                    else if (id == 'I11P')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[iPhone11Pro_row][Price] );

                    }
                    else if (id == 'MG8')
                    {
                        this.ask('Price of ' + val + ' in store ' + StoreName + 'is ' + this.$cms.Delta[MotoG8_row][Price] );

                    }

            }
            else 
            {
                this.ask('store name else loop');
            }

    },
//-----------------------------------------------------------------------------------------

RamRangeIntent() {
            console.log();
            let val = this.$inputs.ram_range.value;
            let id = this.$inputs.ram_range.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == '2')
            {
              this.ask('Phones with RAM greater than ' + val + ' are  ' + this.$cms.QueryAnswer[1][Answer]);
            }

           else if (id == '3')
            {
              this.ask('Phones with RAM greater than ' + val + ' are  ' + this.$cms.QueryAnswer[2][Answer]);
            }
           
           else if (id == '4')
           {
             this.ask('Phones with RAM greater than ' + val + ' are  ' + this.$cms.QueryAnswer[3][Answer]);
           }
           
            else if (id == '6')
           {
             this.ask('Phones with RAM greater than ' + val + ' are  ' + this.$cms.QueryAnswer[4][Answer]);

            }

 else {

    let speech= "Else loop";
    this.ask(speech);
}

},

//----------------------------------------------------------------------------------------

AvailableMobilePhoneIntent() {
            console.log();
            let val = this.$inputs.company_name.value;
            let id = this.$inputs.company_name.id;
                let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    let question = RandomSpeech(random);
           if (id == 'Samsung')
            {
              this.ask('Phones of ' + val + ' that are available are' + this.$cms.QueryAnswer[14][Answer] + '....' + question);
            }

           else if (id == 'Xiomi')
            {
              this.ask('Phones of ' + val + ' that are available are' + this.$cms.QueryAnswer[13][Answer] + '....' + question);
            }
           
              else if (id == 'OnePlus')
            {
              this.ask('Phones of ' + val + ' that are available are' + this.$cms.QueryAnswer[12][Answer] + '....' + question);
            }
           
              else if (id == 'Motorola')
            {
              this.ask('Phones of ' + val + ' that are available are' + this.$cms.QueryAnswer[10][Answer] + '....' + question);
            }

               else if (id == 'Apple')
            {
              this.ask('Phones of ' + val + ' that are available are' + this.$cms.QueryAnswer[11][Answer] + '....' + question);
            }

 else {

    let speech= "Else loop";
    this.ask(speech);
}

},

//----------------------------------------------------------------------------------------

});

module.exports.app = app;
