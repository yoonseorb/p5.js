function setup() {
  createCanvas(400, 400);
  background(200); 
  stroke(0, 20); // 선을 투명하게 그리기
  
  /*
  프로그램이 시작하면 자동으로 mouseX와 mouseY 변수가 0으로 초기화된다. 
  따라서 아래 2 문장을 사용하지 않으면, 
  화면의 왼쪽 위에서 중심으로 이르는 선이 그려진다.
  */
  mouseX = width/2;
  mouseY = height/2; 
}

function draw() {
  line(width/2, height/2, mouseX, mouseY);
}