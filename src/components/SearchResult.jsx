import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// import { fetchDataFromApi } from "../utils/api";
import { fetchDataFromApi } from "../utils/apiNew";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    const [result,setResult]=useState();
    const {query,startIndex} =useParams();
    
    useEffect(()=>{
        fetchSearchResults();
    },[query,startIndex]);
    
    const fetchSearchResults=()=>{
        let payload={q: query, start: startIndex}

        fetchDataFromApi(payload).then((res)=>{
            console.log(res)
            setResult(res);
        });
    }
    if(!result) return;
    return (
        <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader />
            <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                <div className="flex text-sm text-[#70757a] mb-3">
                    {/* {`About ${searchInformation.formattedTotalResults} results in ${searchInformation.formattedSearchTime} seconds`} */}
                </div> 
                { (<>
                    {result.map((item,index)=>(
                        <SearchedItemTemplate key={index} data={item} />
                    ))}
                </>)
                }
                {/* <Pagination queries={queries}/> */}
            </main> 
            <Footer/>
        </div>
    );
};

export default SearchResult;