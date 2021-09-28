// main.js

// 위치 데이터
const data = [
  {
    name: "본사",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.852883443978!2d127.12317694993224!3d37.483292746450914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813083381!5m2!1sko!2skr"
  },
  {
    name: "중앙연구소",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.151227338894!2d127.04089031558283!3d37.2915495475856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b5e4e7b3a59%3A0xfec2dee7857d2850!2z7ZmY7J247KCc7JW97KSR7JWZ7Jew6rWs7IaM!5e0!3m2!1sko!2skr!4v1632813707756!5m2!1sko!2skr"
  },
  {
    name: "서울연구소",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.852883443978!2d127.12317694993224!3d37.483292746450914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813083381!5m2!1sko!2skr"
  },
  {
    name: "공장",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12740.580135033473!2d127.24506083991704!3d37.030188108538916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b35a007585ea7%3A0x2a06dcf987ece719!2z7ZmY7J247KCc7JW97JWI7ISx6rO17J6l!5e0!3m2!1sko!2skr!4v1632813848467!5m2!1sko!2skr"
  }
]

// 지도 변경 함수(지도번호)
function changeMap(num) {
  var name = data[num].name;
  var url = data[num].url;
  // console.log(name, url) *개발중일 때는 항상 console로 확인하고 완료하면 지운다.*

  $('#map iframe').attr('src', url);

  // 버튼 스타일 지움
  $('.tab-group .btn').removeClass('active');
  // 버튼 active
  $('.tab-group .btn')
  .eq(num)
  .addClass('active');
}



