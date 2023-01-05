import { Button } from "./components/Button";
import { ContentBlurBox } from "./components/ContentBlurBox";
import { Python } from "./svg/PythonImg";
import { Together } from "./components/Together";
import { Javascript } from "./svg/JsImg";
import { Cpp } from "./svg/CppImg";
import { Selenium } from "./svg/SeleniumImg";
import { Reactjs } from "./svg/ReactImg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>
        도담중학교
        <br />
        프로그래밍
        <br />
        동아리
        <br />
        <span className="mint">SEMICOLON</span>
      </h1>
      <span className="hello">
        프로그래밍은 재미있지만 엔트리만 하기 지겹다면,
        <br />
        저희 동아리에 들어오세요. javascript, python, c++과 같이
        <br />
        자신이 원하는 프로그래밍 언어를 쉽게 배워요!
      </span>
      <div id="lang_li">
        {[<Python />, <Javascript />, <Cpp />].map((ele) => (
          <div className="lang_info">
            <div className="langs">{ele}</div>
            <div
              className="shadow"
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#26E0C8",
                borderRadius: "999px",
                filter: "blur(50px)"
              }}
            />
          </div>
        ))}
      </div>
      <div id="round" />
      <Button />
      <div className="cbb">
        <ContentBlurBox
          title="이름은 왜 세미콜론일까?"
          content="   ;(세미콜론)은 우리에게 익숙하지 않은 기호이지만,nline
프로그래밍에서 문장 끝에 ;을 쓰는 것은 필수적이죠.nline
이를 통해 프로그래밍으로 더 중요해지는 동아리라는
뜻을 가지게 되었습니다."
        />
        <ContentBlurBox
          title="프로그래밍은 재미없지 않을까?"
          content="  문법을 배우는 것은 재미있는 게 아니죠. 하지만nline재미있는 결과물을 보는 것,
        그리고 내가 만든 앱을nline남에게 보여주는 것, 힘들게 해결한 부분을 보는 것이nline프로그래밍이 재미있는 이유입니다."
        />
      </div>
      <div className="tog_body">
        <h2 className="tog_title">함께 만들 수 있는 것</h2>
        <ul>
          <Together
            src={[<Python />, <Selenium />]}
            content={["오토 클릭 앱", "웹 크롤러"]}
          />
          <Together
            src={[<Javascript />, <Reactjs />]}
            content={["웹 사이트", "크롬 앱 도배기"]}
          />
          <Together
            src={[<Cpp />]}
            content={["아두이노", "알고리즘 문제풀이"]}
          />
        </ul>
      </div>
      <h4>재미있는 앱 많이 만들어요!</h4>
      <Button />
    </>
  );
};

export default Home;
