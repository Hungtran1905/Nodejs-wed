import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api_services";


const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
        loadUser
    } = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnchangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateAvatar = await updateUserAvatarAPI(dataDetail._id, newAvatar, dataDetail.fullName, dataDetail.phone)
            if (resUpdateAvatar.data) {
                setIsDetailOpen(false)
                setSelectedFile(null)
                setPreview(null)
                await loadUser()
                notification.success({
                    message: "Update user avatar",
                    description: "Cập nhật ảnh đại diện thành công!"
                })
            } else {
                notification.error({
                    message: "Error update file!",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        } else {
            notification.error({
                message: "Error upload file!",
                description: JSON.stringify(resUpload.message)
            })
        }
    }
    return (
        <Drawer
            width={"30vw"}
            title="Chi tiết người dùng"
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }}
            open={isDetailOpen}
        >
            <>
                {dataDetail ?
                    <>
                        <ul style={{ listStyle: "none", fontSize: "20px", lineHeight: "2" }}>
                            <li>Id: {dataDetail._id}</li>
                            <li>Full name: {dataDetail.fullName}</li>
                            <li>Email: {dataDetail.email}</li>
                            <li>Phone number : {dataDetail.phone}</li>
                            <li>Avatar:</li>
                        </ul>
                        <div style={{
                            height: "100px",
                            width: "150px",
                            border: "1px solid #ccc",
                            objectFit: "contain"
                        }}>
                            <img
                                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                        </div>

                        <div>
                            <label htmlFor="btnUpload" style={{
                                display: "block",
                                width: "fit-content",
                                padding: "5px 10px",
                                marginTop: "15px",
                                marginBottom: "15px",
                                border: "1px solid black",
                                borderRadius: "5px",
                                backgroundColor: "blue",
                                color: "#fff",
                                cursor: "pointer"
                            }}>Upload Avatar</label>
                            <input
                                type="file" hidden id="btnUpload"
                                onChange={(event) => handleOnchangeFile(event)} />
                        </div>
                        <p style={{ fontSize: "18px", marginBottom: "10px" }}>Preview avatar:</p>
                        {preview &&
                            <>
                                <div style={{
                                    margin: "10px 0 15px 0",
                                    height: "100px",
                                    width: "150px",
                                }}>
                                    <img
                                        style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                        src={preview} alt="" />
                                </div>
                                <Button type="primary"
                                    onClick={() => handleUpdateUserAvatar()}>
                                    Save
                                </Button>
                            </>
                        }
                    </>
                    :
                    <>Không có dữ liệu</>
                }
            </>
        </Drawer>

    );
}

export default ViewUserDetail;