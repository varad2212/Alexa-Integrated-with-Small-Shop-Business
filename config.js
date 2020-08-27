// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: true,
 
    intentMap: {
       'AMAZON.StopIntent': 'END',
    },
 
    db: {
         FileDb: {
             pathToFile: '../db/db.json',
         }
     },

 cms: {
        GoogleSheetsCMS: {
            spreadsheetId: '1ZjlrQYpKrQukxQq4UULmpj5XZlU2p_yk9d5ozobOecM',
            access: 'public',
            sheets: [
                {
                    name: 'Alpha',
                    position: 5
                },

                {
                    name: 'Beta',
                    position: 6
                },
              
                 {
             
                    name: 'Gamma',
                    position: 7
                },
                
                {
                    name: 'Delta',
                    position: 8
                },
                 
                {
                    name: 'Cheap',
                    position: 9
                },
                {
                    name: 'Mobile_details',
                    position: 10
                },
                {
                    name: 'QueryAnswer',
                    position: 14
                },


            ]
        }
    },
 };
 
 