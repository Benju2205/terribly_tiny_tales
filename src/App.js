import Background from "./Components/Background";
import UserDetail1 from "./Components/UserDetail1";
import Header from "./Components/Header";
import PostsNumber from "./Components/PostsNumber";
import Posts from "./Components/Posts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Header />} />
      </Routes>
      <Background />
      <UserDetail1 />
      <PostsNumber />
      <Posts />
    </>
  );
}

export default App;
