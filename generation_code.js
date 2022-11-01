var displayDiv = document.querySelector('#render_generator');

function generate_tag(numBalise){
    switch (numBalise){
        case '0':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">&lt;!--</span><span class="vert">--&gt;</span>');
            newSpan.appendChild(text);
            break;
        case '1':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">!DOCTYPE html</span>');
            newSpan.appendChild(text);
            break;
        case '2':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">a</span>');
            newSpan.appendChild(text);
            break;
        case '3':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">abbr</span>');
            newSpan.appendChild(text);
            break;
        case '4':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">acronym</span>');
            newSpan.appendChild(text);
            break;
        case '5':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">address</span>');
            newSpan.appendChild(text);
            break;    
        case '6':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">applet</span>');
            newSpan.appendChild(text);
            break;
        case '7':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">area</span>');
            newSpan.appendChild(text);
            break;
        case '8':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">article</span>');
            newSpan.appendChild(text);
            break;
        case '9':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">aside</span>');
            newSpan.appendChild(text);
            break;
        case '10':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">audio</span>');
            newSpan.appendChild(text);
            break;
        case '11':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">b</span>');
            newSpan.appendChild(text);
            break;
        case '12':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">base</span>');
            newSpan.appendChild(text);
            break;
        case '13':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">basefont</span>');
            newSpan.appendChild(text);
            break;
        case '14':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">bdi</span>');
            newSpan.appendChild(text);
            break;
        case '15':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">bdo</span>');
            newSpan.appendChild(text);
            break;
        case '16':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">big</span>');
            newSpan.appendChild(text);
            break;
        case '17':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">blockquote</span>');
            newSpan.appendChild(text);
            break;
        case '18':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">body</span>');
            newSpan.appendChild(text);
            break;
        case '19':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">br</span>');
            newSpan.appendChild(text);
            break;
        case '20':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">button</span>');
            newSpan.appendChild(text);
            break;
        case '21':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">canvas</span>');
            newSpan.appendChild(text);
            break;
        case '22':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">caption</span>');
            newSpan.appendChild(text);
            break;
        case '23':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">center</span>');
            newSpan.appendChild(text);
            break;
        case '24':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">cite</span>');
            newSpan.appendChild(text);
            break;
        case '25':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">code</span>');
            newSpan.appendChild(text);
            break;
        case '26':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">col</span>');
            newSpan.appendChild(text);
            break;
        case '27':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">colgroup</span>');
            newSpan.appendChild(text);
            break;
        case '28':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">data</span>');
            newSpan.appendChild(text);
            break;
        case '29':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">datalist</span>');
            newSpan.appendChild(text);
            break;
        case '30':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">dd</span>');
            newSpan.appendChild(text);
            break;
        case '31':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">del</span>');
            newSpan.appendChild(text);
            break;
        case '32':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">details</span>');
            newSpan.appendChild(text);
            break;
        case '33':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">dfn</span>');
            newSpan.appendChild(text);
            break;
        case '34':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">dialog</span>');
            newSpan.appendChild(text);
            break;
        case '35':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">dir</span>');
            newSpan.appendChild(text);
            break;
        case '36':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">div</span>');
            newSpan.appendChild(text);
            break;
        case '37':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">dl</span>');
            newSpan.appendChild(text);
            break;
        case '38':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">dt</span>');
            newSpan.appendChild(text);
            break;
        case '39':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">em</span>');
            newSpan.appendChild(text);
            break;
        case '40':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">embed</span>');
            newSpan.appendChild(text);
            break;
        case '41':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">fieldset</span>');
            newSpan.appendChild(text);
            break;
        case '42':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">figcaption</span>');
            newSpan.appendChild(text);
            break;
        case '43':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">figure</span>');
            newSpan.appendChild(text);
            break;
        case '44':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">font</span>');
            newSpan.appendChild(text);
            break;
        case '45':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">footer</span>');
            newSpan.appendChild(text);
            break;
        case '46':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">form</span>');
            newSpan.appendChild(text);
            break;
        case '47':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">frame</span>');
            newSpan.appendChild(text);
            break;
        case '48':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">frameset</span>');
            newSpan.appendChild(text);
            break;
        case '49':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">h1</span>');
            newSpan.appendChild(text);
            break;
        case '50':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">h2</span>');
            newSpan.appendChild(text);
            break;
        case '51':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">h3</span>');
            newSpan.appendChild(text);
            break;
        case '52':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">h4</span>');
            newSpan.appendChild(text);
            break;
        case '53':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">h5</span>');
            newSpan.appendChild(text);
            break;
        case '54':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">h6</span>');
            newSpan.appendChild(text);
            break;
        case '55':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">head</span>');
            newSpan.appendChild(text);
            break;
        case '56':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">header</span>');
            newSpan.appendChild(text);
            break;
        case '57':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">hr</span>');
            newSpan.appendChild(text);
            break;
        case '58':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">html</span>');
            newSpan.appendChild(text);
            break;
        case '59':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">i</span>');
            newSpan.appendChild(text);
            break;
        case '60':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">iframe</span>');
            newSpan.appendChild(text);
            break;
        case '61':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">img</span>');
            newSpan.appendChild(text);
            break;
        case '62':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">input</span>');
            newSpan.appendChild(text);
            break;
        case '63':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">ins</span>');
            newSpan.appendChild(text);
            break;
        case '64':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">kbd</span>');
            newSpan.appendChild(text);
            break;
        case '65':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">label</span>');
            newSpan.appendChild(text);
            break;
        case '66':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">legend</span>');
            newSpan.appendChild(text);
            break;
        case '67':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">li</span>');
            newSpan.appendChild(text);
            break;
        case '68':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">link</span>');
            newSpan.appendChild(text);
            break;
        case '69':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">main</span>');
            newSpan.appendChild(text);
            break;
        case '70':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">map</span>');
            newSpan.appendChild(text);
            break;
        case '71':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">mark</span>');
            newSpan.appendChild(text);
            break;
        case '72':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">meta</span>');
            newSpan.appendChild(text);
            break;
        case '73':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">meter</span>');
            newSpan.appendChild(text);
            break;
        case '74':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">nav</span>');
            newSpan.appendChild(text);
            break;
        case '75':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">noframes</span>');
            newSpan.appendChild(text);
            break;
        case '76':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">noscript</span>');
            newSpan.appendChild(text);
            break;
        case '77':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">object</span>');
            newSpan.appendChild(text);
            break;
        case '78':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">ol</span>');
            newSpan.appendChild(text);
            break;
        case '79':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">optgroup</span>');
            newSpan.appendChild(text);
            break;
        case '80':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">option</span>');
            newSpan.appendChild(text);
            break;
        case '81':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">output</span>');
            newSpan.appendChild(text);
            break;
        case '82':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">p</span>');
            newSpan.appendChild(text);
            break;
        case '83':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">param</span>');
            newSpan.appendChild(text);
            break;
        case '84':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">picture</span>');
            newSpan.appendChild(text);
            break;
        case '85':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">pre</span>');
            newSpan.appendChild(text);
            break;
        case '86':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">progress</span>');
            newSpan.appendChild(text);
            break;
        case '87':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">q</span>');
            newSpan.appendChild(text);
            break;
        case '88':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">rp</span>');
            newSpan.appendChild(text);
            break;
        case '89':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">rt</span>');
            newSpan.appendChild(text);
            break;
        case '90':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">ruby</span>');
            newSpan.appendChild(text);
            break;
        case '91':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">s</span>');
            newSpan.appendChild(text);
            break;
        case '92':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">samp</span>');
            newSpan.appendChild(text);
            break;
        case '93':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">script</span>');
            newSpan.appendChild(text);
            break;
        case '94':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">section</span>');
            newSpan.appendChild(text);
            break;
        case '95':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">select</span>');
            newSpan.appendChild(text);
            break;
        case '96':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">small</span>');
            newSpan.appendChild(text);
            break;
        case '97':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">source</span>');
            newSpan.appendChild(text);
            break;
        case '98':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">span</span>');
            newSpan.appendChild(text);
            break;
        case '99':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">strike</span>');
            newSpan.appendChild(text);
            break;
        case '100':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">strong</span>');
            break;
        case '101':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">style</span>');
            newSpan.appendChild(text);
            break;
        case '102':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">sub</span>');
            newSpan.appendChild(text);
            break;
        case '103':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">summary</span>');
            break;
        case '104':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">sup</span>');
            newSpan.appendChild(text);
            break;
        case '105':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">svg</span>');
            newSpan.appendChild(text);
            break;
        case '106':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">table</span>');
            newSpan.appendChild(text);
            break;
        case '107':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">tbody</span>');
            newSpan.appendChild(text);
            break;
        case '108':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
                var text = document.createTextNode('<span class="rose">td</span>');
            newSpan.appendChild(text);
            break;
        case '109':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">template</span>');
            newSpan.appendChild(text);
            break;
        case '110':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">textarea</span>');
            newSpan.appendChild(text);
            break;
        case '111':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">tfoot</span>');
            newSpan.appendChild(text);
            break;
        case '112':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">th</span>');
            newSpan.appendChild(text);
            break;
        case '113':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">thead</span>');
            newSpan.appendChild(text);
            break;
        case '114':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">time</span>');
            newSpan.appendChild(text);
            break;
        case '115':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">title</span>');
            newSpan.appendChild(text);
            break;
        case '116':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">tr</span>');
            newSpan.appendChild(text);
            break;
        case '117':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">track</span>');
            newSpan.appendChild(text);
            break;
        case '118':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">tt</span>');
            newSpan.appendChild(text);
            break;
        case '119':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">u</span>');
            newSpan.appendChild(text);
            break;
        case '120':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">ul</span>');
            newSpan.appendChild(text);
            break;
        case '121':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">var</span>');
            newSpan.appendChild(text);
            break;
        case '122':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">video</span>');
            newSpan.appendChild(text);
            break;
        case '123':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="rose">wbr</span>');
            newSpan.appendChild(text);
            break;
        default:
            break;
    }
    
}

