import React, { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Eye, Plus, Trash } from "react-feather"
import { Card } from "../../components/card"
import { CircleButton } from "../../components/button"
import { Toastify } from "../../components/toastify"
import { DataTable } from "../../components/table"
import { Services } from "../../http-services"

const Index = () => {
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(20)
    const [totalRows, setTotalRows] = useState(0)
    const [isLoading, setLoading] = useState(true)

    /* fetch data */
    const fetchData = useCallback(async (page) => {
        try {
            setLoading(true)
            const response = await Services.Admin.index({ page, limit: perPage })
            if (response.status === 200) {
                setData(response.data.data)
                setTotalRows(response.data.pagination?.response.data.pagination.total_items)
            }
            setLoading(false)
        } catch (error) {
            if (error) {
                setLoading(false)
                if (error.response && error.response.data && error.response.data.errors) {
                    Toastify.Error(error.response.data.errors.message)
                }
            }
        }
    }, [perPage])

    useEffect(() => {
        fetchData(1)
    }, [fetchData])

    // handle paginate page change
    const handlePageChange = page => fetchData(page)

    // handle paginate row change
    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true)
        const response = await Services.Admin.index({ page, limit: newPerPage })
        setData(response.data.data)
        setPerPage(newPerPage)
        setLoading(false)
    }

    // data columns
    const columns = [
        {
            name: "Name",
            sortable: true,
            selector: row => row.name || "N/A"
        },
        {
            name: "Phone",
            sortable: true,
            selector: row => row.phone || "N/A"
        },
        {
            name: "Role",
            sortable: true,
            selector: row => row.role
        },
        {
            name: "Details",
            width: "120px",
            cell: row =>
                <div>
                    <CircleButton
                        type="button"
                    // onClick={() => setDetails({ data: row, status: true })}
                    >
                        <Eye size={20} />
                    </CircleButton>

                    <CircleButton
                        type="button"
                        className="ml-1"
                    // onClick={() => setDetails({ data: row, status: true })}
                    >
                        <Trash size={20} />
                    </CircleButton>
                </div>
        }
    ]

    return (
        <div>
            <Card className="mb-3">
                <div className="flex">
                    <div className="pt-[7px]">
                        <p className="text-[16px] text-gray-800 font-medium">Admin list</p>
                    </div>
                    <div className="ml-auto">
                        <Link to="/dashboard/admin/store">
                            <CircleButton>
                                <Plus size={22} />
                            </CircleButton>
                        </Link>
                    </div>
                </div>
            </Card>

            <Card>
                <DataTable
                    data={data}
                    columns={columns}
                    loading={isLoading}
                    totalRows={totalRows}
                    handlePerRowsChange={handlePerRowsChange}
                    handlePageChange={handlePageChange}
                />
            </Card>
        </div>
    );
};

export default Index;