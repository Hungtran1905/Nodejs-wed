import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table, message } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api_services';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null)
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [dataDetail, setDataDetail] = useState()

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xóa người dùng thành công!"
            })
            await loadUser();
        } else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message)
            })
        }
    };
    const cancel = e => {
        console.log(e);
        message.error('Click on No');
    };
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => {
                        setIsDetailOpen(true)
                        setDataDetail(record)
                    }}>{record._id}</a>
                )
            }

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined onClick={() => {
                        setDataUpdate(record);
                        setIsModalUpdateOpen(true);
                    }}
                        style={{ cursor: "pointer", color: "blue" }} />
                    < Popconfirm
                        title="Xóa người dùng"
                        description="Bạn có chắc chắn muốn xóa người dùng này?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        placement='left'

                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>

            )
        }

    ];
    return (
        <>
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"} />
            <UpdateUserModal setIsModalUpdateOpen={setIsModalUpdateOpen}
                isModalUpdateOpen={isModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser} />
            <ViewUserDetail isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />
        </>
    )

}

export default UserTable;