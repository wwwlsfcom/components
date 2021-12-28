/**
 * 基于React实现的树控件
 */
import React from "react";

export default class TreeView extends React.Component<any, any> {

    private readonly dataSource = [];

    constructor(props) {
        super(props);
        if (props.dataSource instanceof Array)
            this.dataSource = props.dataSource.concat([]);
    }

    private dataItemsToList(items: Array<{ text, children? }>): Array<React.ReactElement> {
        if (items instanceof Array && items.length) {
            const list = items.map((data, index) => {
                const childrenList = this.dataItemsToList(data.children)
                if (childrenList && childrenList.length)
                    return (
                        <li key={index}>{data.text}
                            <ul className='ul tree'>{childrenList}</ul>
                        </li>
                    );
                else
                    return <li key={index}>{data.text}</li>
            });
            return list;
        } else
            return null;
    }


    render() {
        const list = this.dataItemsToList(this.dataSource);
        return (
            <ul className='ul'>{list}</ul>
        );
    }


}