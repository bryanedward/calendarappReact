import Swal from "sweetalert2";
import { fetchConToken } from "../components/helpers/fetch";
import { preparEvents } from "../components/helpers/preparEvents";
import { types } from "../types/types";

export const getAllEvent = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("events");
      const body = await resp.json();
      const preparEvent = preparEvents(body.eventos);
      dispatch(allEvent(preparEvent));
    } catch (error) {}
  };
};

const allEvent = (event) => ({
  type: types.eventLoaded,
  payload: event,
});

export const setActive = (note) => ({
  type: types.eventSetActive,
  payload: note,
});

export const eventNewEvent = (event) => {
  //crear un nuevo evento
  return async (dispacth, getUser) => {
    const { uid, name } = getUser().auth;
    try {
      const resp = await fetchConToken("events", event, "POST");
      const body = await resp.json();
      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          uid,
          name,
        };
        dispacth(addNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const addNew = (note) => ({
  type: types.eventAddNew,
  payload: note,
});

export const clearActive = () => ({
  type: types.clearActive,
});

export const updateEventDatabase = (event) => {
  //evento para eliminar datos
  return async (dispacth) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, "PUT");
      const body = await resp.json();
      if (body.ok) {
        dispacth(updateNote(body.evento));
      } else {
        Swal.fire({
          icon: "error",
          title: body.msg,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateNote = (note) => ({
  type: types.updateActive,
  payload: note,
});

export const deleteEventDatabase = (event) => {
  //evento para eliminar datos
  return async (dispacth) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, "DELETE");
      const body = await resp.json();
      if (body.ok) {
        dispacth(deleteNote());
      } else {
        Swal.fire({
          icon: "error",
          title: body.msg,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteNote = () => ({
  type: types.deleteActive,
});

export const EventLogOut = () => ({
  types: types.eventLogOut,
});