function generate_sign(numSign){
    switch (numSign){
        case '0':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">"</span>');
            newSpan.appendChild(text);
            break;
        case '0':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">"</span>');
            newSpan.appendChild(text);
            break;
        case '1':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">#</span>');
            newSpan.appendChild(text);
            break;
        case '2':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">$</span>');
            newSpan.appendChild(text);
            break;
        case '3':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">%</span>');
            newSpan.appendChild(text);
            break;
        case '4':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">&</span>');
            newSpan.appendChild(text);
            break;
        case '5':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="gris">\'</span>');
            newSpan.appendChild(text);
            break;
        case '6':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">(</span>');
            newSpan.appendChild(text);
            break;
        case '7':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">)</span>');
            newSpan.appendChild(text);
            break;
        case '8':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">*</span>');
            newSpan.appendChild(text);
            break;
        case '9':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">+</span>');
            newSpan.appendChild(text);
            break;
        case '10':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">-</span>');
            newSpan.appendChild(text);
            break;
        case '11':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">/</span>');
            newSpan.appendChild(text);
            break;
        case '12':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="gris">\</span>');
            newSpan.appendChild(text);
            break;
        case '13':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="gris">&lt;</span>');
            newSpan.appendChild(text);
            break;
        case '14':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="gris">&gt;</span>');
            newSpan.appendChild(text);
            break;
        case '15':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">:</span>');
            newSpan.appendChild(text);
            break;
        case '16':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">;</span>');
            newSpan.appendChild(text);
            break;
        case '17':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">,</span>');
            newSpan.appendChild(text);
            break;
        case '18':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">=</span>');
            newSpan.appendChild(text);
            break;
        case '19':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">?</span>');
            newSpan.appendChild(text);
            break;
        case '20':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">_</span>');
            newSpan.appendChild(text);
            break;
        case '21':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">{</span>');
            newSpan.appendChild(text);
            break;
        case '22':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">}</span>');
            newSpan.appendChild(text);
            break;
        case '23':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">[</span>');
            newSpan.appendChild(text);
            break;
        case '24':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">]</span>');
            newSpan.appendChild(text);
            break;
        case '25':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">!</span>');
            newSpan.appendChild(text);
            break;
        case '26':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">|</span>');
            newSpan.appendChild(text);
            break;
        case '27':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">@</span>');
            newSpan.appendChild(text);
            break;
        case '28':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="blanc">.</span>');
            newSpan.appendChild(text);
            break;
        default:
            break;
    }
}

