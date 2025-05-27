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
                        </ul>

                    </>
                    :
                    <>Không có dữ liệu</>
                }
            </>
        </Drawer>

    );
}

export default ViewUserDetail;