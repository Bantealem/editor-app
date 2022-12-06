import uuid from "react-uuid";

export const changeContentAction = (id, content) => {
  return {
    type: "CHANGE",
    payload: {
      id,
      content,
    },
  };
};
export const addNewContent = (content) => {
  let sanitizedContent = content.content;

  if (content.content.startsWith("/1")) {
    sanitizedContent = sanitizedContent.replace("/1", "");
  }
  return {
    type: "ADD",
    payload: {
      id: uuid(),
      content: sanitizedContent,
      type: content.content.startsWith("/1")
        ? content.type || "header"
        : "normal",
    },
  };
};

export const deleteContent = (id) => {
  return {
    type: "DELETE",
    payload: {
      id,
    },
  };
};