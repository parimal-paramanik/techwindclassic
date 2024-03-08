import React from "react";
import feature from '../assets/images/feature.png';

import * as Icon from 'react-feather'

export default function KeyFeatureTwo(){
    return(
        <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
        <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
            <div className="grid grid-cols-1 gap-[30px]">
                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Monitor className="w-5 h-5"></Icon.Monitor>
                    </div>
                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Custom Story Bot</h4>
                        <p className="text-slate-400 mt-3">We developed a children story book bot for our clients to give image rich ready to publish books.</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Feather className="w-5 h-5"></Icon.Feather>
                    </div>
                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Price Recommendation</h4>
                        <p className="text-slate-400 mt-3">Price Recommendation built with automated competitive price monitoring and AI based price modifications for user goods.</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Eye className="w-5 h-5"></Icon.Eye>
                    </div>
                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Backtesting Engine</h4>
                        <p className="text-slate-400 mt-3">Web3 DEX based Automated Trading Backtesting Engine for robust trading strategies.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
            <img src={feature} className="mx-auto md:max-w-[300px]" alt="" />
        </div>

        <div className="lg:col-span-4 md:col-span-6 order-3">
            <div className="grid grid-cols-1 gap-[30px]">
                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.UserCheck className="w-5 h-5"></Icon.UserCheck>
                    </div>
                    <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Sales Call Analyzer</h4>
                        <p className="text-slate-400 mt-3">Analyze Sales/Loans calls for multiple parameters with support for multiple Indian languages.</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Smartphone className="w-5 h-5"></Icon.Smartphone>
                    </div>
                    <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Social Content AI</h4>
                        <p className="text-slate-400 mt-3">Generate Social Media content using AI tools/models and attract the crucial attention of users for your product.</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Heart className="w-5 h-5"></Icon.Heart>
                    </div>
                    <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Travel AI</h4>
                        <p className="text-slate-400 mt-3">Revolutionalize the experience of Travel Booking with AI recommendations and Gen AI based models for enhancing the Travel Booking Experience</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}