var ctx,
backlog = [],
coords = [],
currentPos,
finished,
started = false

size = 10,
speed = 0,
c = [0,0,0],
bad = [
  [0,0,2],
  [0,0,3]
]
//255
//0
//0->255
//255->0
while(!c.map(a=>a>1).includes(true) || bad.map(a=>JSON.stringify(a) == JSON.stringify(c)).includes(true)){
  c = [
    Math.floor(Math.random() * Math.floor(4)),
    Math.floor(Math.random() * Math.floor(4)),
    Math.floor(Math.random() * Math.floor(4))
  ]
  console.log(c)
}

export function startTracker(){
  if(!started){
    started = true
    ctx = $('#Recursive')[0].getContext('2d')
    ctx.canvas.width  = window.innerWidth
    ctx.canvas.height = window.innerHeight
    
    move(((ctx.canvas.width%size)/2)+(size/2),((ctx.canvas.height%size)/2)+(size/2))
  
    moveTracker()
  }
}

function moveTracker(){
  var direction = currentPos.moves[Math.floor(Math.random()*currentPos.moves.length)]
  if(direction){
    var newPos = offset(currentPos.x, currentPos.y, direction)
    move(newPos.x, newPos.y, direction)
  }else{
    for(i=backlog.length-1;i>=0;i--){
      var backPos = JSON.parse(backlog[i])
      if(checkMoves(backPos.x, backPos.y).length){
        var found = {x:backPos.x, y: backPos.y, moves:checkMoves(backPos.x, backPos.y)}
        var newDir = found.moves[Math.floor(Math.random()*found.moves.length)]
        var newPos = offset(found.x, found.y, newDir)
        move(newPos.x, newPos.y, newDir)
        break
      }else{
        backlog.pop()
      }
      if(i == 0){
        finished = true
      }
    }
  }
  if(!finished){
    setTimeout(()=>{
      moveTracker()
    }, speed)
  }else{
    console.log('finished')
  }
}

function move(x, y, dir){
  currentPos = {x:x, y:y,moves:checkMoves(x, y)}
  var drawPos = trail(x, y, dir)

  function r(a){
    var c = [
      'FF',
      '00',
      Math.floor((Math.floor((x/ctx.canvas.width)*255)+Math.floor((y/ctx.canvas.height)*255))/2).toString(16),
      (255-Math.floor((Math.floor((x/ctx.canvas.width)*255)+Math.floor((y/ctx.canvas.height)*255))/2)).toString(16)
    ]
    return c[a].length > 1 ? c[a] : '0' + c[a]
  }

  ctx.fillStyle = `#${r(c[0])}${r(c[1])}${r(c[2])}`

  ctx.fillRect(drawPos.x-(size/2), drawPos.y-(size/2), drawPos.sx - (size/10), drawPos.sy - (size/10))

  coords.push(JSON.stringify({x:x,y:y}))
  backlog.push(JSON.stringify({x:x,y:y}))
}

function trail(x, y, dir){
  if(dir == 'left')
    return {x:x,y:y,sx:size+(size/10)+1,sy:size}
  if(dir == 'right')
    return {x:x-(size/10)-1,y:y,sx:size+(size/10)+1,sy:size}
  if(dir == 'up')
    return {x:x,y:y,sx:size,sy:size+(size/10)+1}
  if(dir == 'down')
    return {x:x,y:y-(size/10)-1,sx:size,sy:size+(size/10)+1}
  return {x:x,y:y,sx:size,sy:size}
}

function checkMoves(x, y){
  var goodMoves = []
  Array('left','right','up','down').map((a)=>{
    var newPos = offset(x,y,a)
    if(!coords.includes(JSON.stringify(newPos))){
      if(newPos.x >= 0-size){
        if(newPos.x <= ctx.canvas.width + size){
          if(newPos.y >= 0-size){
            if(newPos.y <= ctx.canvas.height + size){
              goodMoves.push(a)
            }
          }
        }
      }
    }
  })
  return goodMoves
}

function offset(x, y, dir){
  var offsets = {
    left(){
      return {x:x - size, y:y}
    },
    right(){
      return {x:x + size, y:y}
    },
    up(){
      return {x:x, y:y - size}
    },
    down(){
      return {x:x, y:y + size}
    }
  }
  return offsets[dir]()
}
