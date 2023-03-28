interface Props {
  color?: boolean;
}

const Report = ({ color }: Props) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6667 18.7667V12.1667C17.6667 10.708 17.0872 9.30903 16.0558 8.27758C15.0243 7.24613 13.6254 6.66666 12.1667 6.66666C10.708 6.66666 9.30903 7.24613 8.27758 8.27758C7.24613 9.30903 6.66667 10.708 6.66667 12.1667V18.7667M17.6667 18.7667H6.66667M17.6667 18.7667C18.2501 18.7667 18.8097 18.9984 19.2223 19.411C19.6349 19.8236 19.8667 20.3832 19.8667 20.9667V23.1667H4.46667V20.9667C4.46667 20.3832 4.69845 19.8236 5.11103 19.411C5.52361 18.9984 6.08319 18.7667 6.66667 18.7667M22.0667 12.1667H23.1667M19.3167 3.91666L18.7667 4.46666M1.16667 12.1667H2.26667M12.1667 1.16666V2.26666M4.38857 4.38856L5.16627 5.16626M12.1667 12.1667V18.7667"
        stroke={color ? "#3F3C42" : "#DBD7E0"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Report;
