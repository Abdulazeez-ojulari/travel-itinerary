const NumberTwoIcon = ({ fill }: { fill?: string }) => {
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
        d="M15.3073 17.5H8.69934V16.702L11.9053 13.902C13.7533 12.292 14.2293 11.592 14.2293 10.402C14.2293 9.044 13.4173 8.218 12.0873 8.218C10.7013 8.218 9.79134 9.226 9.74934 10.78H8.74134C8.79734 8.68 10.1273 7.294 12.1013 7.294C13.9913 7.294 15.2513 8.512 15.2513 10.346C15.2513 11.802 14.5933 12.768 12.5913 14.518L10.2533 16.562H15.3073V17.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default NumberTwoIcon;
