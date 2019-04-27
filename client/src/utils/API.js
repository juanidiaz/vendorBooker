import axios from "axios";

export default {

  // About: SERVICES

  // Get ALL services
  getServices: () => {
    return axios.get("/api/services");
  },

  // Save ONE service
  addService: (newService) => {
    return axios.post("/api/services", newService);
  },

  // Get ONE service by ID
  getService: (id) => {
    return axios.get("/api/services/" + id);
  },

  // Update ONE service by ID
  uptadeService: (id) => {
    return axios.put("/api/services/" + id);
  },

  // Delete ONE service by ID
  deleteService: (id) => {
    return axios.delete("/api/services/" + id);
  },

  ///////////////////////
  // About: USERS

  // Get ALL users
  getUsers: () => {
    return axios.get("/api/users");
  },

  // Save ONE user
  addUser: (newUser) => {
    return axios.post("/api/users", newUser);
  },

  // Get ONE user by ID
  getUser: (id) => {
    return axios.get("/api/users/" + id);
  },

  // Update ONE user by ID
  uptadeUser: (id) => {
    return axios.put("/api/users/" + id);
  },

  // Delete ONE user by ID
  deleteUser: (id) => {
    return axios.delete("/api/users/" + id);
  },

  ///////////////////////
  // About: CALENDAR EVENTS

  // Get ALL calendar events
  getCalendars: () => {
    return axios.get("/api/calendars");
  },

  // Save ONE calendar event
  addCalendar: (newCalendar) => {
    return axios.post("/api/calendars", newCalendar);
  },

  // Get ONE calendar event by ID
  getCalendar: (id) => {
    return axios.get("/api/calendars/" + id);
  },

  // Update ONE calendar event by ID
  uptadeCalendar: (id) => {
    return axios.put("/api/calendars/" + id);
  },

  // Delete ONE calendar event by ID
  deleteCalendar: (id) => {
    return axios.delete("/api/calendars/" + id);
  },

  ///////////////////////
};

/*            --- API PATHS ---

/api/users            GET      get ALL Users
/api/users            POST     add ONE User
/api/users/:id        GET      get ONE User
/api/users/:id        PUT      update ONE User
/api/users/:id        DELETE   delete ONE User

/api/secusers         GET      get ALL Secondary users (pets)
/api/secusers         POST     add ONE Secondary users (pets)
/api/secusers/:id     GET      get ONE Secondary users (pets)
/api/secusers/:id     PUT      update ONE Secondary users (pets)
/api/secusers/:id     DELETE   delete ONE Secondary users (pets)

/api/services         GET      get ALL Services
/api/services         POST     add ONE Service
/api/services/:id     GET      get ONE Service
/api/services/:id     PUT      update ONE Service
/api/services/:id     DELETE   delete ONE Service

/api/vendor           GET      get ALL Vendors
/api/vendor           POST     add ONE Vendor
/api/vendor/:id       GET      get ONE Vendor
/api/vendor/:id       PUT      update ONE Vendor
/api/vendor/:id       DELETE   delete ONE Vendor

/api/calendars        GET      get ALL Calendar events
/api/calendars        POST     add ONE Calendar event
/api/calendars/:id    GET      get ONE Calendar event
/api/calendars/:id    PUT      update ONE Calendar event
/api/calendars/:id    DELETE   delete ONE Calendar event

/api/services         GET      get ALL Services
/api/services         POST     add ONE Service
/api/services/:id     GET      get ONE Service
/api/services/:id     PUT      update ONE Service
/api/services/:id     DELETE   delete ONE Service

/api/notif            GET      get ALL Notifications
/api/notif            POST     add ONE Notification
/api/notif/:id        GET      get ONE Notification
/api/notif/:id        PUT      update ONE Notification
/api/notif/:id        DELETE   delete ONE Notification

*/