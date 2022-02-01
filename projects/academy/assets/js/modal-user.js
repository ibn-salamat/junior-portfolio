        // Modal user settings
        let btnOpenUserSettings = document.getElementById('open-modal-form');
        let userSettings = document.querySelector('.modal-form-wrap');
        let btnCloseUserSettings = document.getElementById('close-modal-form');


        let content = document.getElementById('content');
        
        btnOpenUserSettings.addEventListener('click', function(){
            userSettings.classList.add('active');
            document.body.classList.add('overflowHidden');


        })

        btnCloseUserSettings.addEventListener('click', function(){
            userSettings.classList.remove('active');
            document.body.classList.remove('overflowHidden');
        })
