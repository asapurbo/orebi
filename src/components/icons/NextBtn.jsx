const NextBtn = ({className}) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0Z"
        fill="black"
        fill-opacity="0.200748"
      />
      <path
        d="M35.1983 30.6311H24.4626C24.227 30.6311 24.0359 30.8221 24.0359 31.0578V33.0489C24.0359 33.2845 24.227 33.4756 24.4626 33.4756H35.1983V35.1132C35.1983 35.8735 36.1174 36.2542 36.655 35.7166L39.7149 32.6567C40.0482 32.3235 40.0482 31.7832 39.7149 31.45L36.655 28.3901C36.1175 27.8525 35.1983 28.2332 35.1983 28.9935V30.6311Z"
        fill="white"
      />
    </svg>
  );
};

export default NextBtn;
