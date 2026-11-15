import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">Handong Global University OSS 22300650 전도원</p>
          <h1>2-2 Semester Courses</h1>
          <p className="subtitle">수강 과목 관리 페이지</p>
        </div>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
