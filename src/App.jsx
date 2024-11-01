import { useEffect, useState } from "react";

function App() {
  const [successed, setSuccessed] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
  }, [successed]);
  
  const postRequest = async (title, con) => {
    return fetch("http://localhost:8080/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: con,
      }),
    });
  }

  const getRequest = async () => {
    return fetch("http://localhost:8080/api/articles");
  }

  const isTestSuccessed = async (title, con) => {
    const post = await postRequest(title, con);
    const postBody = await post.json();
    console.log(postBody);

    const res = await getRequest();
    console.log(res.status);
    const data = await res.json();
    console.log(data);

    if(data[0].title == title && data[0].content == con) {
      setSuccessed(true);
      setTitle(title);
      setContent(con);
      return true;
    } else {
      setSuccessed(false);
      return false;
    }
  }

    return (
      <>
      <button onClick={() => {
        isTestSuccessed("working?", "maybe working");
      }}>
        test
      </button>

      {successed && <p>successed! {title} : {content}</p>}
      </>
    )
}

export default App
