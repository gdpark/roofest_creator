import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>칼라강판 견적 생성기</h1>
        <div>바닥평수</div>
        <div>지붕종류</div>
        <div>장비유무</div>
        <div>
          <button type="button">계산하기</button>
        </div>
      </div>
    </main>
  );
}
