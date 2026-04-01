import React from 'react';

const Loading = ({ item, line }) => {
    return (
        [...Array(item)].map((item) => (
            <div className="mx-auto w-full max-w-sm rounded-md border border-gray-300 p-4">
                <div className="animate-pulse">
                    <div className="flex-1 space-y-6 py-1">
                        {
                            [...Array(line)].map((item) => (
                                <div className="h-2 rounded bg-gray-200"></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))
    );
}

export default Loading;
