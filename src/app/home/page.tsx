import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex justify-between">
        <Link href="/auth/login">로그인</Link>
        <Link href="/auth/signup">회원가입</Link>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">명언</h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            내 목표 / D-day 표시기능 추가
          </h2>
          <p>기본정보 입력할 때 목표 같이 적기</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            달력 - todo. 루틴 달성에 따른 이모티콘 자동 표시
          </h2>
          <div className="mb-2">루틴번째~~~하셨나요?</div>
          <div className="mb-2">오늘 ~~~일을 해야해요!</div>
          <div>못한 루틴 1번째 어제는 ~~~를 못했어요. 오늘은 달성해봐요</div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            포스트작성 (루틴, 다이어리, Todo)
          </h2>
          {/* <div>
            <p>&lt;대화창&gt;</p>
            <p>어제 달성한 것 -> 칭찬</p>
            <p>어제 달성하지 못한 것 -> 격려</p>
            <p>오늘의 첫번째 루틴 -> 동기부여</p>
            <p>오늘 해야 할 일 -> 각성</p>
          </div> */}
        </div>
        <div className="flex justify-around mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href="/routine">루틴</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href="/diary">Diary</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href="/todo">todo</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href="/mypage">Mypage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
