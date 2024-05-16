import React from "react";
import { useStore } from "../utils/zustStore";
import { Empty } from 'antd';
import NewsTile from "./NewsTile"

const RenderResult = () => {
    const { news } = useStore();

    return <>{news.length > 0 ?
        news.map(item => <NewsTile dateTimeString={item.updated_at} title={item.title} id={item.objectID}/>) : <Empty style={{margin: "100px"}}/>
    }</>
}

export default RenderResult;