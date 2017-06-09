joint.shapes.basic.Decision = joint.shapes.basic.Generic.extend({
  markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="type"/><text class="condition"/><text class="typein"/><text class="typeout"/><circle id="input" cx="-50"/><circle id="output" cx="50"/></g>',
  type: 'Decision',
  editor: {
    types: ['Loop', 'And', 'Xor'],
    type: 'Loop',
    condition: '',
    typein: 'TypeIn',
    typeout: ''
  },
  defaults: joint.util.deepSupplement({
    type: 'basic.Rect',
    position: {x: 70, y: 10},
    size: {width: 100, height: 100},
    attrs: {
      rect: {fill: 'white', stroke: 'black', width: 1, height: 1, transform: 'rotate(45)'},
      '.type': {
        'font-size': 14,
        text: 'Loop',
        'ref-x': .5,
        'ref-y': .5,
        ref: 'rect',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      circle: {
        magnet: true,
        fill: 'green',
        r: 4,
        cy: 50,
        z: 0
      },
      '.condition': {
        'font-size': 14,
        text: '',
        'ref-x': .5,
        'ref-y': 0.99999,
        ref: 'rect',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typein': {
        'font-size': 10,
        text: '',
        'ref-x': 0.00001,
        'ref-y': 0.99999,
        ref: 'rect',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typeout': {
        'font-size': 10,
        text: '',
        'ref-x': 0.99999,
        'ref-y': 0.99999,
        ref: 'rect',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      }
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Generator = joint.shapes.basic.Generic.extend({
  markup: '<g class="rotatable"><g class="scalable"><path/></g><text class="type"/><text class="typein"/><text class="typeout"/><circle id="input"/><circle id="output"/></g>',
  type: 'Generator',
  editor: {
    types: ['N', 'N+', 'For each', '∞'],
    type: 'N',
    quantity: 0,
    typein: '',
    typeout: ''
  },
  defaults: joint.util.deepSupplement({
    type: 'basic.Path',
    position: {x: 120, y: 130},
    size: {width: 100, height: 100},
    attrs: {
      path: {
        d: 'M 50 0 L 0 20 0 80 50 100 100 80 100 20 z',
        fill: "white",
        stroke: "black",
        'stroke-width': 1,
        transform: 'rotate(90)'
      },
      '.type': {
        'font-size': 20,
        text: 'N',
        'ref-x': .5,
        'ref-y': .5,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typein': {
        'font-size': 10,
        text: '',
        'ref-x': 0.00001,
        'ref-y': 0.99999,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typeout': {
        'font-size': 10,
        text: '',
        'ref-x': 0.99999,
        'ref-y': 0.99999,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      circle: {
        magnet: true,
        fill: 'green',
        r: 4,
        cy: 50,
        z: 0
      },
      '#input': {
        cx: -100
      }
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});


joint.shapes.basic.Aggregation = joint.shapes.basic.Generic.extend({
  markup: '<g class="rotatable"><g class="scalable"><path/></g><text class="type"/><text class="typein"/><text class="typeout"/><circle id="input"/><circle id="output"/></g>',
  type: 'Aggregation',
  editor: {
    types: ['MV', 'N%', 'Avg', 'ø'],
    type: 'MV',
    typein: '',
    typeout: ''
  },
  defaults: joint.util.deepSupplement({
    type: 'basic.Path',
    position: {x: 120, y: 250},
    size: {width: 100, height: 100},
    attrs: {
      path: {
        d: 'M 50 0 L 0 20 0 80 50 100 100 80 100 20 z',
        fill: "white",
        stroke: "black",
        'stroke-width': 1,
        transform: 'rotate(90)'
      },
      '.type': {
        'font-size': 20,
        text: 'MV',
        'ref-x': .5,
        'ref-y': .5,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typein': {
        'font-size': 10,
        text: '',
        'ref-x': 0.00001,
        'ref-y': 0.99999,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typeout': {
        'font-size': 10,
        text: '',
        'ref-x': 0.99999,
        'ref-y': 0.99999,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      circle: {
        magnet: true,
        fill: 'green',
        r: 4,
        cy: 50,
        z: 0
      },
      '#input': {
        cx: -100
      }
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Task = joint.shapes.basic.Generic.extend({
  markup: '<g class="rotatable"><g class="scalable"><path/></g><text class="type"/><text class="typein"/><text class="typeout"/><text class="task"/><circle id="input"/><circle id="output"/></g>',
  type: 'Task',
  editor: {
    types: ['Human', 'Collection', 'Computation'],
    type: 'Human',
    task: '',
    description: '',
    typein: '',
    typeout: ''
  },
  defaults: joint.util.deepSupplement({
    type: 'basic.Path',
    position: {x: 20, y: 370},
    size: {width: 100, height: 64},
    attrs: {
      path: {
        d: 'M 0 0 L 256 0 L 256 64 L 0 64 z',
        fill: "white",
        stroke: "black", 'stroke-width': 1
      },
      '.type': {
        'font-size': 12,
        text: 'Human',
        'ref-x': .5,
        'ref-y': .20,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-style': 'italic',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.task': {
        'font-size': 14,
        text: 'Score',
        'ref-x': .5,
        'ref-y': .6,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typein': {
        'font-size': 10,
        text: '',
        'ref-x': 0.00001,
        'ref-y': 0.99999,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      '.typeout': {
        'font-size': 10,
        text: '',
        'ref-x': 0.99999,
        'ref-y': 0.99999,
        ref: 'path',
        'y-alignment': 'middle',
        'x-alignment': 'middle',
        fill: 'black',
        'font-family': 'Roboto, sans-serif',
        'font-variant': 'small-caps',
        'text-transform': 'capitalize'
      },
      circle: {
        magnet: true,
        fill: 'green',
        r: 4,
        cy: 32,
        z: 0
      },
      '#output': {
        cx: 100
      }
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.MapReduce = joint.shapes.basic.Generic.extend({
  markup: '<g> <g> <polyline class="st0" points="580.1,159.5 580.1,165.5 574.1,165.5 "/> <line class="st1" x1="561.9" y1="165.5" x2="58.2" y2="165.5"/> <polyline class="st0" points="52.1,165.5 46.1,165.5 46.1,159.5 "/> <line class="st2" x1="46.1" y1="147.7" x2="46.1" y2="12.4"/> <polyline class="st0" points="46.1,6.5 46.1,0.5 52.1,0.5 "/> <line class="st1" x1="64.3" y1="0.5" x2="568" y2="0.5"/> <polyline class="st0" points="574.1,0.5 580.1,0.5 580.1,6.5 "/> <line class="st2" x1="580.1" y1="18.3" x2="580.1" y2="153.6"/> </g> </g> <g> <polygon class="st3" points="552.3,128.2 528.6,80.8 552.3,33.2 599.7,33.2 623.4,80.8 599.7,128.2 "/> <path d="M599.4,33.8l23.5,47l-23.5,47h-46.8l-23.5-47l23.5-47H599.4 M600,32.8h-48l-24,48l24,48h48l24-48L600,32.8L600,32.8z"/> </g> <rect x="533.2" y="72.9" class="st4" width="85.5" height="15.8"/> <text transform="matrix(1 0 0 1 536.4902 83.5244)" class="st5 st6">Aggregation</text> <g> <polygon class="st3" points="24.3,128.2 0.6,80.8 24.3,33.2 71.7,33.2 95.4,80.8 71.7,128.2 "/> <path d="M71.4,33.8l23.5,47l-23.5,47H24.6l-23.5-47l23.5-47H71.4 M72,32.8H24l-24,48l24,48h48l24-48L72,32.8L72,32.8z"/> </g> <rect x="5.2" y="72.9" class="st4" width="85.5" height="15.8"/> <text transform="matrix(1 0 0 1 5.25 85.6553)" class="st5 st7">Generation</text> <g> <g> <line class="st0" x1="95.6" y1="81.5" x2="136.8" y2="81.5"/> <g> <path d="M142.9,81.5c-2.8,1.1-6.4,2.9-8.5,4.8l1.7-4.8l-1.7-4.8C136.5,78.6,140,80.4,142.9,81.5z"/> </g> </g> </g> <g> <g> <line class="st0" x1="481.1" y1="81.5" x2="522.3" y2="81.5"/> <g> <path d="M528.4,81.5c-2.8,1.1-6.4,2.9-8.5,4.8l1.7-4.8l-1.7-4.8C522,78.6,525.5,80.4,528.4,81.5z"/> </g> </g> </g> <rect x="143.6" y="33.5" class="st0" width="337.5" height="96"/> <g> <polyline class="st0" points="580.1,156.5 580.1,165.5 571.1,165.5 "/> <line class="st8" x1="553.3" y1="165.5" x2="64" y2="165.5"/> <polyline class="st0" points="55.1,165.5 46.1,165.5 46.1,156.5 "/> <line class="st9" x1="46.1" y1="140.2" x2="46.1" y2="17.7"/> <polyline class="st0" points="46.1,9.5 46.1,0.5 55.1,0.5 "/> <line class="st8" x1="72.9" y1="0.5" x2="562.2" y2="0.5"/> <polyline class="st0" points="571.1,0.5 580.1,0.5 580.1,9.5 "/> <line class="st9" x1="580.1" y1="25.8" x2="580.1" y2="148.3"/> </g> <g> <polygon class="st3" points="552.5,128 528.8,80.8 552.5,33.5 599.5,33.5 623.2,80.8 599.5,128 "/> <path d="M599.1,34.2l23.2,46.5l-23.2,46.5h-46.1l-23.2-46.5l23.2-46.5H599.1 M600,32.8h-48l-24,48l24,48h48l24-48L600,32.8 L600,32.8z"/> </g> <rect x="533.2" y="72.9" class="st4" width="85.5" height="15.8"/> <text transform="matrix(1 0 0 1 536.4902 83.5244)" class="st5 st6">Aggregation</text> <g> <polygon class="st3" points="24.5,128 0.8,80.8 24.5,33.5 71.5,33.5 95.2,80.8 71.5,128 "/> <path d="M71.1,34.2l23.2,46.5l-23.2,46.5H24.9L1.7,80.8l23.3-46.5H71.1 M72,32.8H24l-24,48l24,48h48l24-48L72,32.8L72,32.8z"/> </g> <rect x="5.2" y="72.9" class="st4" width="85.5" height="15.8"/> <text transform="matrix(1 0 0 1 5.25 85.6553)" class="st5 st7">Generation</text> <g> <line class="st0" x1="95.6" y1="81.5" x2="133.8" y2="81.5"/> <g> <path d="M142.9,81.5c-4.3,1.6-9.5,4.3-12.8,7.1l2.6-7.1l-2.6-7.1C133.3,77.2,138.6,79.9,142.9,81.5z"/> </g> </g> <g> <line class="st0" x1="481.1" y1="81.5" x2="519.3" y2="81.5"/> <g> <path d="M528.4,81.5c-4.3,1.6-9.5,4.3-12.8,7.1l2.6-7.1l-2.6-7.1C518.8,77.2,524.1,79.9,528.4,81.5z"/> </g> </g> <rect x="143.6" y="33.5" class="st10" width="337.5" height="96"/> <rect x="205.7" y="80.2" class="st4" width="215.3" height="16"/> <text transform="matrix(1 0 0 1 293.7012 93.75)" class="st11 st7">Task</text> <rect x="204.7" y="42.2" class="st4" width="215.3" height="16"/> <text transform="matrix(1 0 0 1 293.0527 55.75)" class="st12 st7">Type</text> <rect x="205.7" y="9.2" class="st4" width="215.3" height="16"/> <text transform="matrix(1 0 0 1 279.832 22.75)" class="st11 st7">Workers</text>',
  type: 'MapReduce',
  editor: {
    generation: '',
    taskType: '',
    taskText: '',
    aggregation: '',
    workers: ''
  },
  defaults: joint.util.deepSupplement({
    position: {x: 70, y: 600},
    size: {width: 624, height: 165},
    attr: {
      '.st0': {fill: 'white', stroke: 'black', 'stroke-miterlimit': 10},
      '.st1': {fill: 'white', stroke: 'black', 'stroke-miterlimit': 10, 'stroke-dasharray': 12.138},
      '.st2': {fill: 'white', stroke: 'black', 'stroke-miterlimit': 10, 'stroke-dasharray': 11.7692},
      '.st3': {fill: 'white'},
      '.st4': {fill: 'black'},
      '.st5': {'font-family': 'MyriadPro-Regular'},
      '.st6': {'font-size': 15},
      '.st7': {'font-size': 18},
      '.st8': {fill: 'white', stroke: 'black', 'stroke-miterlimit': 10, 'stroke-dasharray': 11.8605},
      '.st9': {fill: 'white', stroke: 'black', 'stroke-miterlimit': 10, 'stroke-dasharray': 10.8889},
      '.st10': {fill: 'white', stroke: 'black', 'stroke-miterlimit': 10},
      '.st11': {'font-family': 'Roboto-Medium'},
      '.st12': {'font-family': 'Roboto-MediumItalic'}
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});

var graph = new joint.dia.Graph;

var paperDOMElement = $('#paper');


var paper = new joint.dia.Paper({
    el: paperDOMElement,
    width: paperDOMElement.width(),
    height: paperDOMElement.height(),
    model: graph,
    gridSize: 15,
    drawGrid: "fixedDot",
    defaultLink: new joint.shapes.logic.Wire ({
        router: { name: 'normal' },
        connector: { name: 'rounded' },
        attrs: {

            '.marker-target': { fill: '#4b4a67', stroke: '#4b4a67', d: 'M 10 0 L 0 5 L 10 10 z' }
        },
        labels: [
            { position: 0.5, attrs: { text: { text: '', fill: 'black', 'font-family': 'sans-serif' }}}
        ],
        image: { 'ref-x': 2, 'ref-y': 2, ref: 'rect', width: 16, height: 16 }
    }),
});


paper.drawGrid();


var stencilGraph = new joint.dia.Graph,
  stencilPaper = new joint.dia.Paper({
    el: $('#stencil'),
    height: 450,
    width: 150,
    model: stencilGraph,
    interactive: false
  });

var stencilDecision = new joint.shapes.basic.Decision();
var stencilGenerator = new joint.shapes.basic.Generator();
var stencilAggregation = new joint.shapes.basic.Aggregation();
var stencilMapReduce = new joint.shapes.basic.MapReduce();
var stencilTask = new joint.shapes.basic.Task();


stencilGraph.addCells([stencilDecision,
  stencilGenerator,
  stencilAggregation,
  stencilMapReduce,
  stencilTask]);


stencilPaper.on('cell:pointerdown', function (cellView, e, x, y) {
  $('body').append('<div id="flyPaper" style="position:fixed;z-index:100;opacity:.7;pointer-event:none;"></div>');
  var flyGraph = new joint.dia.Graph,
    flyPaper = new joint.dia.Paper({
      el: $('#flyPaper'),
      model: flyGraph,
      height: cellView.model.attributes.size.height,
      width: cellView.model.attributes.size.width,
      interactive: false
    }),
    flyShape = cellView.model.clone(),
    pos = cellView.model.position(),
    offset = {
      x: x - pos.x,
      y: y - pos.y
    };

  var x2, y2;
  if (flyShape.type === "Decision") {
    x2 = 50;
    y2 = 0;
  } else if (flyShape.type === "Generator" || flyShape.type === "Aggregation") {
    x2 = 100;
    y2 = 0;
  } else {
    x2 = 0;
    y2 = 0;
  }
  flyShape.position(x2, y2);
  flyGraph.addCell(flyShape);
  $("#flyPaper").offset({
    left: e.pageX - offset.x,
    top: e.pageY - offset.y
  });
  $('body').on('mousemove.fly', function (e) {
    $("#flyPaper").offset({
      left: e.pageX - offset.x,
      top: e.pageY - offset.y
    });
  });
  $('body').on('mouseup.fly', function (e) {
    var x = e.pageX,
      y = e.pageY,
      target = paper.$el.offset();

    // Dropped over paper ?
    if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
      var s = flyShape.clone();
      s.position(x - target.left - offset.x + x2, y - target.top - offset.y + y2);
      if (s.type === 'Task') {
        s.attributes.size = {width: 256, height: 64};
        s.attributes.attrs["#output"].cx = 256;
      }
      graph.addCell(s);
    }
    $('body').off('mousemove.fly').off('mouseup.fly');
    flyShape.remove();
    $('#flyPaper').remove();
  });
});


//Copies from the export modal to our clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("#export").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  showAlert("success", "Exported successfuly  ", "");

}

var expElementos = [];
var expLinks = [];
//when we click to export button,
//we generate the JSON format of the graph we created so far
$('#exp').click(function () {
  if (isValid()) {
    document.getElementById('result').innerHTML = JSON.stringify(graph);
      // Save the cells in arrays
    var elementos = graph.getElements();
    var links = graph.getLinks();

    for (var i = 0; i < elementos.length; i++) {
      expElementos.push(elementos[i]);
    };

    for (var i = 0; i < links.length; i++) {
      expLinks.push(links[i]);
    };
  }

});

//when we click to import button and we want to import a model,
//we create the new graph
$('#imp').click(function () {
  var text = $("#comment").val();
  graph.fromJSON(JSON.parse(text));
    graph.clear();
    setTimeout(function () {
      for (var i = 0; i < expElementos.length; i++) {
        graph.addCell(expElementos[i]);
      };

      for (var i = 0; i < expLinks.length; i++) {
        graph.addCell(expLinks[i]);
      };
    }, 0);
  showAlert("success", "Loaded successfuly", "");  
});



// Highlight control
var highlightedCell = [];
var lastLink = [];

function highlightCell(cellView) {
  var cell = graph.getCell(cellView.model.id);
  if (cell.attributes.type === 'basic.Rect' || cell.attributes.type === 'basic.Path') {
    highlightedCell.forEach(function (cellView) {
      cellView.unhighlight();
    });
    highlightedCell = [];
    cellView.highlight();
    highlightedCell.push(cellView);
  }
}

$("#type").change(function () {
  if (!_.isEmpty(highlightedCell)) {
    var selectedType = this.options[this.options.selectedIndex].text;
    highlightedCell[0].model.attr('.type/text', selectedType);
    var cell = graph.getCell(highlightedCell[0].model.id);
    cell.editor.type = selectedType;
    if (cell.type === 'Generator') {
      if (cell.editor.type !== 'For each' && cell.editor.type !== '∞') {
        $('#generator-qt-input').css('display', 'block');
        if (cell.editor.type === 'N') {
          highlightedCell[0].model.attr('.type/text', $('#generator-qt').val());
        } else {
          highlightedCell[0].model.attr('.type/text', $('#generator-qt').val() + '+');
        }
      }
      else {
        $('#generator-qt-input').css('display', 'none');
      }
    } else {
      if (cell.type === 'Decision') {
        if (cell.editor.type === 'Loop') {
          $('#loop-condition-input').css('display', 'block');
          highlightedCell[0].model.attr('.condition/text', $('#loop-condition').val());
        }
        else {
          $('#loop-condition-input').css('display', 'none');
        }
      }
    }
  }
});

$("#typein").on('input',function(e){
  highlightedCell[0].model.attr('.typein/text', $('#typein').val());
});

$("#typeout").on('input',function(e){
  highlightedCell[0].model.attr('.typeout/text', $('#typeout').val());
});



$('#task').change(function () {
  if (!_.isEmpty(highlightedCell)) {
    highlightedCell[0].model.attr('.task/text', this.value);
    var cell = graph.getCell(highlightedCell[0].model.id);
    cell.task = this.value;
  }
});

$('#description').change(function () {
  if (!_.isEmpty(highlightedCell)) {
    var cell = graph.getCell(highlightedCell[0].model.id);
    cell.editor.description = this.value;
  }
});

$('#generator-qt').change(function () {
  if (!_.isEmpty(highlightedCell)) {
    var cell = graph.getCell(highlightedCell[0].model.id);
    if (cell.editor.type === 'N') {
      highlightedCell[0].model.attr('.type/text', this.value);
    } else if (cell.editor.type === 'N+') {
      highlightedCell[0].model.attr('.type/text', this.value + '+');
    }
    cell.editor.quantity = this.value;
  }
});

$('#loop-condition').change(function () {
  if (!_.isEmpty(highlightedCell)) {
    var cell = graph.getCell(highlightedCell[0].model.id);
    highlightedCell[0].model.attr('.condition/text', this.value);
    cell.editor.condition = this.value;
  }
});

function displayTypeEditor(cellView) {
  $('#type-selector').css('display', 'block');
  var selectTag = $("#type");
  selectTag.empty();
  var cell = graph.getCell(cellView.model.id);
  _.forEach(cell.editor.types, function (type) {
    selectTag.append("<option>" + type + "</option>");
  });
  selectTag.val(cell.editor.type);
}
function displayTaskEditor(cellView) {
  var cell = graph.getCell(cellView.model.id);
  if (!_.isUndefined(cell.editor.task)) {
    $('#task-input').css('display', 'block');
    $("#task").val(cellView.model.attr('.task/text'));
  }
}
function displayDescriptionEditor(cellView) {
  var cell = graph.getCell(cellView.model.id);
  if (!_.isUndefined(cell.editor.description)) {
    $('#description-input').css('display', 'block');
    $("#description").val(cell.editor.description);
  }
}
function displayGeneratorQuantity(cellView) {
  var cell = graph.getCell(cellView.model.id);
  if ((cell.type === 'Generator') && (cell.editor.type !== 'For each' && cell.editor.type !== '∞')) {
    $('#generator-qt-input').css('display', 'block');
    $("#generator-qt").val(cell.editor.quantity);
  } else {
    $('#generator-qt-input').css('display', 'none');
  }
}
function displayDecisionEditor(cellView) {
  var cell = graph.getCell(cellView.model.id);
  if ((cell.type === 'Decision') && (cell.editor.type === 'Loop')) {
    $('#loop-condition-input').css('display', 'block');
  } else {
    $('#loop-condition-input').css('display', 'none');
  }
}


function displayToken(cellView) {
  var cell = graph.getCell(cellView.model.id);
   if (!cell.isLink()) {
    $('#token').css('display', 'block');
  } else {
    $('#token').css('display', 'none');
  }
}


function showOptions(cellView) {
  displayTypeEditor(cellView);
  displayTaskEditor(cellView);
  displayDescriptionEditor(cellView);
  displayGeneratorQuantity(cellView);
  displayToken(cellView);

}

graph.on('change:source change:target', function(link) {

  if (link.get('source').id && link.get('target').id) {
      // both ends of the link are connected.
      $('#link-input').css('display', 'block');
      link.attr('text/text', $('#link').val());
      lastLink.push(link);
  }
});

$("#link-input").on('input',function(e){
  lastLink[0].attr('text/text', $('#link').val());
});

paper.on('cell:pointerdown', function (cellView) {
  hideOptions();
  var cell = graph.getCell(cellView.model.id);
  if (!cell.isLink()) {
    highlightCell(cellView);
    showOptions(cellView);
    lastLink.pop();
  }
  else{
    console.log("pushing link");
    lastLink.push(cell);
    $('#link-input').css('display', 'block');
  }
});

function hideOptions() {
  $('#type-selector').css('display', 'none');
  $('#task-input').css('display', 'none');
  $('#description-input').css('display', 'none');
  $('#generator-qt-input').css('display', 'none');
  $('#loop-condition-input').css('display', 'none');
  $('#link-input').css('display', 'none');
  $('#token').css('display', 'none');


}

paper.on('blank:pointerclick', function () {
  if (!_.isEmpty(highlightedCell)) highlightedCell[0].unhighlight();
  hideOptions();
  lastLink.pop();
});

function showAlert(type, boldMessage, message) {
  $('<div id="floating_alert" class="alert alert-' + type + ' fade in">' +
    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
    '<b>' + boldMessage + ' </b>' + message + '&nbsp;&nbsp;</div>').appendTo('body');
  setTimeout(function () {
    $(".alert").alert('close');
  }, 3000);
}
function generatorsConnectToTask() {
  var elements = graph.getElements();
  var incorrect = false;
  _.forEach(elements, function (element) {
    if (element.type === 'Generator') {
      var neighbors = graph.getNeighbors(element, {
        outbound: true
      });
      if (neighbors.length > 1) {
        showAlert("danger", "Invalid diagram: ", "Generators must have one output");
        incorrect = true;
      }
      if (neighbors.length === 1) {
        if (neighbors[0].type !== 'Task') {
          showAlert("danger", "Invalid diagram:", "Generators must be connected to tasks");
          incorrect = true;
        }
      }
    }
  });
  return incorrect;
}

function decisionsAreInvalid() {
  var elements = graph.getElements();
  var invalid = false;
  _.forEach(elements, function (element) {
    if (element.type === 'Decision') {
      var neighbors = graph.getNeighbors(element, {inbound: true});
      console.log(neighbors.attributes.typein);
      if (neighbors.length === 0) {
        showAlert("danger", "Invalid diagram:", "Decision nodes must have input");
        invalid = true;
      }
      else if (element.editor.type === 'And' || element.editor.type === 'Xor') {
        if (neighbors.length <= 1) {
          showAlert("danger", "Invalid diagram:", "And or Xor must have two inputs");
          invalid = true;
        }
      }
      else if (element.editor.type === 'Loop') {
        if (neighbors.length !== 1) {
          showAlert("danger", "Invalid diagram:", "Loops must have an input");
          invalid = true;
        }
      }
    }
  });
  return invalid;
}


function isValid() {
  if (generatorsConnectToTask()) {
    return false;
  } else if (decisionsAreInvalid()) {
    return false;
  } else if (isThereAnyCycle()) {
    showAlert("info", "Notice:", "This diagram contains cycles, is it possible that never halts");
    return true;
  } else {
    showAlert("success", "Valid diagram:", "Everything is correct");
    return true;
  }
}


/*Cycle detection*/
function isThereAnyCycle() {
  var visited = [];
  var level = 0;
  var _elements = graph.getElements();
  for (var i = 0; i < _elements.length; i++) {
    var elem = _elements[i];
    if (graph.getPredecessors(elem).length !== 0 && !hasCycle(elem, visited, level)) {
      return false;
    }
    /*if (!hasCycle(elem, visited, level)){
     return false;
     }*/
  }
  return true;
}

function hasCycle(comp, visited, level) {
  var neighbors = graph.getNeighbors(comp, {
    outbound: true
  }), i;

  if (visited.indexOf(comp.id) > -1)
    return true;

  visited.push(comp.id);

  for (i = 0; i < neighbors.length; i++)
    if (hasCycle(neighbors[i], visited.slice(), ++level))
      return true;
  return false;
}



function deleteGraph() {
  _.each(graph.getElements(), function (c) {
    c.remove();
  });
  graph.clear();
}


$('#delete').click(function () {
  deleteGraph();
});


$(document).unbind('keydown').bind('keydown', function (event) {
    if (event.keyCode === 8) {
        var doPrevent = true;
        var types = ["text", "password", "file", "search", "email", "number", "date", "color",
         "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
        var d = $(event.srcElement || event.target);
        var disabled = d.prop("readonly") || d.prop("disabled");
        if (!disabled) {
            if (d[0].isContentEditable) {
                doPrevent = false;
            } else if (d.is("input")) {
                var type = d.attr("type");
                if (type) {
                    type = type.toLowerCase();
                }
                if (types.indexOf(type) > -1) {
                    doPrevent = false;
                }
            } else if (d.is("textarea")) {
                doPrevent = false;
            }
        }
        if (doPrevent) {
            event.preventDefault();
            return false;
        }
    }
    else if (event.keyCode === 46) {
        if (!_.isEmpty(highlightedCell)) {
          var cell = graph.getCell(highlightedCell[0].model.id);
          graph.removeCells(cell);
          hideOptions();

        }

    }
  });

var currentZoomLevel = 1.0;
var paperScaling = .1;
var previousValue = 5;

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');

  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(range-slider__value.attr('value'));
      console.log(value.attr('value'));
    });

      range.on('input', function(){
      $(this).next(value).html(this.value);
      currentZoomLevel = currentZoomLevel + (this.value - previousValue)* paperScaling;
      paper.scale(currentZoomLevel);  
      previousValue = this.value;
    });
  });
};

rangeSlider();


