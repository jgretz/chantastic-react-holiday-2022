import Item from "./item";

const todoList = ["Wake Up", "Run", "Shower"];

const page = () => {
  const items = todoList.map((item) => <Item key={item} title={item} />);

  return <ul>{items}</ul>;
};

export default page;
