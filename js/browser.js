function appBrowse(url) {
         var ref = window.open(url, '_blank', 'location=yes');
         ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
         ref.addEventListener('exit', function() { alert(event.type); });
    }