import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Avatar from "@mui/material/Avatar";

import { useMediaQuery } from "react-responsive";

import "./styles.css";

function Cards() {
  const isMobile = useMediaQuery({ maxWidth: 850 });

  const cards = [
    {
      card: (
        <ChatOutlinedIcon
          sx={{ fill: "#F76448", width: "33px", height: "33px" }}
        />
      ),
      title: "Exchange meaningful conversation",
    },
    {
      card: (
        <PersonOutlineOutlinedIcon
          sx={{ fill: "#F76448", width: "33px", height: "33px" }}
        />
      ),
      title: "Singles revealing their true self through detailed profiles",
    },
    {
      card: (
        <SavedSearchOutlinedIcon
          sx={{ fill: "#F76448", width: "33px", height: "33px" }}
        />
      ),
      title: "A powerful search tool with detailed filtration",
    },
    {
      card: (
        <CalendarMonthOutlinedIcon
          sx={{ fill: "#F76448", width: "33px", height: "33px" }}
        />
      ),
      title: "Themed events that create exciting dating occasions",
    },
  ];

  return (
    <div className="bottom-section">
      {!isMobile ? (
        cards.map((card) => {
          return (
            <div className="card-wrapper" key={card.title}>
              <Avatar
                sx={{ bgcolor: "#ffffff", width: "64px", height: "64px" }}
              >
                {card.card}
              </Avatar>
              <p className="card-title">{card.title}</p>
            </div>
          );
        })
      ) : (
        <>
          <div className="up-card">
            <div className="card-wrapper">
              <Avatar
                sx={{ bgcolor: "#ffffff", width: "64px", height: "64px" }}
              >
                <ChatOutlinedIcon
                  sx={{ fill: "#F76448", width: "33px", height: "33px" }}
                />
              </Avatar>
              <p className="card-title">Exchange meaningful conversation</p>
            </div>
            <div className="card-wrapper">
              <Avatar
                sx={{ bgcolor: "#ffffff", width: "64px", height: "64px" }}
              >
                <PersonOutlineOutlinedIcon
                  sx={{ fill: "#F76448", width: "33px", height: "33px" }}
                />{" "}
              </Avatar>
              <p className="card-title">
                Singles revealing their true self through detailed profiles
              </p>
            </div>
          </div>
          <div className="bottom-card">
            <div className="card-wrapper">
              <Avatar
                sx={{ bgcolor: "#ffffff", width: "64px", height: "64px" }}
              >
                <SavedSearchOutlinedIcon
                  sx={{ fill: "#F76448", width: "33px", height: "33px" }}
                />
              </Avatar>
              <p className="card-title">
                A powerful search tool with detailed filtration
              </p>
            </div>{" "}
            <div className="card-wrapper">
              <Avatar
                sx={{ bgcolor: "#ffffff", width: "64px", height: "64px" }}
              >
                <CalendarMonthOutlinedIcon
                  sx={{ fill: "#F76448", width: "33px", height: "33px" }}
                />{" "}
              </Avatar>
              <p className="card-title">
                Themed events that create exciting dating occasions
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cards;
