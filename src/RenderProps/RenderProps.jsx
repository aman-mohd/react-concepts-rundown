const Child = (props) => {
  return <h1>Hello {props.name}, I am a child from render props</h1>;
};

const Parent = ({ render, ...rest }) => {
  return render;
};

const CallApp = ({ name }) => {
  return <Parent render={<Child name={name} />} />;
};

export default CallApp;
