import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/globalState/GlobalState";
import {
  Loader,
  List,
  ListItem,
  ListButton,
  ListItemContent,
} from "../components";
import ChevronIcon from "../assets/chevron-down.svg";

export function EventList() {
  const {
    events,
    isLoading,
    error,
    showCount,
    fetchEventsFromPastWeek,
    removeEvent,
    increaseCount,
  } = useContext(GlobalContext);

  const [openEvent, setOpenEvent] = useState(null);

  useEffect(() => {
    fetchEventsFromPastWeek();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOpenEvent(null);
  }, [events]);

  // Should only show if we don't already have any fetched events,
  // else there's a different loading animation
  if (isLoading && !events) {
    return (
      <>
        <h2>History</h2>
        <p>Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2>History</h2>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div>
      <h2>History</h2>
      {/* // Only renders list if length is greater than zero. Else it renders a "no history" message */}
      {events && (
        <>
          {events.length === 0 && <p>No history yet</p>}
          <List
            // Hide list if there's no events
            style={
              events.length >= 1 ? { display: "block" } : { display: "none" }
            }
          >
            {isLoading && <Loader key="loader" />}
            {events.slice(0, showCount).map((event, i) => (
              <ListItem
                key={event._id}
                onClick={() => {
                  // if (!isLoading) removeEvent(event);
                  openEvent === i ? setOpenEvent(null) : setOpenEvent(i);
                }}
              >
                <ListItemContent
                  open={openEvent === i}
                  amount={event.amount}
                  timestamp={event.createdAt}
                  comment={event.comment}
                  handleDelete={() => {
                    if (!isLoading) removeEvent(event);
                  }}
                />
              </ListItem>
            ))}
            {events && events.length > showCount && (
              <ListButton
                key="list-btn"
                onClick={(e) => {
                  setOpenEvent(null);
                  increaseCount();
                }}
              >
                Show more
                <img src={ChevronIcon} alt="Arrow down" />
              </ListButton>
            )}
          </List>
          {/* <p style={{ textAlign: "center" }}>Show more
              font-size: 1.4rem;
    padding: 0.7rem 1.4rem;
    width: fit-content;
    margin: 0 auto;
    color: #2576f7;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 500;
          
          </p> */}
        </>
      )}
    </div>
  );
}
