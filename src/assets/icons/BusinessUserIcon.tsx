const BusinessUserIcon = ({
  className,
  fill,
}: {
  className: string;
  fill?: string;
}) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C2.44772 6 2 6.44772 2 7V17C2 17.5523 2.44772 18 3 18H19C19.5523 18 20 17.5523 20 17V7C20 6.44772 19.5523 6 19 6H3ZM0 7C0 5.34315 1.34315 4 3 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H3C1.34315 20 0 18.6569 0 17V7Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.87868 0.87868C7.44129 0.31607 8.20435 0 9 0H13C13.7956 0 14.5587 0.31607 15.1213 0.87868C15.6839 1.44129 16 2.20435 16 3V19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H9C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V3C6 2.20435 6.31607 1.44129 6.87868 0.87868Z"
        fill={fill}
      />
    </svg>
  );
};

export default BusinessUserIcon;
