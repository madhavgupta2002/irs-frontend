const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
      return { __html: html };
  }
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength);
    }
    return str;
  }
  
  // Accessing data from _source
  const { _source } = data;

  return (
      <div className="flex flex-col py-3 max-w-[700px]">
          <div
              className="group cursor-pointer"
              onClick={() => window.open(_source.link)}
          >
              <div className="group-hover:underline text-xl text-[#1a0dab] pt-2">
                  {_source.title}
              </div>
              <div className="text-sm text-[#4d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(truncateString(_source.data, 300))} />
          </div>
      </div>
  );
};

export default SearchedItemTemplate;
