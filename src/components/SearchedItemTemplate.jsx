const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }
  function replace(mystr) {
    let result = '';

    for (let i = 0; i < mystr.length - 1; i++) {
      if (mystr[i] == "\"" || (mystr[i] == "\\" && mystr[i + 1] == 'n')) {
        result += " ";
        i++;
      }
      else {
        result += mystr[i];
      }
    }
    return result;
  }

  function truncateString(mystr, maxLength) {
    const str = replace(mystr);
    const startIndex = str.indexOf("Abstract") + 8;

    console.log(startIndex);
    if (startIndex !== -1)
      return str.substring(startIndex, startIndex + maxLength);
    return str.substring(1, maxLength);
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
