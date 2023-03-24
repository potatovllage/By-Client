interface Props {
  color?: boolean;
}

const Message = ({ color }: Props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8 0H2.2C0.99 0 0.011 0.99 0.011 2.2L0 22L4.4 17.6H19.8C21.01 17.6 22 16.61 22 15.4V2.2C22 0.99 21.01 0 19.8 0ZM17.6 13.2H4.4V11H17.6V13.2ZM17.6 9.9H4.4V7.7H17.6V9.9ZM17.6 6.6H4.4V4.4H17.6V6.6Z"
        fill={color ? "#3F3C42" : "#DBD7E0"}
      />
    </svg>
  );
};

export default Message;
