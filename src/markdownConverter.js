function getTypeLine(line) {
    const levelHeader = (line.match(/#/g) || []).length;
    if (line.startsWith('#') && line[levelHeader] === ' ' && levelHeader <= 6) {
        return 'Header';
    } else if (line.startsWith('[!intro]: ')) {
        return 'Intro';
    } else if (line.startsWith('[!lore]: ')) {
        return 'Lore';
    } else if (line.startsWith('[!past]: ')) {
        return 'Past';
    } else if (line.startsWith('[!dial]: ')) {
        return 'Dial';
    } else if (line.startsWith('[!think]: ')) {
        return 'Think';
    } else {
        return 'Paragraph';
    }
}

function headerConvert(mdText) {
    const levelHeader = (mdText.match(/#/g) || []).length;
    const header = mdText.replace(/#/g, '');
    const lh = Math.min(levelHeader, 6);
    return `<h${lh}>${header}</h${lh}>`;
}

function loreConvert(mdText) {
    const lore = mdText.replace('[!lore]: ', '');
    return `<p class="lore">${lore}</p>`;
}

function introConvert(mdText) {
    const intro = mdText.replace('[!intro]: ', '');
    return `<p class="intro">${intro}</p>`;
}

function pastConvert(mdText) {
    let past = mdText.replace('[!past]: ', '');
    past = past.replace(/\n/g, '</br>');
    return `<p class="past">${past}</p>`;
}

function dialConvert(mdText) {
    let dial = mdText.replace('[!dial]: ', '');
    dial = dial.replace(/\n/g, '</br></br>');
    return `<p class="dial">${dial}</p>`;
}
function thinkConvert(mdText) {
    let think = mdText.replace('[!think]: ', '');
    think = think.replace(/\n/g, '</br></br>');
    return `<p class="think">${think}</p>`;
}

function boldConvert(mdText) {
    let boldHtml = '';
    if ((mdText.match(/\*\*/g) || []).length % 2 === 0) {
        const x = mdText.split('**');
        x.forEach((o, i) => {
            if (i % 2 === 0) boldHtml += o;
            else boldHtml += '<strong>' + o + '</strong>';
        });
    } else {
        boldHtml = mdText;
    }
    return boldHtml;
}

function italicConvert(mdText) {
    let italicHtml = '';
    if ((mdText.match(/\*/g) || []).length % 2 === 0) {
        const x = mdText.split('*');
        x.forEach((o, i) => {
            if (i % 2 === 0) italicHtml += o;
            else italicHtml += '<i>' + o + '</i>';
        });
    } else {
        italicHtml = mdText;
    }
    return italicHtml;
}

function textConvert(inp) {
    const lines = inp.split('\n\n');
    let html = lines.map(o => {
        switch(getTypeLine(o)) {
            case 'Header':
                return headerConvert(o);
            case 'Intro':
                return introConvert(o);
            case 'Lore':
                return loreConvert(o);
            case 'Past':
                return pastConvert(o);
            case 'Dial':
                return dialConvert(o);
            case 'Think':
                return thinkConvert(o);
            default:
                return `<p>${o}</p>`;
        }
    });

    html = html.map(line => boldConvert(line));
    html = html.map(line => italicConvert(line));
    
    return html.join('\n');
}

export {textConvert};