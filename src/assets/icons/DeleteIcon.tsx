const DeleteIcon = ({
  fill = "#322E85",
  width = "16",
  height = "16",
}: {
  fill?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.19518 2.19559C6.32021 2.07056 6.48977 2.00033 6.66659 2.00033H9.33325C9.51006 2.00033 9.67963 2.07056 9.80466 2.19559C9.92968 2.32061 9.99992 2.49018 9.99992 2.66699V3.33366H11.3333V2.66699C11.3333 2.13656 11.1225 1.62785 10.7475 1.25278C10.3724 0.877706 9.86369 0.666992 9.33325 0.666992H6.66659C6.13615 0.666992 5.62745 0.877706 5.25237 1.25278C4.8773 1.62785 4.66659 2.13656 4.66659 2.66699V3.33366H5.99992V2.66699C5.99992 2.49018 6.07016 2.32061 6.19518 2.19559ZM3.33325 3.33366H1.99992C1.63173 3.33366 1.33325 3.63214 1.33325 4.00033C1.33325 4.36852 1.63173 4.66699 1.99992 4.66699H2.66659V13.3337C2.66659 13.8641 2.8773 14.3728 3.25237 14.7479C3.62744 15.1229 4.13615 15.3337 4.66659 15.3337H11.3333C11.8637 15.3337 12.3724 15.1229 12.7475 14.7479C13.1225 14.3728 13.3333 13.8641 13.3333 13.3337V4.66699H13.9999C14.3681 4.66699 14.6666 4.36852 14.6666 4.00033C14.6666 3.63214 14.3681 3.33366 13.9999 3.33366H12.6666C13.0348 3.33366 13.3333 3.63214 13.3333 4.00033V4.66699H11.9999V13.3337C11.9999 13.5105 11.9297 13.68 11.8047 13.8051C11.6796 13.9301 11.5101 14.0003 11.3333 14.0003H4.66659C4.48977 14.0003 4.32021 13.9301 4.19518 13.8051C4.07016 13.68 3.99992 13.5105 3.99992 13.3337V4.66699H2.66659V4.00033C2.66659 3.63214 2.96506 3.33366 3.33325 3.33366Z"
        fill={fill}
      />
      <path
        d="M12.6666 3.33366H11.3333H9.99992H5.99992H4.66659H3.33325C2.96506 3.33366 2.66659 3.63214 2.66659 4.00033V4.66699H3.99992H11.9999H13.3333V4.00033C13.3333 3.63214 13.0348 3.33366 12.6666 3.33366Z"
        fill={fill}
      />
    </svg>
  );
};

export default DeleteIcon;