
function saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
        function (e) {
            alert(atob(e.data));
        });
}

function loadDocument() {
    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa('<strong>Test</strong>'));
}

function saveTextAsFile (data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    var blob = new Blob([data], {type: 'text/plain'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    // FOR IE:
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        var e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
            e.initEvent('click', true, false, window,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
    }
}


function expFile(texto) {
    var fileText = texto;
    var fileName = "newfile001.txt"
    saveTextAsFile(fileText, fileName);
}
