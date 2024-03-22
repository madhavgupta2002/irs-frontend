import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/apiNew";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from "./Pagination";

const SearchResult = () => {
    const [result, setResult] = useState(null);
    const [selectedDomain, setSelectedDomain] = useState(""); // Add a new state for the selected domain
    const { query, startIndex } = useParams();

    useEffect(() => {
        setResult(null);
        fetchSearchResults();
    }, [query, startIndex]);

    const fetchSearchResults = () => {
        let payload = { q: query, start: startIndex };

        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            setResult(res);
        });
    };

    const handleDomainFilter = (domain) => {
        setSelectedDomain(domain);
    };

    if (result === null) {
        return (
            <div className="flex flex-col min-h-[100vh]">
                <SearchResultHeader />
                <div>Loading...</div>
                <Footer />
            </div>
        );
    }

    const filteredResult = selectedDomain
        ? result.filter((item) => item._source.domain === selectedDomain)
        : result;

    return (
        <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader />
            <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                {/* Add a section to display the domain filter options */}
                <div>
                    <label>Filter by Domain:</label>
                    <select value={selectedDomain} onChange={(e) => handleDomainFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Life Sciences">Life Sciences</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Physics">Physics</option>
                        <option value="Medicine and Healthcare">Medicine and Healthcare</option>
                        <option value="Environmental Science">Environmental Science</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Social Sciences">Social Sciences</option>
                        <option value="Education">Education</option>
                        <option value="Defense">Defense</option>
                    </select>
                </div>
                <div className="flex text-sm text-[#70757a] mb-3">
                    {/* {`About ${searchInformation.formattedTotalResults} results in ${searchInformation.formattedSearchTime} seconds`} */}
                </div>
                {filteredResult.length === 0 ? (
                    <div>No results found</div>
                ) : (
                    <>
                        {filteredResult.map((item, index) => (
                            <SearchedItemTemplate key={index} data={item} />
                        ))}
                    </>
                )}
                {/* <Pagination queries={queries}/> */}
            </main>
            <Footer />
        </div>
    );
};

export default SearchResult;