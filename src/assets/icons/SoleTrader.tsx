const SoleTraderIcon = ({
  className,
  fill,
}: {
  className: string;
  fill?: string;
}) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8C6.55228 8 7 8.44771 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12C10.7956 12 11.5587 11.6839 12.1213 11.1213C12.6839 10.5587 13 9.79565 13 9C13 8.44771 13.4477 8 14 8C14.5523 8 15 8.44771 15 9C15 10.3261 14.4732 11.5979 13.5355 12.5355C12.5979 13.4732 11.3261 14 10 14C8.67392 14 7.40215 13.4732 6.46447 12.5355C5.52678 11.5979 5 10.3261 5 9C5 8.44771 5.44772 8 6 8Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C3.68524 0 3.38885 0.148194 3.2 0.4L0.206063 4.39192C0.0768168 4.56041 0 4.77123 0 5V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V5C20 4.77122 19.9232 4.56038 19.7939 4.39188L16.8 0.4C16.6111 0.148194 16.3148 0 16 0H4ZM2 6H1C0.447715 6 0 5.55228 0 5C0 4.78363 0.0701779 4.5731 0.2 4.4L0.206063 4.39192C0.388843 4.15363 0.676481 4 1 4H3L2 5.33333V6ZM2 6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6ZM3 4L4.5 2H15.5L17 4H3Z"
        fill={fill}
      />
      <path
        d="M0.2 4.4C0.0701779 4.5731 0 4.78363 0 5C0 5.55228 0.447715 6 1 6H2V5.33333L3 4H1C0.676481 4 0.388843 4.15363 0.206063 4.39192L0.2 4.4Z"
        fill={fill}
      />
    </svg>
  );
};

export default SoleTraderIcon;