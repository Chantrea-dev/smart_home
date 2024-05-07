"use client";
import React from "react";
export default function Home() {
    return (
        <>
            <div className="smart-light">
                <div className="text-center shadow-gray-300 shadow-lg p-5 flex justify-center items-center gap-2">
                    <h1 className="text-xl font-bold">Light Control</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                            <path
                                fill="blue"
                                d="M5 9a7 7 0 0 1 7.582-6.976a1 1 0 1 1-.164 1.993A5 5 0 0 0 7 9v3.528a3 3 0 0 1-.317 1.342L5.618 16h12.764l-1.065-2.13A3.001 3.001 0 0 1 17 12.528V11a1 1 0 0 1 2 0v1.528a1 1 0 0 0 .105.447l1.717 3.433A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592l1.716-3.433A1 1 0 0 0 5 12.528zm5.268 9a2 2 0 0 0 3.464 0zM17.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"
                            />
                        </g>
                    </svg>
                </div>
                <div className="max-w-[1140px] ml-auto mr-auto justify-center grid gap-3 p-5">
                    <div className="text-center sm:text-start font-serif">
                        LED TEMPORARY
                    </div>
                    <div className="LED flex gap-[3.25rem] flex-wrap justify-center">
                        <div className="out-door flex-col flex justify-center items-center whitespace-nowrap">
                            <div className="bg-blue-600 w-[55px] rounded-md justify-center flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M15 22h-2c-1.1 0-2-.9-2-2v-5h6v5c0 1.1-.9 2-2 2m-8-8h14l-6-4.29V6c0-1.61-1.06-4-4-4S7 4.39 7 6c0 .45-.19 1-1 1H5V3H3v9h2V9h1c2.2 0 3-1.79 3-3c0-.33.1-2 2-2c1.83 0 2 1.54 2 2v3.71z"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#2563eb] text-[12px]">
                                Outdoor Areas
                            </p>
                        </div>
                        <div className="out-door flex-col flex justify-center items-center whitespace-nowrap">
                            <div className="bg-blue-600 w-[55px] rounded-md justify-center flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M12.5 7c0-1.11.89-2 2-2H18c1.1 0 2 .9 2 2v2.16c-1.16.41-2 1.51-2 2.81V14h-5.5zM6 11.96V14h5.5V7c0-1.11-.89-2-2-2H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.52 2 2.81m14.66-1.93c-.98.16-1.66 1.09-1.66 2.09V15H5v-3a2 2 0 1 0-4 0v5c0 1.1.9 2 2 2v2h2v-2h14v2h2v-2c1.1 0 2-.9 2-2v-5c0-1.21-1.09-2.18-2.34-1.97"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#2563eb] text-[12px]">
                                Living room
                            </p>
                        </div>
                        <div className="out-door flex-col flex justify-center items-center whitespace-nowrap">
                            <div className="bg-blue-600 w-[55px] rounded-md justify-center flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 3h8l-1 9H5zm3 15h2v3H7zM20 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 12v6"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#2563eb] text-[12px]">
                                Kitchen
                            </p>
                        </div>
                        <div className="out-door flex-col flex justify-center items-center whitespace-nowrap">
                            <div className="bg-blue-600 w-[55px] rounded-md justify-center flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M8 5c-.5 0-1 .21-1.39.6S6 6.45 6 7v3c-.53 0-1 .19-1.41.59S4 11.47 4 12v5h1.34L6 19h1l.69-2h8.67l.64 2h1l.66-2H20v-5c0-.53-.19-1-.59-1.41S18.53 10 18 10V7c0-.55-.2-1-.61-1.4S16.5 5 16 5M8 7h3v3H8m5-3h3v3h-3m-7 2h12v3H6Z"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#2563eb] text-[12px]">
                                Bed room
                            </p>
                        </div>
                        <div className="out-door flex-col flex justify-center items-center whitespace-nowrap">
                            <div className="bg-blue-600 w-[55px] rounded-md justify-center flex p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35px"
                                    height="35px"
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        fill="white"
                                        d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#2563eb] text-[12px]">
                                Add more
                            </p>
                        </div>
                    </div>
                    <div className="text-center sm:text-start from-neutral-600">
                        Larmp Control
                    </div>
                    <div className="larmp-control grid gap-3">
                        <div className="grid gap-2">
                            <p className="text-[#2563eb] font-semibold">
                                Bed room
                            </p>
                            <div className="flex border-blue-500 border rounded-md p-2 gap-2 justify-center items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="gray"
                                            d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <input
                                        id="minmax-range"
                                        type="range"
                                        min="0"
                                        value="5"
                                        class="w-[423px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="gray"
                                            d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-[#2563eb] font-semibold">
                                Living room
                            </p>
                            <div className="flex border-blue-500 border rounded-md p-2 gap-2 justify-center items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="gray"
                                            d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <input
                                        id="minmax-range"
                                        type="range"
                                        min="0"
                                        value="5"
                                        class="w-[423px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="gray"
                                            d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-[#2563eb] font-semibold">
                                Add more
                            </p>
                            <div className="flex border-blue-500 border rounded-md gap-2 justify-center items-center">
                                <div className="p-[3px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40px"
                                        height="40px"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            fill="blue"
                                            d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
