const PrevBtn = ({className}) => {
  return (
    <svg
    className={`${className}`}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
        fill="black"
        fill-opacity="0.200748"
      />
      <path
        d="M28.8017 33.3689H39.5374C39.773 33.3689 39.9641 33.1779 39.9641 32.9422V30.9511C39.9641 30.7155 39.773 30.5244 39.5374 30.5244H28.8017V28.8868C28.8017 28.1265 27.8826 27.7458 27.345 28.2834L24.2851 31.3433C23.9518 31.6765 23.9518 32.2168 24.2851 32.55L27.345 35.6099C27.8825 36.1475 28.8017 35.7668 28.8017 35.0065V33.3689Z"
        fill="white"
      />
    </svg>
  );
};

export default PrevBtn;
