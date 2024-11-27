
const useTextFormat = () => {
  const convertCamelCaseToTitle = (title: string) => {
    const result = title.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toLowerCase() + result.slice(1).replaceAll(" ", "-");
  };

  return { convertCamelCaseToTitle };
};

export default useTextFormat;
