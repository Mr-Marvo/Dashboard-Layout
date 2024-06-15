import { Typography } from "antd";
import ListsOutlinePrimary from "../../../assets/svg/ListsOutlinePrimary";
import NoDataAnim from "../components/common/nodataAnim/NoDataAnim";
import KanbanHeaderCol from "./components/KanbanHeaderCol";
import KanbanCommonCard from "./components/KanbanCommonCard";

const { Title } = Typography;

export default function Kanban() {
  // const socket = new WebSocket("wss://192.268.8.1");

  // Connection opened
  // socket.addEventListener("open", (event) => {
  //   socket.send("Connection established");
  // });

  // Listen for messages
  // socket.addEventListener("message", (event) => {
  //   console.log("Message from server ", event.data);
  // });

  return (
    <div
      className="h-full max-w-screen border"
      style={{ minHeight: `calc(100vh - 60px)` }}
    >
      {/* top header */}
      <div className="flex flex-row w-full gap-2 justify-between px-4 border-b border-b-secondaryFive py-2 fixed bg-primaryBgColor z-10">
        <div className="flex flex-row gap-4 xsm:gap-2 md:gap-4">
          <Title
            level={1}
            className="flex flex-row page-title gap-1 items-center"
          >
            <ListsOutlinePrimary className="flex w-[20px]" />
            Kanban
          </Title>
        </div>
      </div>

      {/* container */}
      <div
        className="w-full h-full flex items-start justify-between overflow-x-auto mt-12"
        style={{
          minHeight: `calc(100vh - 105px)`,
          maxHeight: `calc(100vh - 105px)`,
        }}
      >
        {/* 1st column */}
        <div
          className="min-w-[256px] xsm:min-w-[100vw] sm:min-w-[50vw] md:min-w-[35vw] xl:min-w-[20vw] relative"
          style={{
            minHeight: `calc(100vh - 125px)`,
            maxHeight: `calc(100vh - 125px)`,
          }}
        >
          <div className="w-full h-[65px] flex items-center justify-center bg-secondarySix px-2 sticky top-0">
            <KanbanHeaderCol
              title={"To Do"}
              borderColor={"rgba(134, 216, 53, 1)"}
              backgroundColor={"rgba(134, 216, 53, 0.3)"}
              count={5}
            />
          </div>
          <div
            className="w-full min-w-[256px] border-r px-2 overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              minHeight: `calc(100vh - 190px)`,
              maxHeight: `calc(100vh - 190px)`,
            }}
          >
            <KanbanCommonCard />
          </div>
        </div>
        {/* 2nd column */}
        <div
          className="min-w-[256px] xsm:min-w-[100vw] sm:min-w-[50vw] md:min-w-[35vw] xl:min-w-[20vw] relative"
          style={{
            minHeight: `calc(100vh - 125px)`,
            maxHeight: `calc(100vh - 125px)`,
          }}
        >
          <div className="w-full h-[65px] flex items-center justify-center bg-secondarySix px-2 sticky top-0">
            <KanbanHeaderCol
              title={"Ongoing"}
              borderColor={"rgba(240, 197, 45, 1)"}
              backgroundColor={"rgba(240, 197, 45, 0.3)"}
              count={5}
            />
          </div>
          <div
            className="w-full border-r px-2 overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              minHeight: `calc(100vh - 190px)`,
              maxHeight: `calc(100vh - 190px)`,
            }}
          >
            <KanbanCommonCard />
          </div>
        </div>
        {/* 3rd column */}
        <div
          className="min-w-[256px] xsm:min-w-[100vw] sm:min-w-[50vw] md:min-w-[35vw] xl:min-w-[20vw] relative"
          style={{
            minHeight: `calc(100vh - 125px)`,
            maxHeight: `calc(100vh - 125px)`,
          }}
        >
          <div className="w-full h-[65px] flex items-center justify-center bg-secondarySix px-2 sticky top-0">
            <KanbanHeaderCol
              title={"Completed"}
              borderColor={"rgba(63, 168, 245, 1)"}
              backgroundColor={"rgba(63, 168, 245, 0.3)"}
              count={5}
            />
          </div>
          <div
            className="w-full border-r px-2 overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              minHeight: `calc(100vh - 190px)`,
              maxHeight: `calc(100vh - 190px)`,
            }}
          >
            <div className="pt-10">
              <NoDataAnim message="No Data" />
            </div>
          </div>
        </div>
        {/* 4th column */}
        <div
          className="min-w-[256px] xsm:min-w-[100vw] sm:min-w-[50vw] md:min-w-[35vw] xl:min-w-[20vw] relative"
          style={{
            minHeight: `calc(100vh - 125px)`,
            maxHeight: `calc(100vh - 125px)`,
          }}
        >
          <div className="w-full h-[65px] flex items-center justify-center bg-secondarySix px-2 sticky top-0">
            <KanbanHeaderCol
              title={"Rejected"}
              borderColor={"rgba(234, 66, 106, 1)"}
              backgroundColor={"rgba(234, 66, 106, 0.3)"}
              count={5}
            />
          </div>
          <div
            className="w-full border-r px-2 overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              minHeight: `calc(100vh - 190px)`,
              maxHeight: `calc(100vh - 190px)`,
            }}
          >
            <KanbanCommonCard />
          </div>
        </div>
        {/* 5th column */}
        <div
          className="min-w-[256px] xsm:min-w-[100vw] sm:min-w-[50vw] md:min-w-[35vw] xl:min-w-[20vw] relative"
          style={{
            minHeight: `calc(100vh - 125px)`,
            maxHeight: `calc(100vh - 125px)`,
          }}
        >
          <div className="w-full h-[65px] flex items-center justify-center bg-secondarySix px-2 sticky top-0">
            <KanbanHeaderCol
              title={"Declined"}
              borderColor={"rgba(251, 139, 35, 1)"}
              backgroundColor={"rgba(251, 139, 35, 0.3)"}
              count={5}
            />
          </div>
          <div
            className="w-full border-r px-2 overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              minHeight: `calc(100vh - 190px)`,
              maxHeight: `calc(100vh - 190px)`,
            }}
          >
            <KanbanCommonCard />
          </div>
        </div>
      </div>
    </div>
  );
}
