import React, { useState } from "react";
import MOCK_DATA from './MOCK_DATA.json'
import DataboardContextMenu from "./DataboardContextMenu";
export default function Table() {
    const [showContactContext, setShowContactContext] = useState(false)
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
    const [contextData, setShowContextData] = useState({})
    const contextMenuHandler = (e) => {
        e.preventDefault();
        setShowContactContext(true);
        setCoordinates({
            x: e.clientX,
            y: e.clientY
        })
        // setShowContextData(contextInfo)

    }

    const data = MOCK_DATA
    return (
        <div className="flex flex-col px-5">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border-grayInactive border rounded-sm">
                        <table className="min-w-full divide-y divide-grayInactive">
                            <thead className="bg-defaultBackground">
                                <tr>
                                    <th scope="col" className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="checkbox-all"
                                                type="checkbox"
                                                className="text-blue-600 border-grayInactive rounded focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="checkbox"
                                                className="sr-only"
                                            >
                                                Checkbox
                                            </label>
                                        </div>
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th> */}
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-blackMain uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-blackMain uppercase "
                                    >
                                        Gender
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-blackMain uppercase "
                                    >
                                        Time In
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-blackMain uppercase "
                                    >
                                        Time Out
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-grayInactive">
                                {data.map((user, index) => {

                                    return (
                                        <>
                                            <tr key={index} className=" border-grayInactive my-3" onContextMenu={contextMenuHandler}>
                                                <td className="py-3 pl-4">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            type="checkbox"
                                                            className="text-blue-600 border-grayInactive rounded focus:ring-blue-500"
                                                        />
                                                        <label
                                                            htmlFor="checkbox"
                                                            className="sr-only"
                                                        >
                                                            Checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {user.id}
                                                </td> */}
                                                <td className="px-6 py-4 text-sm text-mainBlack  whitespace-nowrap">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-mainBlack whitespace-nowrap">
                                                    {user.gender}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-mainBlack  whitespace-nowrap">
                                                    {user.time_in}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-mainBlack  whitespace-nowrap">
                                                    {user.time_out}
                                                </td>

                                            </tr>
                                        </>
                                    );
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
           {showContactContext? <DataboardContextMenu data={contextData} coordinates={coordinates} />:null}
        </div>
    );
}