import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props;
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
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img
                                height={200} width={200}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                        </div>
                        <div>
                            <label htmlFor="btnUpload" style={{
                                display: "block",
                                width: "fit-content",
                                padding: "5px 10px",
                                margin: "20px 0 0 20px",
                                border: "1px black",
                                borderRadius: "5px",
                                backgroundColor: "blue",
                                color: "#fff",
                                cursor: "pointer"
                            }}>Upload Avatar</label>
                            <input type="file" hidden id="btnUpload" />
                        </div>
                    </>
                    :
                    <>Không có dữ liệu</>
                }
            </>
        </Drawer>

    );
}

export default ViewUserDetail;