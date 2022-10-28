import React, { useMemo, useState, useRef, useEffect } from 'react';
import NewsCard from './NewsCard';
import "./NewsGrid.css"
import data from '../../common/NewsApi/newsApi';
import { Pagination } from 'antd'

const NewsGrid = () => {
    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [dataSource, setDataSource] = useState([]);
    const fetchRecords = () => {
        fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-10-21&sortBy=popularity&apiKey=d4bc3ee53ccf4e8d8eee5a9bec24a825").then((res) => {
            res.json().then(responce => {
                setDataSource(responce.articles)
                setTotalPages(responce.totalResults)
            })
        })
    }
    useEffect(() => {
        fetchRecords()
    }, [])
    return (<>
        <div className="newsgrid">
            {dataSource.slice(page, page * pageSize).map((item, key) =>
                <NewsCard item={item} key={key} />
            )}
        </div>
        <div className='meta__pagination'>
            <Pagination
                pageSize={pageSize}
                total={totalPages}
                onChange={(e) => setPage((e - 1))}
            />
        </div>
    </>
    );
};

export default NewsGrid;