function generate_attr(numAttr){
    switch (numAttr){
        case '0':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">accept</span>');
            newSpan.appendChild(text);
            break;
        case '1':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">accept-charset</span>');
            newSpan.appendChild(text);
            break;
        case '2':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">accesskey</span>');
            newSpan.appendChild(text);
            break;
        case '3':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">action</span>');
            newSpan.appendChild(text);
            break;
        case '4':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">align</span>');
            newSpan.appendChild(text);
            break;
        case '5':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">alt</span>');
            newSpan.appendChild(text);
            break;
        case '6':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">async</span>');
            newSpan.appendChild(text);
            break;
        case '7':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">autocomplete</span>');
            newSpan.appendChild(text);
            break;
        case '8':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">autofocus</span>');
            newSpan.appendChild(text);
            break;
        case '9':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">autoplay</span>');
            newSpan.appendChild(text);
            break;
        case '10':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">bgcolor</span>');
            newSpan.appendChild(text);
            break;
        case '11':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">border</span>');
            newSpan.appendChild(text);
            break;
        case '12':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">charset</span>');
            newSpan.appendChild(text);
            break;
        case '13':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">checked</span>');
            newSpan.appendChild(text);
            break;
        case '14':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">cite</span>');
            newSpan.appendChild(text);
            break;
        case '15':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">class</span>');
            newSpan.appendChild(text);
            break;
        case '16':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">color</span>');
            newSpan.appendChild(text);
            break;
        case '17':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">cols</span>');
            newSpan.appendChild(text);
            break;
        case '18':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">colspan</span>');
            newSpan.appendChild(text);
            break;
        case '19':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">content</span>');
            newSpan.appendChild(text);
            break;
        case '20':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">contenteditable</span>');
            newSpan.appendChild(text);
            break;
        case '21':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">controls</span>');
            newSpan.appendChild(text);
            break;
        case '22':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">coords</span>');
            newSpan.appendChild(text);
            break;
        case '23':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">data</span>');
            newSpan.appendChild(text);
            break;
        case '24':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">data-*</span>');
            newSpan.appendChild(text);
            break;
        case '25':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">datetime</span>');
            newSpan.appendChild(text);
            break;
        case '26':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">default</span>');
            newSpan.appendChild(text);
            break;
        case '27':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">defer</span>');
            newSpan.appendChild(text);
            break;
        case '28':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">dir</span>');
            newSpan.appendChild(text);
            break;
        case '29':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">dirname</span>');
            newSpan.appendChild(text);
            break;
        case '30':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">disabled</span>');
            newSpan.appendChild(text);
            break;
        case '31':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">download</span>');
            newSpan.appendChild(text);
            break;
        case '32':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">draggable</span>');
            newSpan.appendChild(text);
            break;
        case '33':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">enctype</span>');
            newSpan.appendChild(text);
            break;
        case '34':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">for</span>');
            newSpan.appendChild(text);
            break;
        case '35':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">form</span>');
            newSpan.appendChild(text);
            break;
        case '36':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">formaction</span>');
            newSpan.appendChild(text);
            break;
        case '37':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">headers</span>');
            newSpan.appendChild(text);
            break;
        case '38':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">height</span>');
            newSpan.appendChild(text);
            break;
        case '39':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">hidden</span>');
            newSpan.appendChild(text);
            break;
        case '40':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">high</span>');
            newSpan.appendChild(text);
            break;
        case '41':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">href</span>');
            newSpan.appendChild(text);
            break;
        case '42':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">hreflang</span>');
            newSpan.appendChild(text);
            break;
        case '43':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">http-equiv</span>');
            newSpan.appendChild(text);
            break;
        case '44':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">id</span>');
            newSpan.appendChild(text);
            break;
        case '45':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ismap</span>');
            newSpan.appendChild(text);
            break;
        case '46':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">kind</span>');
            newSpan.appendChild(text);
            break;
        case '47':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">label</span>');
            newSpan.appendChild(text);
            break;
        case '48':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">lang</span>');
            newSpan.appendChild(text);
            break;
        case '49':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">list</span>');
            newSpan.appendChild(text);
            break;
        case '50':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">loop</span>');
            newSpan.appendChild(text);
            break;
        case '51':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">low</span>');
            newSpan.appendChild(text);
            break;
        case '52':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">max</span>');
            newSpan.appendChild(text);
            break;
        case '53':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">maxlength</span>');
            newSpan.appendChild(text);
            break;
        case '54':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">media</span>');
            newSpan.appendChild(text);
            break;
        case '55':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">method</span>');
            newSpan.appendChild(text);
            break;
        case '56':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">min</span>');
            newSpan.appendChild(text);
            break;
        case '57':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">multiple</span>');
            newSpan.appendChild(text);
            break;
        case '58':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">muted</span>');
            newSpan.appendChild(text);
            break;
        case '59':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">name</span>');
            newSpan.appendChild(text);
            break;
        case '60':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">novalidate</span>');
            newSpan.appendChild(text);
            break;
        case '61':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onabort</span>');
            newSpan.appendChild(text);
            break;
        case '62':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onafterprint</span>');
            newSpan.appendChild(text);
            break;
        case '63':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onbeforeprint</span>');
            newSpan.appendChild(text);
            break;
        case '64':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onbeforeunload</span>');
            newSpan.appendChild(text);
            break;
        case '65':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onblur</span>');
            newSpan.appendChild(text);
            break;
        case '66':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oncanplay</span>');
            newSpan.appendChild(text);
            break;
        case '67':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oncanplaythrough</span>');
            newSpan.appendChild(text);
            break;
        case '68':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onchange</span>');
            newSpan.appendChild(text);
            break;
        case '69':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onclick</span>');
            newSpan.appendChild(text);
            break;
        case '70':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oncontextmenu</span>');
            newSpan.appendChild(text);
            break;
        case '71':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oncopy</span>');
            newSpan.appendChild(text);
            break;
        case '72':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oncuechange</span>');
            newSpan.appendChild(text);
            break;
        case '73':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oncut</span>');
            newSpan.appendChild(text);
            break;
        case '74':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondblclick</span>');
            newSpan.appendChild(text);
            break;
        case '75':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondrag</span>');
            newSpan.appendChild(text);
            break;
        case '76':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondragend</span>');
            newSpan.appendChild(text);
            break;
        case '77':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondragenter</span>');
            newSpan.appendChild(text);
            break;
        case '78':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondragleave</span>');
            newSpan.appendChild(text);
            break;
        case '79':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondragover</span>');
            newSpan.appendChild(text);
            break;
        case '80':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondragstart</span>');
            newSpan.appendChild(text);
            break;
        case '81':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondrop</span>');
            newSpan.appendChild(text);
            break;
        case '82':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ondurationchange</span>');
            newSpan.appendChild(text);
            break;
        case '83':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onemptied</span>');
            newSpan.appendChild(text);
            break;
        case '84':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onended</span>');
            newSpan.appendChild(text);
            break;
        case '85':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onerror</span>');
            newSpan.appendChild(text);
            break;
        case '86':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onfocus</span>');
            newSpan.appendChild(text);
            break;
        case '87':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onhashchange</span>');
            newSpan.appendChild(text);
            break;
        case '88':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oninput</span>');
            newSpan.appendChild(text);
            break;
        case '89':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">oninvalid</span>');
            newSpan.appendChild(text);
            break;
        case '90':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onkeydown</span>');
            newSpan.appendChild(text);
            break;
        case '91':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onkeypress</span>');
            newSpan.appendChild(text);
            break;
        case '92':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onkeyup</span>');
            newSpan.appendChild(text);
            break;
        case '93':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onload</span>');
            newSpan.appendChild(text);
            break;
        case '94':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onloadeddata</span>');
            newSpan.appendChild(text);
            break;
        case '95':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onloadedmetadata</span>');
            newSpan.appendChild(text);
            break;
        case '96':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onloadstart</span>');
            newSpan.appendChild(text);
            break;
        case '97':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onmousedown</span>');
            newSpan.appendChild(text);
            break;
        case '98':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onmousemove</span>');
            newSpan.appendChild(text);
            break;
        case '99':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onmouseout</span>');
            newSpan.appendChild(text);
            break;
        case '100':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onmouseover</span>');
            newSpan.appendChild(text);
            break;
        case '101':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onmouseup</span>');
            newSpan.appendChild(text);
            break;
        case '102':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onmousewheel</span>');
            newSpan.appendChild(text);
            break;
        case '103':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onoffline</span>');
            newSpan.appendChild(text);
            break;
        case '104':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ononline</span>');
            newSpan.appendChild(text);
            break;
        case '105':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onpagehide</span>');
            newSpan.appendChild(text);
            break;
        case '106':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onpageshow</span>');
            newSpan.appendChild(text);
            break;
        case '107':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onpaste</span>');
            newSpan.appendChild(text);
            break; 
        case '108':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onpause</span>');
            newSpan.appendChild(text);
            break;
        case '109':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onplay</span>');
            newSpan.appendChild(text);
            break;
        case '110':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onplaying</span>');
            newSpan.appendChild(text);
            break;
        case '111':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onpopstate</span>');
            newSpan.appendChild(text);
            break;
        case '112':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onprogress</span>');
            newSpan.appendChild(text);
            break;
        case '113':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onratechange</span>');
            newSpan.appendChild(text);
            break;
        case '114':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onreset</span>');
            newSpan.appendChild(text);
            break;
        case '115':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onresize</span>');
            newSpan.appendChild(text);
            break;
        case '116':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onscroll</span>');
            newSpan.appendChild(text);
            break;
        case '117':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onsearch</span>');
            newSpan.appendChild(text);
            break;
        case '118':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onseeked</span>');
            newSpan.appendChild(text);
            break;
        case '119':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onseeking</span>');
            newSpan.appendChild(text);
            break;
        case '120':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onselect</span>');
            newSpan.appendChild(text);
            break;
        case '121':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onstalled</span>');
            newSpan.appendChild(text);
            break;
        case '122':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onstorage</span>');
            newSpan.appendChild(text);
            break;
        case '123':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onsubmit</span>');
            newSpan.appendChild(text);
            break;
        case '124':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onsuspend</span>');
            newSpan.appendChild(text);
            break;
        case '125':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ontimeupdate</span>');
            newSpan.appendChild(text);
            break;
        case '126':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">ontoggle</span>');
            newSpan.appendChild(text);
            break;
        case '127':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onunload</span>');
            newSpan.appendChild(text);
            break;
        case '128':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onvolumechange</span>');
            newSpan.appendChild(text);
            break;
        case '129':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onwaiting</span>');
            newSpan.appendChild(text);
            break;
        case '130':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">onwheel</span>');
            newSpan.appendChild(text);
            break;
        case '131':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">open</span>');
            newSpan.appendChild(text);
            break;
        case '132':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">optimum</span>');
            newSpan.appendChild(text);
            break;
        case '133':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">pattern</span>');
            newSpan.appendChild(text);
            break;
        case '134':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">placeholder</span>');
            newSpan.appendChild(text);
            break;
        case '135':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">poster</span>');
            newSpan.appendChild(text);
            break;
        case '136':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">preload</span>');
            newSpan.appendChild(text);
            break;
        case '137':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">readonly</span>');
            newSpan.appendChild(text);
            break;
        case '138':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">rel</span>');
            newSpan.appendChild(text);
            break;
        case '139':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">required</span>');
            newSpan.appendChild(text);
            break;
        case '140':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">reversed</span>');
            newSpan.appendChild(text);
            break;
        case '141':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">rows</span>');
            newSpan.appendChild(text);
            break;
        case '142':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">rowspan</span>');
            newSpan.appendChild(text);
            break;
        case '143':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">sandbox</span>');
            newSpan.appendChild(text);
            break; 
        case '144':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">scope</span>');
            newSpan.appendChild(text);
            break;
        case '145':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">selected</span>');
            newSpan.appendChild(text);
            break;
        case '146':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">shape</span>');
            newSpan.appendChild(text);
            break;
        case '147':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">size</span>');
            newSpan.appendChild(text);
            break;
        case '148':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">sizes</span>');
            newSpan.appendChild(text);
            break;
        case '149':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">span</span>');
            newSpan.appendChild(text);
            break;
        case '150':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">spellcheck</span>');
            newSpan.appendChild(text);
            break;
        case '151':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">src</span>');
            newSpan.appendChild(text);
            break;
        case '152':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">srcdoc</span>');
            newSpan.appendChild(text);
            break;
        case '153':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">srclang</span>');
            newSpan.appendChild(text);
            break;
        case '154':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">srcset</span>');
            newSpan.appendChild(text);
            break;
        case '155':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">start</span>');
            newSpan.appendChild(text);
            break;
        case '156':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">step</span>');
            newSpan.appendChild(text);
            break;
        case '157':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">style</span>');
            newSpan.appendChild(text);
            break;
        case '158':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">tabindex</span>');
            newSpan.appendChild(text);
            break;
        case '159':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">target</span>');
            newSpan.appendChild(text);
            break;
        case '160':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">title</span>');
            newSpan.appendChild(text);
            break;
        case '161':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">translate</span>');
            newSpan.appendChild(text);
            break;
        case '162':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">type</span>');
            newSpan.appendChild(text);
            break; 
        case '163':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">usemap</span>');
            newSpan.appendChild(text);
            break;
        case '164':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">value</span>');
            newSpan.appendChild(text);
            break; 
        case '165':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">width</span>');
            newSpan.appendChild(text);
            break;
        case '166':
            var newSpan = document.createElement('span');
            var newBr = document.createElement('br');
            displayDiv.appendChild(newSpan);
            displayDiv.appendChild(newBr);
            var text = document.createTextNode('<span class="vert">wrap</span>');
            newSpan.appendChild(text);
            break;
        default:
            break;
    }
}