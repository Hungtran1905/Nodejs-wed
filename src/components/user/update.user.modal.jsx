import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI, updateUserAPI } from "../../services/api_services";

const UpdateUserModal = (props) => {
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [id, setId] = useState("")

    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setId(dataUpdate._id)
            setPhoneNumber(dataUpdate.phone);
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        console.log(res)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật thành công!"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setId("");
        setPhoneNumber("");
        setDataUpdate(null);
    }
    return (
        <Modal title="Update a user"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input value={id}
                        disabled />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => {
                            setFullName(event.target.value)
                        }} />
                </div>

                <div>
                    <span>Phone number</span>
                    <Input value={phone} onChange={(event) => {
                        setPhoneNumber(event.target.value)
                    }} />
                </div>
            </div>
        </Modal >
    )
}

export default UpdateUserModal