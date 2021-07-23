document.addEventListener('copy', function (e) {
    // either way, stop propagation. Fuck you TODAY
    e.stopPropagation();

    navigator.clipboard.readText().then(text => {
        if (!text.includes("Read more at ")) {
            return;
        }
        let re = /(.*)\nRead more at.*/;
        let match = re.exec(text);
        navigator.clipboard.writeText(match[1]).then(_ => {
            console.log('done');
        })
    })
})
