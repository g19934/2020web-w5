const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'それは寒い日のことだった :insertx: 歩いていたらイケメンがいて、 :inserty:、楽しい日も僅かだった :insertz:ボブはイケメンにあったが動じなかった。 :insertx: ,まあ今日は暑いから。';
let insertX = ['寂しい','偉大なる父','るんるんホリデー'];
let insertY = ['ハッピーハウス','ふわふわ島','くるるん道路'];
let insertZ = ['困惑した','妖怪のせいで転んだ','早く家に帰りましょう。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.0714286) + ' キロ';
    const temperature =  Math.round((94-32) * 5 / 9) + '度';
    newStory = newStory.replace('94 度',temperature);
    newStory = newStory.replace('300 ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
