/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-input-inputtypes-localstorage-sessionstorage-load
 */
;window.Modernizr=function(a,b,c){function u(a){i.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}function z(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)o[c[d]]=c[d]in j;return o.list&&(o.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),o}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,g,h,i=a.length;d<i;d++)j.setAttribute("type",g=a[d]),e=j.type!=="text",e&&(j.value=k,j.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(g)&&j.style.WebkitAppearance!==c?(f.appendChild(j),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(j,null).WebkitAppearance!=="textfield"&&j.offsetHeight!==0,f.removeChild(j)):/^(search|tel)$/.test(g)||(/^(url|email)$/.test(g)?e=j.checkValidity&&j.checkValidity()===!1:e=j.value!=k)),n[a[d]]=!!e;return n}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j=b.createElement("input"),k=":)",l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(a){return!1}},m.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(a){return!1}};for(var A in m)t(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.input||z(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),h=j=null,e._version=d,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
if ( !Date.prototype.toISOString ) {
  ( function() {

    function pad(number) {
      var r = String(number);
      if ( r.length === 1 ) {
        r = '0' + r;
      }
      return r;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear()
        + '-' + pad( this.getUTCMonth() + 1 )
        + '-' + pad( this.getUTCDate() )
        + 'T' + pad( this.getUTCHours() )
        + ':' + pad( this.getUTCMinutes() )
        + ':' + pad( this.getUTCSeconds() )
        + '.' + String( (this.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
    };

  }() );
}


var iwater={ gastoIdeal: 120, gastoAlerta: 150, gastoMaximo: 165 };
(function(iwater) {

/*! iWater by Victor Capilé */
var dados = [
    { acao:'Beber um copo de água', gasto: 2, unidade: 1, medida:'minuto', tipo:'doméstico' },
    { acao:'Lavar as mãos', gasto: 12, unidade: 1, medida:'minuto', tipo:'doméstico' }, 
    { acao:'Torneira aberta', gasto: 12, unidade: 1, medida:'minuto', tipo:'doméstico' },
    { acao:'Torneira pingando', gasto: 20, unidade: 1, medida:'minuto', tipo:'doméstico'},
    { acao:'Descarga', gasto: 6, unidade: 6, medida:'segundo', tipo:'doméstico'},
    { acao:'Banho', gasto: 90, unidade: 10, medida:'minuto', tipo:'doméstico'},
    { acao:'Torneira gotejando', gasto: 46, unidade:1, medida:'dia', tipo:'doméstico'},
    { acao:'Lavar o carro com mangueira', gasto: 560, unidade:30, medida:'minuto', tipo:'doméstico'},
    { acao:'Lavar louça com a torneira meio aberta', gasto: 110, unidade:20, medida:'minuto', tipo:'doméstico'},
    { acao:'Comer pão francês', gasto:0.0175, unidade:50, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer ovo', gasto:0.0375, unidade:50, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer carne bovina moída refogada', gasto:0.065, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer pão de forma', gasto:0.01, unidade:30, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer carne bovina', gasto:0.075, unidade:150, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer peixe', gasto:0.05, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer alface', gasto:0.278, unidade:300, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer melancia', gasto:9200, unidade:10, medida:'quilos', tipo:'água nos alimentos'},
    { acao:'Comer cenoura', gasto:0.1584, unidade:180, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer uva (cacho)', gasto:0.243, unidade:300, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer laranja', gasto:0.087, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer abacaxi', gasto:0.001125, unidade:1.5, medida:'quilos', tipo:'água nos alimentos'},
    { acao:'Comer banana', gasto:0.074, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer peixe (assado)', gasto:0.074, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer frango assado (coxa)', gasto:0.035, unidade:50, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer pão branco', gasto:0.0148, unidade:40, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer manteiga', gasto:0.0368, unidade:230, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer bolacha agua e sal', gasto:0.001, unidade:30, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer açúcar', gasto:0.00016, unidade:160, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer brocólis', gasto:0.238, unidade:243, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer pêra', gasto:0.087, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer arroz branco', gasto:0.0663, unidade:85, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer arroz integral', gasto:0.0714, unidade:85, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer feijão cozido', gasto:0.0624, unidade:80, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comer maçã com casca', gasto:0.078, unidade:100, medida:'gramas', tipo:'água nos alimentos'},
    { acao:'Comprar uma calçã jeans', gasto:15.000, unidade:1, medida:'unidade', tipo:'fabricação'},
    { acao:'Comprar camiseta de algodão', gasto:3700, unidade:1, medida:'unidade', tipo:'fabricação'}     
];

var curiosidades= {
    mundo: [
      '97% da água do planeta é água do mar. Assim, apenas 3% da água existente na Terra é doce, e maior parte está congelada.',
      'Se a água dos oceanos evaporasse, a quantidade de sal retida seria suficiente para cobrir os continentes, numa camada com cerca de 1,5 metros de espessura.',
      'Uma molécula de água permanece no oceano durante 98 anos, faz parte do gelo durante 20 meses, fica nos lagos e rios por 2 semanas e não dura na atmosfera por mais de 7 dias.',
      'O Brasil tem 13,7% de toda água doce do planeta, sendo que 80% desse total está na Bacia Amazônica.',
      'Uma pessoa pode sobreviver um mês sem alimentar-se, mas só sete dias sem beber água.',
      'De toda água utilizada no mundo, 10% vai para o consumo humano, 20% é para uso industrial e 70% é usado na agricultura.',
      'Os mares e oceanos são responsáveis pela produção de 90% do oxigénio existente na atmosfera.',
      'Os oceanos contém mais de 1 300 000 000 km3 de água.',
      '1,1 bilhão de pessoas em todo o mundo vivem sem água potável.',
      'Para cada tonelada de papel virgem, doze árvores são derrubadas.',
      'Segundo a ONU, cada pessoa necessita cerca de 120 litros de água por dia para atender as necessidades de consumo e higiene.',
      'No Brasil estima-se que cada pessoa consome 200 litros de água/dia. Quase o dobro do recomendado pela ONU.',
      'Mais de um bilhão de pessoas não dispõem de água salubre e 25 mil entre elas morrem diariamente, devido à má qualidade das águas que usam e tomam.',
      'Na Europa, 41 milhões de pessoas carecem de acesso à água potável, enquanto 85 milhões não têm acesso ao saneamento básico.',
      'Metade dos leitos hospitalares é ocupado por doenças causadas pelo uso de água imprópria.',
      'Por volta de 2,6 bilhões não têm instalações básicas de saneamento (maioria dessa população vivendo na África e na Ásia).',
      'A Turquia enfrenta a Síria e o Iraque por seu projeto de construir represas e centrais hidrelétricas nas nascentes dos rios Tigre e Eufrates.',
      'Na África, 75% da população dependem dos recursos hídricos subterrâneos, que representam apenas 15% dos recursos renováveis.',
      'A cada ano, 2 milhões de pessoas morrem por causa de doenças relacionadas à falta de saneamento.',
      'Na Bolívia, cerca de uma entre 10 crianças morre antes de completar 5 anos. A maioria dessas mortes está relacionada a doenças causadas por falta de água potável.'
    ],
    domestico: [
    'Da água que gastamos em nossas casas, cerca de 75% é usada no banheiro',
    'Uma torneira mal fechada pode chegar a desperdiçar mais de 50 litros por dia, o que corresponde a mais de um metro cúbico por mês.',
    'As descargas dos aviões usam um sistema de sucção a vácuo, capaz de economizar 80% de água em relação às tradicionais.',
    'Quem opta por uma ducha gasta até 3 vezes mais do que quem usa um chuveiro convencional. São gastos, em média, 30 litros a cada cinco minutos de banho.',
    'As descargas dos aviões usam um sistema de sucção a vácuo, capaz de economizar 80% de água em relação às tradicionais.',
    'A simples descarga de um vaso sanitário pode gastar até 30 litros de água, dependendo da tecnologia adotada.',
    'Reduzindo 1 minuto do seu banho você pode economizar até 12 litros de água.',
    'Usar a mangueira como “vassoura” durante 15 minutos pode desperdiçar cerca de 280 litros de água.',
    'Para remover o gosto de cloro da água da torneira, basta deixar essa água em um recipiente aberto durante a noite.',
    'Lavar o carro com uma mangueira durante 10 minutos gasta, em média, 190 litros de água.',
    'Reduzindo 1 minuto de banho, você economiza algo em torno de 12 litros de água por banho.'
    ],
    industria: [
    'São necessários 450 litros de água para produzir um ovo de galinha.',
    'São necessários 7.000 litros para refinar um barril de petróleo e 148.000 litros para fabricar um automóvel.',
    'Um quilo de couro para produzir roupas e artefatos, como bolsas e sapatos, gasta nada menos do que 16,6 mil litros de água.',
    'Sabe a calça jeans do dia a dia? Para uma simples calça ser feita, são gastos 15 mil litros de água no processo – unindo tingimento, corte e produção do tecido.',
    'Uma camiseta de algodão, por mais simples que pareça, gasta quase 4 mil litros de água para ser produzida.',
    'Cada litro de gasolina necessita de 10 litros de água para ser produzido para depois ser utilizado como combustível.',
    'Apenas um quilo de carne bovina gasta 15 mil litros de água. Já a carne de porco gasta menos são 1,9 mil litros para cada quilo.',
    'O açúcar gasta água para sua produção e refinamento: são 1,5 mil litros de água para cada quilo de açúcar.',
    'Em termos globais, a indústria é responsável por 22% de toda a água doce consumida. Essa porcentagem é muito maior em países ricos - 59% - e bem menor nos países pobres - apenas 8%.',
    'O gasto de água necessário para produzir uma xícara de café (em torno de 140 litros) é equivalente a encher uma banheira.',
    ],
    historia: [
    'Na América, os incas junto com outras civilizações antigas já construíam numerosos sistemas de canalização de águas para irrigação, principalmente nas terras áridas da costa do Peru.',
    'Os egípcios dominavam técnicas sofisticadas de irrigação do solo na agricultura e métodos de armazenamento de líquido, pois dependiam das enchentes do Rio Nilo.',
    'Os romanos se destacaram na construção de redes de esgotos e de canalizações para escoamento das águas de chuvas na cidade.',
    'Por volta do ano 300 d.C., existiam em Roma mais de 300 banhos públicos ou termas (construções com piscinas de água quente, morna ou fria). Consumiam-se cerca de 3 milhões de litros de água por dia.',
    'Nas residências da Antiguidade era comum as pessoas evacuarem diretamente no solo. A camada mais rica da população usava recipientes para fazer suas necessidades e em seguida descarregava o conteúdo em local próximo ás moradias.',
    'Para tornar a água limpa antes de ser utilizada nas atividade domésticas, certos povos, principalmente os egípcios e japoneses, filtravam o líquido em vasos de porcelana.',
    'O Brasil foi um dos primeiros paises do mundo a implantar redes de coleta para escoamento das águas das chuvas.',
    'Em cinquenta anos, de 1953 até 2003, vivemos 1831 conflitos por água: 1228 foram resolvidos por acordos e tratados, mas 37 chegaram à violência e, desses, 21 não escaparam à guerra.'
    ],
    outro: [
    ''
    ]
}

var _h = window.location.hash;
iwater.init = function() {

    var form = document.getElementById('consumo');
    if(form) {
        var select = document.getElementById('gasto');
        select.options[0] = new Option('Escolha o consumo', '');
        select.onchange = atualizaConsumo;
        var i = 0;
        for(i=0; i<dados.length;i++) {
            if(dados[i].tipo=='doméstico') {
                select.options[select.options.length] = new Option(dados[i].acao, i);
            }
        }
        document.getElementById('quando').value = new Date().toISOString().substr(0,10);
    }

    var curiosidade = document.getElementById('curiosidade');
    if(curiosidade) {
        var tipo=_h.replace('#', '');
        if(!(tipo in curiosidades)) {
            tipo='mundo';
        }

        var texto = curiosidades[tipo][Math.floor((Math.random()*curiosidades[tipo].length))];
        curiosidade.children[0].textContent = texto;
    }

    historico();
    graficos();
}

function graficos(dia)
{
    var g = document.getElementById('graficos');
    if(!g || localStorage.length==0) return;

    var d='', ds=[], c={}, i=localStorage.length, dd=[], dt=0, di;
    if(i) {
        while(i-- > 0) {
            d=localStorage.key(i);
            if(d.search(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)<0) continue;
            dd = JSON.parse(localStorage.getItem(d));
            if(!dd) {
                delete localStorage[d];
                continue;
            }
            dt=0;
            ds.push(d);
            for(di=0;di<dd.length;di++) {
                if(!dd[di]) {
                    continue;
                }
                dt += dd[di].gasto;
            }
            c[d] = dt;
        }
        if(ds.length > 0) {
            ds.sort();
            ds.reverse();
            if(!dia || !(dia in c)) dia=ds[0];
            dt = c[dia];

            var gh=dt/iwater.gastoMaximo, ss='', gs='';
            if(gh>1) gh=1;

            gs = '<div class="grafico-bkg" style="height: '+(gh*100)+'%"></div>'
                + '<div class="grafico-limite" style="bottom: '+(iwater.gastoIdeal*100/iwater.gastoMaximo)+'%"><span class="abs">'+numero(iwater.gastoIdeal)+' l.<br />ideal</span></div>'
                + '<div class="consumo">'+numero(dt)+' l.<br />cons.</div>'
                ;
            if(dt>iwater.gastoAlerta) {
                gs += '<img src="img/grafico-alerta-vermelho.png" alt="Consumo pessoal" />';
            } else if(dt>iwater.gastoIdeal) {
                gs += '<img src="img/grafico-alerta.png" alt="Consumo pessoal" />';
            } else {
                gs += '<img src="img/grafico.png" alt="Consumo pessoal" />';
            }
            g.innerHTML = gs;
        }
    }
}

iwater.removeHistorico = function(d, i)
{
    var atualiza=false;
    if(d in localStorage) {
        if(typeof(i)!='undefined') {
            var a = JSON.parse(localStorage[d]);
            if(a) {
                if(i in a) {
                    a.splice(i,1);
                    if(a.length==0) {
                        localStorage.removeItem(d);
                    } else {
                        localStorage[d] = JSON.stringify(a);
                    }
                    atualiza = true;
                }
            }
        } else {
            localStorage.removeItem(d);
            atualiza = true;
        }
    }
    if(atualiza) {
        historico();
    }
    return false;
}

var _t={};
iwater.cronometro = function(id)
{
    var running=false, now = new Date().getTime();
    if(id && (id in _t)) {
        // pára o cronometro
        _t[id][1] = false;
    } else if(id) {
        var start=now, v=document.getElementById(id).value;
        if(v && v.search(/[1-9]/)>-1) {
            start = desformataTempo(v, now);
        }
        _t[id] = [start, true];
    }
    for(var c in _t) {
        document.getElementById(c).value = formataTempo(now - _t[c][0]);
        if(_t[c][1]) {
            running = true;
        } else {
            delete _t[c];
        }
    }
    var c=document.getElementById('cronometro');
    if(running) {
        if(c.className.search(/\bativo\b/)<0) c.className+=' ativo';
        setTimeout(iwater.cronometro, 999);
    } else {
        if(c.className.search(/\bativo\b/)>0) c.className=c.className.replace(/\s*\bativo\b/, '');
    }
}

iwater.paraCronometro = function(id)
{
    if(id && id in _t) iwater.cronometro(id);
}

iwater.novoConsumo = function(f)
{
    if(f.elements.gasto.selectedIndex<=0) {
        erro('Ôpa, você não escolheu o consumo...', f.elements.gasto);
        return false;
    } else if(f.elements.duracao.value=='') {
        erro('Ôpa, você não marcou a duração...', f.elements.duracao);
        return false;
    } else if(f.elements.quando.value=='') {
        erro('Ôpa, você não marcou quando...', f.elements.quando);
        return false;
    }
    var dado = dados[f.elements.gasto.options[f.elements.gasto.selectedIndex].value];

    var t=desformataTempo(f.elements.duracao.value, 0)*-0.001, d=f.elements.quando.value, o={tipo: dado.acao, gasto: gasto(dado, t), duracao: t }, a=[o];

    if(d in localStorage) {
        a = JSON.parse(localStorage[d]);
        a.push(o);
    }
    localStorage[d] = JSON.stringify(a);
    sucesso('Você consumiu '+numero(o.gasto)+' litro'+((o.gasto>1)?('s'):(''))+' de água.<br /><span class="pequeno">Histórico adicionado com sucesso!</span>', document.getElementById('submit'));
    return false;
}

function numero(n)
{
    return (''+n).replace(/\.0.*/, '').replace(/\.([0-9]).*/, ',$1');
}

function erro(m, e)
{
    return mensagem('<div class="erro">'+m+'</div>', e);
}
function sucesso(m, e)
{
    return mensagem('<div class="sucesso">'+m+'</div>', e);
}

var _m = 0;
function mensagem(m, e)
{
    _m++;
    var s=document.createElement('div');
    s.className = 'mensagem';
    s.id='mensagem'+_m;
    s.innerHTML = m;
    if(e) {
        e.parentNode.insertBefore(s, e.nextSibling);
    }

    setTimeout(limpaMensagem, 5000);
}

function limpaMensagem()
{
    //$('div.mensagem').fadeOut(300, function() { $(this).remove(); });
    var d=document.getElementsByClassName('mensagem'), i=d.length;
    while(i-- > 0) {
        if(!(i in d)) break;
        d[i].parentNode.removeChild(d[i]);
        delete d[i];
    }
}

Modernizr.load(['js/json2.js', { load: 'js/jquery-1.9.1.js', complete: pronto },
{
  test: Modernizr.inputtypes.date,
  nope: [ 'js/jquery-ui-1.10.3.custom.js', 'css/iwater-theme/jquery-ui-1.10.3.custom.css'],
  complete: ajustaFormulario
}]);

function ajustaFormulario() {
    if('$' in window && 'datepicker' in $)
      $('input[type=date]').datepicker({
        dateFormat: 'yy-mm-dd'
      }); 
}
function formataTempo(i)
{
    //console.log('formataTempo: ', i, ('0'+Math.floor(i/3600000)).substr(-2)+':'+('0'+Math.floor(i/60000)).substr(-2)+':'+('0'+Math.floor((i/1000)%60)).substr(-2));
    return ('0'+Math.floor(i/3600000)).substr(-2)+':'+('0'+Math.floor(i/60000)).substr(-2)+':'+('0'+Math.floor((i/1000)%60)).substr(-2);
}

function desformataTempo(s, t)
{
    if(typeof(t)=='undefined') t=new Date().getTime();
    var a=s.split(/:/g);
    while(a.length<3) a.push(0);
    t -= (parseInt(a[2])*1000) + (parseInt(a[1])*60000) + (parseInt(a[0])*3600000);
    return t;
}

function atualizaConsumo()
{
    if(this.selectedIndex<=0) return this.form.reset();
    var dado = dados[this.options[this.selectedIndex].value];

    if(dado.medida=='minuto') {
        document.getElementById('duracao').value = formataTempo(dado.unidade * 60000);
    } else if(dado.medida=='segundo') {
        document.getElementById('duracao').value = formataTempo(dado.unidade * 1000);
    } else if(dado.medida=='hora') {
        document.getElementById('duracao').value = formataTempo(dado.unidade * 3600000);
    } else if(dado.medida=='dia') {
        document.getElementById('duracao').value = formataTempo(dado.unidade * (86400 -1) *1000);
    }
}

function gasto(dado, seg)
{
    if(dado.medida=='minuto') {
        return dado.gasto * (seg / 60) / dado.unidade;
    } else if(dado.medida=='segundo') {
        return dado.gasto * seg / dado.unidade;
    } else if(dado.medida=='hora') {
        return dado.gasto * (seg / 3600) / dado.unidade;
    } else if(dado.medida=='dia') {
        return dado.gasto * (seg / 86400) / dado.unidade;
    } else {
        return 0;
    }

}

function historico()
{
    var historico = document.getElementById('historico');
    if(historico) {
        var s='', ds=[], d='', c={}, i=localStorage.length, dd, di=0, dt=0;
        if(i) {
            while(i-- > 0) {
                d=localStorage.key(i);
                if(d.search(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)<0) continue;
                dd = JSON.parse(localStorage.getItem(d));
                if(!dd) {
                    delete localStorage[d];
                    continue;
                }
                dt=0;
                ds.push(d);
                c[d] = '<tr><td class="dia">'+d.substr(-2)+'/'+d.substr(5,2)+'<a class="icon-cancel-circled mini-icon pequeno" onclick="return iwater.removeHistorico(\''+d+'\');" href="#Remover do histórico"></a></td><td class="consumo">';
                for(di=0;di<dd.length;di++) {
                    if(!dd[di]) {
                        continue;
                    }
                    c[d]+='<p>'+dd[di].tipo+' ('+numero(dd[di].gasto)+' litro'+((dd[di].gasto>1)?('s'):(''))+') <a class="icon-cancel-circled mini-icon pequeno" onclick="return iwater.removeHistorico(\''+d+'\', '+di+');" href="#Remover do histórico"></a></p>';
                    dt += dd[di].gasto;
                }
                var gc='gasto';
                if(dt>iwater.gastoAlerta) gc+=' alerta-vermelho';
                else if(dt>iwater.gastoIdeal) gc+=' alerta';
                c[d] += '</td><td class="'+gc+'">'+numero(dt)+' litros</td></tr>';
            }
            if(ds.length > 0) {
                ds.sort();
                ds.reverse();
                s = '<table class="historico">'
                    + '<thead><tr><th class="dia">Dia</th><th class="consumo">Consumo</th><th class="gasto">Gasto</th></tr></thead>'
                    + '<tbody>';
                while(ds.length>0) {
                    s += c[ds.shift()];
                }
                s += '</tbody></table>';

            }
        }
        if(!s) s = '<p>Você precisa antes registrar seu consumo</p>';
        historico.innerHTML = s;
    }
}

function pronto(d)
{
    if(d) {
        var p=d.indexOf('<script');
        if(p) d=d.substr(0,p);
        p=d.indexOf('<body');
        if(p) {
            d=d.substr(p+5);
            d=d.substr(d.indexOf('>')+1);
        }
        //d=d.replace(/^[\s.]*<body[^>]*>|<\/body>[\s.]*$/gi, '').replace(/<script[^>]*><\/script>/g, '');
        $('body').html(d);
        $('html,body').scrollTop(0);
    }
    iwater.init();
    if(window.location.href.search(/^https?:\/\//)>-1)
        $('a:not([href^=#]):not([href^=http])').bind('click', carrega);
}
function carrega()
{
    var url=$(this).attr('href'), h=url.indexOf('#'), hash='';
    if(h==0) return true;
    else if(h>0) {
        hash = url.substr(h+1);
        url=url.substr(0,h);
    }
    url+='?_='+(new Date().getTime()); 
    //console.log('carrega: '+url, hash)
    $.ajax({
        url: url,
        success: pronto
    });
    if(hash) _h=hash;
    return false;
}

})(iwater);



