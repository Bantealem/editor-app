import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewContent, changeContentAction, deleteContent } from "../actions";
import "./Home.css";
import Header from "./header";

const Home = () => {
      const [newContent, setNewContent] = useState({ content: "" });
  const contents = useSelector((state) => state);
  const [showPopUp, setSHowPopUp] = useState();
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmitNewContent = (e) => {
    e.preventDefault();
    dispatch(addNewContent(newContent));
    setNewContent({ content: "" });
  };
  if (!contents) {
    return <></>;
  }
  return (
    <div className="Home">
      <Header />
      {contents && (
        <div className="content">
          {contents.map((content) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                key={content.id}
              >
                <input
                  onChange={(e) => {
                    dispatch(changeContentAction(content.id, e.target.value));
                    if (e.target.value === "") {
                      dispatch(deleteContent(content.id));
                    }
                  }}
                  type="text"
                  value={content.content}
                  style={{
                    fontSize:
                      content.type === "header"
                        ? 32
                        : content.type === "extended header"
                        ? 40
                        : 14,
                    backgroundColor: "#eeeeee",
                    border: "1px solid #eeeeee",
                    outline: "none",
                    borderRadius: 5,
                    padding: "5px 10px",
                    marginBottom: 10,
                    width: "100%",
                    color:
                      content.type === "extended header" ? "#5757ee" : "black",
                  }}
                />
              </form>
            );
          })}
        </div>
      )}

      <form onSubmit={handleSubmitNewContent} style={{ margin: 50 }}>
        <input
          ref={inputRef}
          onChange={(e) => {
            setNewContent({ ...newContent, content: e.target.value });
            if (e.target.value === "/1") {
              setSHowPopUp(true);
            } else {
              setSHowPopUp(false);
            }
          }}
          type="text"
          value={newContent.content}
          placeholder="Add new content here."
          style={{
            fontSize: 14,
            backgroundColor: "#eeeeee",
            border: "1px solid #eeeeee",
            outline: "none",
            borderRadius: 5,
            padding: "20px 10px",
            marginBottom: 10,
            width: "100%",
          }}
        />
      </form>

      {
        <div
          className="selector-container"
          style={{
            opacity: showPopUp ? 1 : 0,
            height: 100,
            width: 200,
            position: "absolute",
            bottom: -120,
            left: 50,
            border: "1px solid #e4e4e4",

            borderRadius: 5,
          }}
        >
          <p
            onClick={() => {
              setSHowPopUp(false);
              setNewContent({
                ...newContent,
                type: "header",
              });
              inputRef.current.focus();
            }}
            className="selector"
            style={{
              color: "#444",
              borderBottom: "1px solid #f0f0f0",
              cursor: "pointer",
            }}
          >
            Heading
          </p>
          
          <p
            onClick={() => {
              setSHowPopUp(false);
              setNewContent({
                ...newContent,
                type: "extended header",
              });
              inputRef.current.focus();
            }}
            className="selector"
            style={{
              color: "#444",
              borderBottom: "1px solid #f0f0f0",
              cursor: "pointer",
            }}
          >
            Extended Heading
          </p>
        </div>
      }
    </div>
  );
}

export default Home;