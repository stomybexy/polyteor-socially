
(function () {
        'use strict';

        Polymer({
                is: 'parties-list',

                properties: {
                    parties: Array
            },
            ready: function(){
              let x = 2;
              setTimeout(()=>{
                console.log('Parties ready!');
              }, 10)
            }
        });
})();
