class Stat{
  constructor(competenze)
  {
    this.competenze = competenze;
  }

  draw(){
    let vertices_number = 0
    // this.competenze.forEach((e)=>{
    //   vertices_number += e['indicators'].length
    // })
    vertices_number = this.competenze.length    
    let vertices = polygon(width/2,width/2,width/2, vertices_number)
    vertices.forEach((e)=>{
      line(width/2,height/2,e[0], e[1])
    })
    saveFrames('frame', 'png', 0.1, 10, printFrames)
  }
}

function printFrames(frames) {
  for (let frame of frames) {
    print(frame);
    var img = document.createElement("img");
    img.src = frame['imageData'];
    document.body.appendChild(img);
    go = true;
    background(get_color("--background"))
  }
}