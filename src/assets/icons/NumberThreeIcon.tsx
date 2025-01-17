const NumberThreeIcon = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke={fill} />
      <path
        d="M11.5635 12.124H10.7655V11.424L13.8595 8.372H9.05748V7.476H15.1335V8.288L12.1375 11.27C14.0135 11.368 15.3575 12.558 15.3575 14.378C15.3575 16.366 13.9015 17.668 11.8715 17.668C9.89748 17.668 8.56748 16.45 8.56748 14.448H9.56148C9.56148 15.89 10.4575 16.758 11.8715 16.758C13.3695 16.758 14.3355 15.806 14.3355 14.35C14.3355 12.978 13.3555 12.124 11.5635 12.124Z"
        fill={fill}
      />
    </svg>
  );
};

export default NumberThreeIcon;
