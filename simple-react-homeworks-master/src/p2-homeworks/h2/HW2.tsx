import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any

    switch (filter) {
        case 'all':
            return affairs;
            break
        case 'high':
            affairs = affairs.filter(sort => {
                return (
                    sort.priority === 'high'
                )
            })
            return affairs
            break
        case 'middle':
            affairs = affairs.filter(sort => {
                return (
                    sort.priority === 'middle'
                )
            })
            return affairs
            break
        case 'low':
            affairs = affairs.filter(sort => {
                return (
                    sort.priority === 'low'
                )
            })
            return affairs
            break
        default:
            return affairs
    }
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    let deletedAffair = affairs.filter(affair => {
        return (
            affair._id !== _id
        )
    })
    return deletedAffair
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                title={filter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
