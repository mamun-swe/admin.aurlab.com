import React from "react"
import millify from "millify"
import { Card } from "../../components/card"

const index = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="text-center">
                    <div className="p-4">
                        <p className="text-4xl font-thin">{millify(15)}+</p>
                        <p className="text-xl font-bold text-gray-300">Category</p>
                    </div>
                </Card>
                <Card className="text-center">
                    <div className="p-4">
                        <p className="text-4xl font-thin">{millify(10000)}+</p>
                        <p className="text-xl font-bold text-gray-300">Researcher</p>
                    </div>
                </Card>
                <Card className="text-center">
                    <div className="p-4">
                        <p className="text-4xl font-thin">{millify(150000)}+</p>
                        <p className="text-xl font-bold text-gray-300">Publications</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default index;