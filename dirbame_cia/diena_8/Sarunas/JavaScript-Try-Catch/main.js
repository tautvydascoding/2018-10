console.log(   "Labas"  );



               var a = 100;
               try {
                  if ( a > 50);
                  throw( "Del tokio kiekio kreptis telefonu" );
               }

               catch ( e ) {
                  alert("Error: " + e );
               }
               finally {
                 console.log("suveiksiu bet kada");
               }
