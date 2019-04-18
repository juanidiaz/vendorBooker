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
  dalateService: (id) => {
    return axios.delete("/api/services/" + id);
  },

  ///////////////////////

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};

/*            --- API PATHS ---

/api/users         GET      get ALL Users
/api/users         POST     add ONE User
/api/users/:id     GET      get ONE User
/api/users/:id     PUT      update ONE User
/api/users/:id     DELETE   delete ONE User

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

/api/vendor         GET      get ALL Vendors
/api/vendor         POST     add ONE Vendor
/api/vendor/:id     GET      get ONE Vendor
/api/vendor/:id     PUT      update ONE Vendor
/api/vendor/:id     DELETE   delete ONE Vendor

/api/calendars         GET      get ALL Calendar events
/api/calendars         POST     add ONE Calendar event
/api/calendars/:id     GET      get ONE Calendar event
/api/calendars/:id     PUT      update ONE Calendar event
/api/calendars/:id     DELETE   delete ONE Calendar event

/api/services         GET      get ALL Services
/api/services         POST     add ONE Service
/api/services/:id     GET      get ONE Service
/api/services/:id     PUT      update ONE Service
/api/services/:id     DELETE   delete ONE Service

/api/notif         GET      get ALL Notifications
/api/notif         POST     add ONE Notification
/api/notif/:id     GET      get ONE Notification
/api/notif/:id     PUT      update ONE Notification
/api/notif/:id     DELETE   delete ONE Notification

*/